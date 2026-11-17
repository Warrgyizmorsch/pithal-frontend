"use client";

import { useEffect, useState, type FormEvent } from "react";
import { LongContent } from "@/components/content/LongContent";
import { LongContentEditor } from "./LongContentEditor";
import { CITY_PRODUCTS, getCityProduct, cityPagePath } from "@/lib/city-products";
import { citySlug, createCityContent, resolveCityContent, validateCityContent, type CityContent } from "@/lib/city-content";

type Props = { email: string; password?: string; isDark: boolean };

export function CityManager({ email, password, isDark }: Props) {
  const [cities, setCities] = useState<CityContent[]>([]);
  const [draft, setDraft] = useState<CityContent | null>(null);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [reload, setReload] = useState(0);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("/api/cities", { cache: "no-store", signal: controller.signal });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.error || "Could not load cities.");
        setCities(result.data);
        setDraft(result.data[0] || null);
        setDirty(false);
        setCreating(false);
      } catch (error) {
        if (!controller.signal.aborted) setError(error instanceof Error ? error.message : "Could not load cities.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [reload]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function change(patch: Partial<CityContent>) {
    setDraft(current => current ? { ...current, ...patch } : current);
    setDirty(true);
    setSuccess("");
  }

  function canSwitch() { return !dirty || window.confirm("Discard unsaved changes to this city?"); }
  function addCity() {
    if (!canSwitch()) return;
    setDraft(createCityContent("", ""));
    setCreating(true);
    setDirty(false);
    setError("");
    setSuccess("");
  }
  function selectCity(locationSlug: string) {
    if (!canSwitch()) return;
    const location = cities.find(city => city.citySlug === locationSlug);
    if (!location) return;
    const productSlug = draft?.productSlug || "stone-crusher";
    const selected = cities.find(city => city.citySlug === locationSlug && city.productSlug === productSlug) || createCityContent(location.name, location.state, productSlug, locationSlug);
    if (!selected) return;
    setDraft(structuredClone(selected));
    setCreating(false);
    setDirty(false);
    setError("");
    setSuccess("");
  }

  function selectProduct(productSlug: string) {
    if (!draft) return;
    const original = cities.find(page => page.slug === draft.slug) || createCityContent(draft.name, draft.state, draft.productSlug, draft.citySlug);
    const contentChanged = (["h1", "subheading", "capacityValue", "capacityLabel", "longContent", "faqs"] as const).some(key => JSON.stringify(original[key]) !== JSON.stringify(draft[key]));
    if (contentChanged && !canSwitch()) return;
    const selected = cities.find(page => page.citySlug === draft.citySlug && page.productSlug === productSlug) || createCityContent(draft.name, draft.state, productSlug, draft.citySlug);
    setDraft(structuredClone(selected));
    setDirty(false);
    setError("");
    setSuccess("");
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    if (!draft) return;
    setError("");
    setSuccess("");
    const validated = validateCityContent(draft);
    if (!validated.data) { setError(validated.error); return; }
    if (!password) { setError("Please sign out and sign back in before saving city content."); return; }
    setSaving(true);
    try {
      const existing = Boolean(draft.updatedAt);
      const response = await fetch(existing ? `/api/cities/${draft.storageSlug || draft.slug}` : "/api/cities", {
        method: existing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json", "x-city-admin-email": email, "x-city-admin-password": password },
        body: JSON.stringify(validated.data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Could not save city content.");
      const saved: CityContent = result.data;
      setCities(current => {
        const persisted = current.filter(page => page.updatedAt || page.slug === saved.slug);
        return persisted.some(page => page.slug === saved.slug) ? persisted.map(page => page.slug === saved.slug ? saved : page) : [...persisted, saved];
      });
      setDraft(saved);
      setCreating(false);
      setDirty(false);
      setSuccess(`${getCityProduct(saved.productSlug)?.name} content for ${saved.name} saved. The public page is updated.`);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not save city content.");
    } finally {
      setSaving(false);
    }
  }

  const panel = `rounded-2xl border p-5 sm:p-6 ${isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`;
  const input = `mt-2 w-full rounded-xl border px-3 py-2.5 outline-none focus:border-amber-500 ${isDark ? "border-slate-700 bg-slate-800 text-white" : "border-slate-300 bg-white text-slate-900"}`;
  const muted = isDark ? "text-slate-300" : "text-slate-600";
  const label = "block text-sm font-semibold";
  const locations = [...new Map(cities.map(page => [page.citySlug, page])).values()];
  const selectedProduct = draft ? getCityProduct(draft.productSlug) : undefined;
  const resolved = draft ? resolveCityContent(draft) : null;

  return <section className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div><h1 className="text-2xl font-bold">City Pages</h1><p className={`mt-2 text-sm ${muted}`}>Select a city, then a product. Each combination has its own heading, subheading, capacity, FAQs and long content.</p></div>
      <button type="button" onClick={addCity} disabled={loading || saving} className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 disabled:opacity-50">+ Add City</button>
    </div>
    {error && <div role="alert" className="rounded-xl border border-red-400 bg-red-50 p-4 text-sm text-red-800">{error}{!draft && <button type="button" className="ml-3 font-bold underline" onClick={() => setReload(value => value + 1)}>Retry</button>}</div>}
    {success && <p role="status" className="rounded-xl border border-emerald-400 bg-emerald-50 p-4 text-sm text-emerald-800">{success}</p>}
    {loading ? <p className={muted}>Loading cities…</p> : draft && <>
      <div className={panel}>
        <div className="flex flex-wrap items-end gap-4">
          <label className={`${label} min-w-56 flex-1`}>Select city<select className={input} value={creating ? "" : draft.citySlug} disabled={saving} onChange={event => selectCity(event.target.value)}>
            {creating && <option value="">New city</option>}{locations.map(city => <option key={city.citySlug} value={city.citySlug}>{city.name}</option>)}
          </select></label>
          <label className={`${label} min-w-56 flex-1`}>Select product<select className={input} value={draft.productSlug} disabled={saving} onChange={event => selectProduct(event.target.value)}>{CITY_PRODUCTS.map(product => <option key={product.slug} value={product.slug}>{product.label}</option>)}</select></label>
          {draft.updatedAt && <a target="_blank" rel="noopener noreferrer" href={cityPagePath(draft)} className="rounded-xl border border-amber-500 px-4 py-2.5 text-sm font-semibold text-amber-600">View Product Page ↗</a>}
          <button type="button" onClick={() => setPreview(!preview)} className="rounded-xl border border-slate-400 px-4 py-2.5 text-sm font-semibold">{preview ? "Hide" : "Show"} Content Preview</button>
        </div>
        <p className={`mt-3 text-xs ${muted}`}>Use {"{{city}}"} and {"{{product}}"} in text. Content is saved only for the selected city and product. /city displays the first saved page.</p>
      </div>
      <p className={`text-sm ${muted}`}>{selectedProduct?.label} in {draft.name || "your new city"} — {draft.updatedAt ? "Editing saved content" : "New product page: save to publish this combination"}</p>
      <form onSubmit={save} className="space-y-6">
        <fieldset disabled={saving} className={`${panel} grid gap-5 sm:grid-cols-2 disabled:opacity-60`}>
          <legend className="sr-only">City details</legend>
          <label className={label}>City name<input required maxLength={100} className={input} value={draft.name} readOnly={!creating} onChange={event => { const locationSlug = citySlug(event.target.value); change({ name: event.target.value, citySlug: locationSlug, slug: `${draft.productSlug}-${locationSlug}` }); }} /></label>
          <label className={label}>City slug<input required maxLength={120} pattern="[a-z0-9]+(-[a-z0-9]+)*" readOnly={!creating} className={input} value={draft.citySlug} onChange={event => change({ citySlug: event.target.value, slug: `${draft.productSlug}-${event.target.value}` })} /></label>
          <label className={label}>Page URL<input readOnly className={input} value={cityPagePath({ ...draft, slug: draft.citySlug ? draft.slug : `${draft.productSlug}-city-name` })} /><span className={`mt-2 block text-xs ${muted}`}>Generated from the selected product and city.</span></label>
        </fieldset>
        <fieldset disabled={saving} className={`${panel} grid gap-5 sm:grid-cols-2 disabled:opacity-60`}>
          <legend className="sr-only">Hero capacity</legend>
          <div className="sm:col-span-2"><h2 className="text-lg font-bold">Hero capacity</h2><p className={`mt-2 text-sm ${muted}`}>Updates the first statistic below the hero buttons on this city/product page.</p></div>
          <label className={label}>Capacity value<input required maxLength={60} className={input} placeholder="150–600" value={draft.capacityValue} onChange={event => change({ capacityValue: event.target.value })} /></label>
          <label className={label}>Capacity label<input required maxLength={100} className={input} placeholder="TPH capacity" value={draft.capacityLabel} onChange={event => change({ capacityLabel: event.target.value })} /></label>
        </fieldset>
        <fieldset disabled={saving} className={`${panel} space-y-5 disabled:opacity-60`}>
          <legend className="sr-only">City content</legend>
          <label className={label}>H1 heading<textarea required maxLength={500} rows={3} className={input} value={draft.h1} onChange={event => change({ h1: event.target.value })} /><span className={`mt-2 block text-xs ${muted}`}>Use a new line for each heading line. The second line uses the design’s olive accent.</span></label>
          <label className={label}>Subheading<textarea required maxLength={5000} rows={4} className={input} value={draft.subheading} onChange={event => change({ subheading: event.target.value })} /></label>
          <LongContentEditor key={draft.slug} value={draft.longContent} onChange={longContent => change({ longContent })} email={email} password={password} isDark={isDark} disabled={saving} />
        </fieldset>
        <fieldset disabled={saving} className={`${panel} space-y-5 disabled:opacity-60`}>
          <legend className="sr-only">Frequently asked questions</legend>
          <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-lg font-bold">FAQs ({draft.faqs.length})</h2><button type="button" disabled={draft.faqs.length >= 50} onClick={() => change({ faqs: [...draft.faqs, { question: "", answer: "" }] })} className="rounded-lg border border-amber-500 px-4 py-2 text-sm font-semibold disabled:opacity-50">+ Add FAQ</button></div>
          {draft.faqs.length === 0 && <p className={`text-sm ${muted}`}>No FAQs. Use Add FAQ to create a question and answer.</p>}
          {draft.faqs.map((faq, index) => <div key={index} className="space-y-3 border-t border-slate-300/40 pt-5">
            <div className="flex items-center justify-between"><span className="text-sm font-bold">FAQ {index + 1}</span><button type="button" className="text-xs font-bold text-red-500" aria-label={`Remove FAQ ${index + 1}`} onClick={() => change({ faqs: draft.faqs.filter((_, position) => position !== index) })}>Remove</button></div>
            <label className={label}>Question<input required maxLength={500} className={input} value={faq.question} onChange={event => change({ faqs: draft.faqs.map((item, position) => position === index ? { ...item, question: event.target.value } : item) })} /></label>
            <label className={label}>Answer<textarea required maxLength={10000} rows={3} className={input} value={faq.answer} onChange={event => change({ faqs: draft.faqs.map((item, position) => position === index ? { ...item, answer: event.target.value } : item) })} /></label>
          </div>)}
        </fieldset>
        {preview && resolved && (
          <div className={`${panel} space-y-6`}>
            <h2 className="text-lg font-bold">Content Preview — {selectedProduct?.name} in {draft.name}</h2>
            <p className="whitespace-pre-line text-2xl font-bold">{resolved.h1}</p>
            <p className="text-slate-600">{resolved.subheading}</p>
            <div>
              <p className="text-2xl font-bold text-primary">{resolved.capacityValue}</p>
              <p className={`mt-1 text-sm uppercase ${muted}`}>{resolved.capacityLabel}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Buyer&apos;s Guide / Long Content Preview</h3>
              <LongContent content={resolved.longContent} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">FAQs Preview</h3>
              {resolved.faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-slate-200 p-4">
                  <p className="font-bold text-primary">{faq.question}</p>
                  <p className={`mt-1 text-sm ${muted}`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-4 pb-8"><button type="submit" disabled={saving} className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 disabled:opacity-50">{saving ? "Saving…" : !draft.updatedAt ? "Create Product Page" : "Save Product Content"}</button>{dirty && <span className={`text-xs ${muted}`}>Unsaved changes</span>}</div>
      </form>
    </>}
  </section>;
}
