/* Run: node scripts/test-document-import.cjs. Uses isolated auth and network mocks. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

function load(relativePath, mocks = {}) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } });
  const instance = new Module(filename, module);
  instance.paths = Module._nodeModulePaths(path.dirname(filename));
  const originalRequire = instance.require.bind(instance);
  instance.require = name => Object.hasOwn(mocks, name) ? mocks[name] : originalRequire(name);
  instance._compile(compiled.outputText, filename);
  return instance.exports;
}

async function main() {
  const content = load('src/lib/long-content.ts');
  const html = '<h1>City guide</h1><p>Intro <strong>bold</strong> and <em>italic</em>.</p><h2>Machines</h2><h3>Jaw crusher</h3><h4>Capacity</h4><h5>More</h5><h6>Details</h6><ol start="3"><li>First</li></ol><table><tr><td colspan="2">150 TPH</td></tr></table>';
  assert.equal(content.sanitizeLongContent(html), html);
  const sanitized = content.sanitizeLongContent('<style>body{display:none}</style><script>alert(1)</script><h2 onclick="alert(1)">Heading</h2><img src="x" onerror="alert(1)"><a href="jav&#x61;script:alert(1)">Unsafe</a><iframe src="https://example.org"></iframe>');
  assert(!/script|onclick|onerror|iframe|style/.test(sanitized));
  assert(sanitized.includes('<h2>Heading</h2>'));
  assert.equal(content.isHtmlContent('Capacity < 600 TPH'), false);
  assert.equal(content.isHtmlContent('## Heading\n\nUse <https://example.org>'), false);
  assert(content.hasContentHeading(html));
  assert(content.hasContentHeading('### Keep this H3\n\nBody'));
  const { LongContent } = load('src/components/content/LongContent.tsx', {
    '@/lib/long-content': content,
    './LongContent.module.css': { __esModule: true, default: { content: 'long-content' } },
  });
  const { renderToStaticMarkup } = require('react-dom/server');
  const React = require('react');
  const rendered = renderToStaticMarkup(React.createElement(LongContent, { content: html }));
  assert(rendered.includes(html), 'Public renderer preserves the first heading and all subsequent content.');
  const markdown = renderToStaticMarkup(React.createElement(LongContent, { content: '## Heading\n\n### Subheading\n\n**Bold** text.' }));
  for (const expected of ['<h2>Heading</h2>', '<h3>Subheading</h3>', '<strong>Bold</strong>']) assert(markdown.includes(expected));

  let authorized = true;
  let connected = true;
  const route = load('src/app/api/cities/import-document/route.ts', {
    '@/lib/db/mongodb': { connectDB: async () => connected },
    '@/lib/city-admin-auth': { canManageCities: async () => authorized },
    '@/lib/long-content': content,
  });
  const headers = { 'x-city-admin-email': 'test@example.invalid', 'x-city-admin-password': 'test-only' };
  const request = (url, auth = headers) => new Request('http://localhost/api/cities/import-document', { method: 'POST', headers: { ...auth, 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) });
  assert.equal((await route.POST(request('https://docs.google.com/document/d/test/edit', {}))).status, 401);
  authorized = false;
  assert.equal((await route.POST(request('https://docs.google.com/document/d/test/edit'))).status, 403);
  authorized = true; connected = false;
  assert.equal((await route.POST(request('https://docs.google.com/document/d/test/edit'))).status, 503);
  connected = true;
  for (const url of ['http://127.0.0.1', 'https://docs.google.com.evil.example/document/d/test/edit', 'invalid']) assert.equal((await route.POST(request(url))).status, 400);
  const originalFetch = global.fetch;
  try {
    let calls = 0;
    global.fetch = async url => { calls++; assert.equal(String(url), 'https://docs.google.com/document/d/test/export?format=html'); return new Response(html, { headers: { 'Content-Type': 'text/html' } }); };
    const result = await route.POST(request('https://docs.google.com/document/d/test/edit?tab=t.0'));
    assert.equal(result.status, 200);
    assert.equal((await result.json()).html, html);
    assert.equal(calls, 1);
    global.fetch = async () => new Response(null, { status: 302, headers: { location: 'http://127.0.0.1/private' } });
    assert.equal((await route.POST(request('https://docs.google.com/document/d/test/edit'))).status, 422);
    global.fetch = async () => new Response('Private doc', { status: 403 });
    assert.equal((await route.POST(request('https://docs.google.com/document/d/test/edit'))).status, 422);
    const form = new FormData();
    form.append('file', new File(['wrong file'], 'document.pdf'));
    assert.equal((await route.POST(new Request('http://localhost', { method: 'POST', headers, body: form }))).status, 400);
    const word = new FormData();
    word.append('file', new File([fs.readFileSync(path.join(__dirname, 'fixtures/headings.docx'))], 'headings.docx'));
    const imported = await route.POST(new Request('http://localhost', { method: 'POST', headers, body: word }));
    assert.equal(imported.status, 200);
    const document = await imported.json();
    for (const expected of ['<h1>City guide</h1>', '<h2>Machines</h2>', '<h3>Jaw crusher</h3>', '<strong>Bold text</strong>', '<em>Italic text</em>', '<table>', '600 TPH']) assert(document.html.includes(expected));
  } finally { global.fetch = originalFetch; }
  console.log('Document import checks passed: DOCX conversion, heading levels, emphasis, tables, unsafe HTML, auth, URL restrictions, Google export, redirects and private documents.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
