/* Run with: node scripts/test-blog-images.cjs. No live database writes. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const { NextRequest } = require('next/server');

function load(relativePath, mocks = {}) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } });
  const instance = new Module(filename, module);
  instance.paths = Module._nodeModulePaths(path.dirname(filename));
  const originalRequire = instance.require.bind(instance);
  instance.require = name => Object.hasOwn(mocks, name) ? mocks[name] : originalRequire(name);
  instance._compile(compiled.outputText, filename);
  return instance.exports;
}

async function main() {
  const { getBlogThumbnailUrl } = load('src/lib/blogImage.ts');
  const oldBytes = Buffer.from('old-upload');
  const newBytes = Buffer.from('new-upload');
  assert.equal(oldBytes.length, newBytes.length);
  const dataUrl = bytes => `data:image/webp;base64,${bytes.toString('base64')}`;
  const slug = 'types-of-stone-crushers';
  const localImage = `/blogpageimg/${slug}.webp?v=old`;
  const stored = { slug, image: localImage, imageData: dataUrl(newBytes) };
  const url = getBlogThumbnailUrl(stored);
  assert(url.startsWith(`/api/blog-image/${slug}?v=`));
  assert.equal(getBlogThumbnailUrl({ ...stored }), url);
  assert.notEqual(getBlogThumbnailUrl({ ...stored, imageData: dataUrl(oldBytes) }), url);
  assert.equal(getBlogThumbnailUrl({ slug, image: '/blogpageimg/unchanged.jpg' }), '/blogpageimg/unchanged.jpg');
  assert.equal(getBlogThumbnailUrl({ slug, image: 'https://example.invalid/cover.png' }), 'https://example.invalid/cover.png');
  assert(getBlogThumbnailUrl({ slug, image: dataUrl(newBytes) }).startsWith(`/api/blog-image/${slug}?v=`));
  assert.equal(getBlogThumbnailUrl({ image: dataUrl(newBytes) }), dataUrl(newBytes));

  let record = stored;
  let available = true;
  let writes = 0;
  const route = load('src/app/api/blog-image/[slug]/route.ts', {
    '@/lib/db/mongodb': { connectDB: async () => available },
    '@/lib/models/Blog': { __esModule: true, default: { findOne: () => ({ lean: async () => record }) } },
    fs: {
      existsSync: file => path.basename(file) === `${slug}.webp` || path.basename(file) === 'crusherguide.jpg',
      readFileSync: file => path.basename(file) === 'crusherguide.jpg' ? Buffer.from('placeholder') : oldBytes,
      writeFileSync: () => { writes++; throw new Error('read-only filesystem'); },
    },
  });
  const context = { params: Promise.resolve({ slug }) };
  const request = headers => new NextRequest(`http://localhost/api/blog-image/${slug}`, { headers });
  const response = await route.GET(request(), context);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'image/webp');
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), newBytes);
  assert(response.headers.get('cache-control').includes('must-revalidate'));
  assert(!response.headers.get('cache-control').includes('stale-while-revalidate'));
  const tag = response.headers.get('etag');
  assert.equal((await route.GET(request({ 'If-None-Match': tag }), context)).status, 304);
  record = { ...stored, imageData: dataUrl(oldBytes) };
  const changed = await route.GET(request({ 'If-None-Match': tag }), context);
  assert.equal(changed.status, 200);
  assert.notEqual(changed.headers.get('etag'), tag);
  assert.deepEqual(Buffer.from(await changed.arrayBuffer()), oldBytes);
  record = { slug, image: dataUrl(newBytes) };
  assert.deepEqual(Buffer.from(await (await route.GET(request(), context)).arrayBuffer()), newBytes);
  available = false;
  assert.deepEqual(Buffer.from(await (await route.GET(request(), context)).arrayBuffer()), oldBytes);
  assert.equal(writes, 0);
  console.log('Blog image checks passed: latest upload wins, versioned URLs, equal-size replacements, conditional caching, static fallbacks, and no filesystem writes.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
