/* Run with: node scripts/test-city-content.cjs
 * Exercise city validation and API boundaries with isolated storage; no live DB writes.
 */
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
  const website = load('src/data/homeData.ts');
  const catalog = load('src/lib/city-products.ts', { '@/data/homeData': website });
  const content = load('src/lib/city-content.ts', { '@/lib/city-products': catalog });
  const jaipur = content.createCityContent();
  const delhi = content.createCityContent('Delhi', 'Delhi');
  const jaipurJaw = content.createCityContent('Jaipur', 'Rajasthan', 'prime-jaw-crusher');
  const cityWithoutState = content.createCityContent('Indore', '', 'prime-jaw-crusher');
  const payloadWithoutState = { ...cityWithoutState };
  delete payloadWithoutState.state;
  assert.equal(content.validateCityContent(payloadWithoutState).data.state, '');
  assert.equal(content.validateCityContent(cityWithoutState).data.state, '');
  assert(content.resolveCityContent(cityWithoutState).subheading.includes('in Indore.'));
  const { CityModel: StorageModel } = load('src/lib/models/City.ts');
  await new StorageModel(payloadWithoutState).validate();
  assert.equal(catalog.CITY_PRODUCTS.length, website.products.length + 2);
  assert.equal(catalog.cityPagePath(jaipur), '/city/stone-crusher-jaipur');
  assert.equal(catalog.cityPagePath(jaipurJaw), '/prime-jaw-crusher-jaipur');
  assert.equal(content.resolveCityContent(jaipurJaw).h1, 'Prime Jaw Crusher\nManufacturer\nin Jaipur');
  for (const product of catalog.CITY_PRODUCTS) {
    const page = content.createCityContent('Jaipur', 'Rajasthan', product.slug);
    assert(content.validateCityContent(page).data);
    assert(!content.resolveCityContent(page).longContent.includes('{{product}}'));
    assert(fs.existsSync(path.resolve(__dirname, '..', 'public', product.image.slice(1))), `Missing image: ${product.image}`);
  }
  const legacy = { ...jaipur, slug: 'jaipur', citySlug: undefined, productSlug: undefined, h1: 'Previously saved heading' };
  const normalized = content.normalizeCityContent(legacy);
  assert.equal(normalized.slug, 'stone-crusher-jaipur');
  assert.equal(normalized.storageSlug, 'jaipur');
  assert.equal(normalized.h1, legacy.h1);
  const beforeCapacityControls = { ...jaipur, capacityValue: undefined, capacityLabel: undefined };
  assert.equal(content.normalizeCityContent(beforeCapacityControls).capacityValue, '150–600');
  assert.equal(content.resolveCityContent(beforeCapacityControls).capacityLabel, 'TPH capacity');
  assert.equal(content.normalizeCityContent({ ...jaipurJaw, capacityValue: undefined, capacityLabel: undefined }).capacityValue, 'Expert');
  for (const invalidCapacity of [{ capacityValue: '' }, { capacityLabel: ' ' }, { capacityValue: 200 }, { capacityValue: 'x'.repeat(61) }, { capacityLabel: 'x'.repeat(101) }]) assert(content.validateCityContent({ ...jaipur, ...invalidCapacity }).error);
  await new StorageModel({ ...jaipur, capacityValue: '200–800', capacityLabel: 'TPH output' }).validate();
  assert.equal(content.resolveCityContent(delhi).h1, 'Stone Crusher\nManufacturer\nin Delhi');
  assert(!content.resolveCityContent(delhi).longContent.includes('{{city}}'));
  assert.equal(content.citySlug('  São Paulo! '), 'sao-paulo');
  assert(content.validateCityContent(jaipur).data);
  for (const invalid of [null, {}, { ...jaipur, slug: '../admin' }, { ...jaipur, faqs: [{}] }, { ...jaipur, faqs: Array(51).fill(jaipur.faqs[0]) }, { ...jaipur, name: ' ' }, { ...jaipur, productSlug: 'unknown' }, { ...jaipurJaw, slug: jaipur.slug }, { ...jaipur, longContent: '' }]) assert(content.validateCityContent(invalid).error);
  assert.equal(content.validateCityContent({ ...jaipur, admin: true }).data.admin, undefined);

  const records = new Map();
  let available = true;
  const CityModel = {
    find() { return { sort: () => ({ lean: async () => [...records.values()] }) }; },
    async exists({ slug }) { const record = records.get(slug); return record && !record.productSlug ? true : null; },
    findOne({ slug }) { return { lean: async () => records.get(slug) || null }; },
    async create(record) {
      if (records.has(record.slug)) throw Object.assign(new Error('duplicate'), { code: 11000 });
      records.set(record.slug, structuredClone(record));
      return record;
    },
    async findOneAndUpdate({ slug }, { $set: record }) {
      if (!records.has(slug)) return null;
      records.delete(slug);
      records.set(record.slug, structuredClone(record));
      return record;
    },
  };
  const savedCities = load('src/lib/cities.ts', {
    'server-only': {},
    react: { cache: fn => fn },
    '@/lib/db/mongodb': { connectDB: async () => available },
    '@/lib/models/City': { CityModel },
    '@/lib/city-content': content,
  });
  assert.deepEqual(await savedCities.getCities(), { cities: [], available: true });
  const mocks = {
    '@/lib/cities': savedCities,
    '@/lib/db/mongodb': { connectDB: async () => available },
    '@/lib/models/City': { CityModel },
    '@/lib/city-admin-auth': { canManageCities: async request => request.headers.get('x-city-admin-password') === 'test-valid-password' },
    '@/lib/city-content': content,
  };
  const collection = load('src/app/api/cities/route.ts', mocks);
  const item = load('src/app/api/cities/[slug]/route.ts', mocks);
  const request = (data, auth = 'test-valid-password') => new Request('http://localhost/api/cities', { method: 'POST', headers: { 'Content-Type': 'application/json', ...(auth ? { 'x-city-admin-email': 'test@example.invalid', 'x-city-admin-password': auth } : {}) }, body: JSON.stringify(data) });
  assert.equal((await collection.POST(request(jaipur, ''))).status, 401);
  assert.equal((await collection.POST(request(jaipur, 'wrong-password'))).status, 403);
  assert.equal((await collection.POST(request({}))).status, 400);
  assert.equal((await collection.POST(request(jaipur))).status, 201);
  assert.equal((await collection.POST(request(delhi))).status, 201);
  assert.equal((await collection.POST(request(payloadWithoutState))).status, 201);
  assert.equal(records.get(cityWithoutState.slug).state, '');
  assert.equal((await collection.POST(request(jaipur))).status, 409);
  assert.equal((await collection.POST(request(jaipurJaw))).status, 201);
  assert.deepEqual((await savedCities.getCities()).cities.map(city => city.slug), [...records.keys()]);
  const context = { params: Promise.resolve({ slug: jaipur.slug }) };
  assert.equal((await item.PATCH(request({ ...jaipur, h1: 'Updated Jaipur heading' }), context)).status, 200);
  assert.equal(records.get(jaipur.slug).h1, 'Updated Jaipur heading');
  assert.equal(records.get(delhi.slug).h1, delhi.h1);
  assert.equal(records.get(jaipurJaw.slug).h1, jaipurJaw.h1);
  const jawContext = { params: Promise.resolve({ slug: jaipurJaw.slug }) };
  assert.equal((await item.PATCH(request({ ...jaipurJaw, h1: 'Updated Jaipur Jaw', subheading: 'Jaw subheading', longContent: 'Jaw long content', faqs: [{question:'Jaw FAQ?',answer:'Jaw answer'}] }), jawContext)).status, 200);
  assert.equal(records.get(jaipur.slug).h1, 'Updated Jaipur heading');
  assert.equal(records.get(jaipurJaw.slug).longContent, 'Jaw long content');
  assert.equal((await item.PATCH(request({ ...jaipur, capacityValue: '200–800', capacityLabel: 'TPH output' }), context)).status, 200);
  assert.equal(records.get(jaipur.slug).capacityValue, '200–800');
  assert.equal(records.get(jaipur.slug).capacityLabel, 'TPH output');
  assert.equal(content.resolveCityContent(records.get(jaipur.slug)).capacityValue, '200–800');
  assert.equal(records.get(delhi.slug).capacityValue, '150–600');
  assert.equal(records.get(jaipurJaw.slug).capacityValue, 'Expert');
  assert.equal((await item.PATCH(request(beforeCapacityControls), context)).status, 200);
  assert.equal(records.get(jaipur.slug).capacityValue, '200–800');
  assert.equal(records.get(jaipur.slug).capacityLabel, 'TPH output');
  assert.equal((await item.PATCH(request(jaipurJaw), context)).status, 400);
  const legacyRecord = { ...legacy, slug: 'udaipur', name: 'Udaipur' };
  records.set('udaipur', legacyRecord);
  assert.equal((await collection.POST(request(content.createCityContent('Udaipur', 'Rajasthan')))).status, 409);
  const migrated = content.normalizeCityContent(legacyRecord);
  assert.equal((await item.PATCH(request(migrated), { params: Promise.resolve({slug:'udaipur'}) })).status, 200);
  assert(!records.has('udaipur'));
  assert.equal(records.get('stone-crusher-udaipur').h1, 'Previously saved heading');
  assert.equal((await item.PATCH(request(delhi), context)).status, 400);
  assert.equal((await item.PATCH(request(jaipur, ''), context)).status, 401);
  assert.equal((await item.PATCH(request(content.createCityContent('Missing', 'Rajasthan')), { params: Promise.resolve({ slug: 'stone-crusher-missing' }) })).status, 404);
  assert.equal((await collection.GET()).status, 200);
  available = false;
  assert.deepEqual(await savedCities.getCities(), { cities: [], available: false });
  assert.equal((await collection.POST(request(jaipur))).status, 503);
  assert.equal((await item.PATCH(request(jaipur), context)).status, 503);
  assert.equal((await collection.GET()).status, 503);

  // Resolve canonical and legacy public URLs against isolated saved pages.
  const cityIndex = load('src/app/city/page.tsx', {
    'next/navigation': { notFound: () => { throw Object.assign(new Error('Not found'), { status: 404 }); } },
  });
  assert.throws(() => cityIndex.default(), error => error.status === 404);
  const routes = load('src/components/city/CityRoute.tsx', {
    '@/lib/cities': { getCities: async () => ({ cities: [jaipur, jaipurJaw, delhi], available: true }) },
    '@/lib/city-products': catalog,
    '@/lib/city-content': content,
    './CityPage': { CityPage: () => null },
    'next/navigation': { notFound: () => { throw Object.assign(new Error('Not found'), { status: 404 }); }, permanentRedirect: url => { throw Object.assign(new Error('Redirect'), { status: 308, url }); } },
  });
  const publicProps = slug => ({ params: Promise.resolve({slug}) });
  const jawPage = await routes.renderCityRoute(publicProps(jaipurJaw.slug), true);
  assert.equal(jawPage.props.city.productSlug, 'prime-jaw-crusher');
  assert.equal(jawPage.props.sourcePage, '/prime-jaw-crusher-jaipur');
  assert.equal((await routes.cityRouteMetadata(publicProps(jaipurJaw.slug), true)).alternates.canonical, '/prime-jaw-crusher-jaipur');
  assert.equal((await routes.renderCityRoute(publicProps(jaipur.slug))).props.sourcePage, '/city/stone-crusher-jaipur');
  await assert.rejects(routes.renderCityRoute(publicProps('jaipur')), error => error.status === 308 && error.url === '/city/stone-crusher-jaipur');
  await assert.rejects(routes.renderCityRoute(publicProps(jaipurJaw.slug)), error => error.status === 308 && error.url === '/prime-jaw-crusher-jaipur');
  await assert.rejects(routes.renderCityRoute(publicProps('unrelated-url'), true), error => error.status === 404);
  await assert.rejects(routes.renderCityRoute(publicProps('prime-jaw-crusher-missing'), true), error => error.status === 404);

  // Verify the real account authorization helper against isolated user records.
  let account = { email: 'editor@example.invalid', password: 'test-secret', status: 'Active', role: 'Content Editor' };
  const auth = load('src/lib/city-admin-auth.ts', {
    'server-only': {},
    '@/lib/models/User': { __esModule: true, default: { findOne: () => ({ lean: async () => account }) } },
    '@/app/api/users/route': { DEFAULT_USERS: [] },
  });
  const authRequest = password => new Request('http://localhost', { headers: { 'x-city-admin-email': 'editor@example.invalid', 'x-city-admin-password': password } });
  assert(await auth.canManageCities(authRequest('test-secret')));
  assert.equal(await auth.canManageCities(authRequest('invalid')), false);
  account = { ...account, role: 'Lead Manager' };
  assert.equal(await auth.canManageCities(authRequest('test-secret')), false);
  account = { ...account, role: 'Admin', status: 'Inactive' };
  assert.equal(await auth.canManageCities(authRequest('test-secret')), false);
  console.log('City checks passed: validation, content resolution, authorization, all catalog products, requested URLs, legacy content migration, city/product isolation, and storage failures.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
