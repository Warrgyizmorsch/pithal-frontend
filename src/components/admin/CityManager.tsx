"use client";

import { useEffect, useState, useMemo, type FormEvent } from "react";
import { LongContent } from "@/components/content/LongContent";
import { LongContentEditor } from "./LongContentEditor";
import { CITY_PRODUCTS, getCityProduct, cityPagePath } from "@/lib/city-products";
import { citySlug, createCityContent, resolveCityContent, validateCityContent, type CityContent } from "@/lib/city-content";
import { MapPin, Search, Plus, Edit, Trash2, ExternalLink, ArrowLeft, Eye, EyeOff, Check, Copy } from "lucide-react";

type Props = {
  email: string;
  password?: string;
  isDark: boolean;
  activeMenu?: string;
  onNavigateMenu?: (menu: "cities-list" | "cities-add") => void;
};

export function CityManager({ email, password, isDark, activeMenu = "cities-list", onNavigateMenu }: Props) {
  const [cities, setCities] = useState<CityContent[]>([]);
  const [draft, setDraft] = useState<CityContent | null>(null);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [reload, setReload] = useState(0);
  const [preview, setPreview] = useState(false);

  // Table filtering and search
  const [searchQuery, setSearchQuery] = useState("");
  const [productFilter, setProductFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "SAVED" | "PRESET">("ALL");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  function createEmptyCityContent(productSlug = "stone-crusher"): CityContent {
    return {
      name: "",
      state: "",
      slug: "",
      citySlug: "",
      productSlug,
      capacityValue: "",
      capacityLabel: "",
      h1: "",
      subheading: "",
      metaTags: "",
      metaDescription: "",
      longContent: "",
      faqs: [],
    };
  }

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
        if (activeMenu === "cities-add") {
          setDraft(createEmptyCityContent());
          setCreating(true);
        } else if (!draft) {
          setDraft(result.data[0] || null);
        }
        setDirty(false);
      } catch (err) {
        if (!controller.signal.aborted) setError(err instanceof Error ? err.message : "Could not load cities.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [reload]);

  useEffect(() => {
    if (activeMenu === "cities-add" && !creating && (!draft || !draft.updatedAt)) {
      setDraft(createEmptyCityContent());
      setCreating(true);
      setDirty(false);
      setError("");
      setSuccess("");
    }
  }, [activeMenu]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function change(patch: Partial<CityContent>) {
    setDraft(current => (current ? { ...current, ...patch } : current));
    setDirty(true);
    setSuccess("");
  }

  function canSwitch() {
    return !dirty || window.confirm("Discard unsaved changes to this city page?");
  }

  function handleStartAddCity() {
    if (!canSwitch()) return;
    setDraft(createEmptyCityContent());
    setCreating(true);
    setDirty(false);
    setError("");
    setSuccess("");
    if (onNavigateMenu) {
      onNavigateMenu("cities-add");
    }
  }

  function handleStartEditCity(city: CityContent) {
    if (!canSwitch()) return;
    setDraft(structuredClone(city));
    setCreating(false);
    setDirty(false);
    setError("");
    setSuccess("");
    if (onNavigateMenu) {
      onNavigateMenu("cities-add");
    }
  }

  function selectCity(locationSlug: string) {
    if (!canSwitch()) return;
    const location = cities.find(city => city.citySlug === locationSlug);
    if (!location) return;
    const productSlug = draft?.productSlug || "stone-crusher";
    const selected =
      cities.find(city => city.citySlug === locationSlug && city.productSlug === productSlug) ||
      createCityContent(location.name, location.state, productSlug, locationSlug);
    if (!selected) return;
    setDraft(structuredClone(selected));
    setCreating(false);
    setDirty(false);
    setError("");
    setSuccess("");
  }

  function selectProduct(productSlug: string) {
    if (!draft) return;
    if (creating) {
      change({
        productSlug,
        slug: draft.citySlug ? `${productSlug}-${draft.citySlug}` : "",
      });
      return;
    }
    const original =
      cities.find(page => page.slug === draft.slug) ||
      createCityContent(draft.name, draft.state, draft.productSlug, draft.citySlug);
    const contentChanged = (["h1", "subheading", "metaTags", "metaDescription", "capacityValue", "capacityLabel", "longContent", "faqs"] as const).some(
      key => JSON.stringify(original[key]) !== JSON.stringify(draft[key])
    );
    if (contentChanged && !canSwitch()) return;
    const selected =
      cities.find(page => page.citySlug === draft.citySlug && page.productSlug === productSlug) ||
      createCityContent(draft.name, draft.state, productSlug, draft.citySlug);
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
    if (!validated.data) {
      setError(validated.error);
      return;
    }
    if (!password) {
      setError("Please sign out and sign back in before saving city content.");
      return;
    }
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
        return persisted.some(page => page.slug === saved.slug)
          ? persisted.map(page => (page.slug === saved.slug ? saved : page))
          : [...persisted, saved];
      });
      setDraft(saved);
      setCreating(false);
      setDirty(false);
      setSuccess(`${getCityProduct(saved.productSlug)?.name || saved.productSlug} page for ${saved.name} saved successfully! Public page is live.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save city content.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteCity(city: CityContent) {
    const productName = getCityProduct(city.productSlug)?.name || city.productSlug;
    const confirmMessage = `Are you sure you want to delete the city page "${city.name} - ${productName}"?\n\nThis will remove the page from the website and database.`;
    if (!window.confirm(confirmMessage)) return;

    const targetSlug = city.storageSlug || city.slug;
    setDeletingSlug(targetSlug);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/cities/${targetSlug}`, {
        method: "DELETE",
        headers: {
          "x-city-admin-email": email,
          "x-city-admin-password": password || "",
        },
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to delete city page.");
      }

      setCities(prev => prev.filter(c => c.slug !== city.slug && c.storageSlug !== city.slug));
      if (draft && (draft.slug === city.slug || draft.storageSlug === city.slug)) {
        setDraft(null);
      }
      setSuccess(`City page for "${city.name} - ${productName}" was deleted successfully.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete city.");
    } finally {
      setDeletingSlug(null);
    }
  }

  function handleCopyUrl(urlPath: string) {
    const fullUrl = `${window.location.origin}${urlPath}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedSlug(urlPath);
      setTimeout(() => setCopiedSlug(null), 2000);
    }).catch(() => {
      // Fallback
    });
  }

  // Filtered Cities list for the All Cities table
  const filteredCities = useMemo(() => {
    return cities.filter(item => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.citySlug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (getCityProduct(item.productSlug)?.name || "").toLowerCase().includes(searchQuery.toLowerCase());

      const matchesProduct = productFilter === "ALL" || item.productSlug === productFilter;

      const matchesStatus =
        statusFilter === "ALL" ||
        (statusFilter === "SAVED" && Boolean(item.updatedAt)) ||
        (statusFilter === "PRESET" && !item.updatedAt);

      return matchesSearch && matchesProduct && matchesStatus;
    });
  }, [cities, searchQuery, productFilter, statusFilter]);

  // Unique city count
  const uniqueLocationCount = useMemo(() => {
    return new Set(cities.map(c => c.citySlug)).size;
  }, [cities]);

  // Unique product count
  const uniqueProductCount = useMemo(() => {
    return new Set(cities.map(c => c.productSlug)).size;
  }, [cities]);

  const panel = `rounded-2xl border p-5 sm:p-6 transition-colors duration-200 ${
    isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white shadow-sm"
  }`;
  const input = `mt-2 w-full rounded-xl border px-3.5 py-2.5 text-xs outline-none transition focus:border-amber-500 ${
    isDark ? "border-slate-700 bg-slate-800 text-white" : "border-slate-300 bg-white text-slate-900"
  }`;
  const muted = isDark ? "text-slate-400" : "text-slate-600";
  const label = "block text-xs font-bold uppercase tracking-wider text-slate-400";
  const locations = [...new Map(cities.map(page => [page.citySlug, page])).values()];
  const selectedProduct = draft ? getCityProduct(draft.productSlug) : undefined;
  const resolved = draft ? resolveCityContent(draft) : null;

  // Decide which view to render based on activeMenu
  const isListView = activeMenu === "cities-list" || activeMenu === "cities";

  return (
    <div className="space-y-6">
      {/* Notifications */}
      {error && (
        <div role="alert" className="flex items-center justify-between rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs font-semibold text-rose-500">
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
            {!draft && (
              <button type="button" className="ml-3 font-bold underline" onClick={() => setReload(v => v + 1)}>
                Retry
              </button>
            )}
          </div>
          <button type="button" onClick={() => setError("")} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}
      {success && (
        <div role="status" className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-500">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{success}</span>
          </div>
          <button type="button" onClick={() => setSuccess("")} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* 1. ALL CITIES TABLE VIEW (Matching blogs-list table)                      */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {isListView && (
        <div className={`rounded-2xl border p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 shadow-sm text-slate-900"}`}>
          {/* Top Bar: Title & Summary */}
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-5 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
            <div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-base font-bold">
                    All City Pages ({filteredCities.length})
                  </h1>
                  <p className="text-xs text-slate-400">
                    Search, filter, edit, view live, or add new city landing pages.
                  </p>
                </div>
              </div>
            </div>

            {/* Top Controls: Search, Filters, Add City */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search city, state, product..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className={`px-3.5 py-1.5 pl-8 border rounded-xl text-xs focus:outline-none w-52 sm:w-60 font-normal transition ${
                    isDark
                      ? "bg-slate-800/90 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500"
                  }`}
                />
                <Search className={`w-3.5 h-3.5 absolute left-2.5 top-2.5 ${isDark ? "text-slate-400" : "text-slate-400"}`} />
              </div>

              {/* Product Filter Dropdown */}
              <select
                value={productFilter}
                onChange={e => setProductFilter(e.target.value)}
                className={`px-3 py-1.5 border rounded-xl text-xs font-semibold focus:outline-none cursor-pointer transition ${
                  isDark ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-slate-50 border-slate-300 text-slate-700"
                }`}
              >
                <option value="ALL">All Products ({cities.length})</option>
                {CITY_PRODUCTS.map(p => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>

              {/* Status Filter Buttons */}
              <div className="flex items-center rounded-xl p-0.5 border border-slate-700/40 bg-slate-800/30">
                <button
                  type="button"
                  onClick={() => setStatusFilter("ALL")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    statusFilter === "ALL"
                      ? isDark ? "bg-amber-500 text-slate-950 font-black" : "bg-slate-900 text-white"
                      : isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("SAVED")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    statusFilter === "SAVED"
                      ? "bg-emerald-600 text-white"
                      : isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Published
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("PRESET")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    statusFilter === "PRESET"
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Presets
                </button>
              </div>

              {/* Add New City Button */}
              <button
                type="button"
                onClick={handleStartAddCity}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer shadow-xs ml-1 flex items-center gap-1.5 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>ADD NEW CITY</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className={`p-3.5 rounded-xl border ${isDark ? "bg-slate-800/50 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total City Pages</span>
              <p className="text-lg font-black text-amber-500">{cities.length}</p>
            </div>
            <div className={`p-3.5 rounded-xl border ${isDark ? "bg-slate-800/50 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Locations Covered</span>
              <p className="text-lg font-black text-blue-500">{uniqueLocationCount}</p>
            </div>
            <div className={`p-3.5 rounded-xl border ${isDark ? "bg-slate-800/50 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Products</span>
              <p className="text-lg font-black text-emerald-500">{uniqueProductCount}</p>
            </div>
            <div className={`p-3.5 rounded-xl border ${isDark ? "bg-slate-800/50 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Saved in Database</span>
              <p className="text-lg font-black text-purple-500">{cities.filter(c => c.updatedAt).length}</p>
            </div>
          </div>

          {/* Data Table */}
          {loading ? (
            <div className="py-12 text-center text-xs text-slate-400">
              <div className="inline-block animate-spin w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full mb-2"></div>
              <p>Loading city pages from database…</p>
            </div>
          ) : filteredCities.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 space-y-3">
              <MapPin className="w-8 h-8 mx-auto text-slate-500 opacity-50" />
              <p className="font-semibold">No city pages matched your filter or search criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setProductFilter("ALL");
                  setStatusFilter("ALL");
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead
                  className={`uppercase text-[11px] font-black border-b ${
                    isDark ? "bg-slate-950 text-slate-300 border-slate-800" : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  <tr>
                    <th className="p-3">City / Location</th>
                    <th className="p-3">Product</th>
                    <th className="p-3">Live Page URL</th>
                    <th className="p-3">Capacity</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                  {filteredCities.map(c => {
                    const productObj = getCityProduct(c.productSlug);
                    const livePath = cityPagePath(c);
                    const isDeleting = deletingSlug === (c.storageSlug || c.slug);

                    return (
                      <tr
                        key={c.slug}
                        className={`hover:bg-slate-500/5 transition ${isDark ? "border-slate-800" : "border-slate-200"}`}
                      >
                        {/* City / Location */}
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs shrink-0">
                              <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                              <div className={`font-bold text-sm leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
                                {c.name}
                              </div>
                              {c.state && (
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
                                  {c.state}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Product */}
                        <td className="p-3">
                          <div className="font-semibold text-xs text-amber-500">
                            {productObj?.name || c.productSlug}
                          </div>
                          <span className="text-[10px] text-slate-400">{c.productSlug}</span>
                        </td>

                        {/* Live Page URL */}
                        <td className="p-3 font-mono text-[11px] max-w-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="truncate text-slate-400">{livePath}</span>
                            <button
                              type="button"
                              onClick={() => handleCopyUrl(livePath)}
                              title="Copy URL"
                              className="p-1 text-slate-400 hover:text-amber-500 rounded transition"
                            >
                              {copiedSlug === livePath ? (
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Capacity */}
                        <td className="p-3">
                          <span className="font-bold text-slate-300">{c.capacityValue || "—"}</span>
                          <span className="text-[10px] text-slate-400 block">{c.capacityLabel}</span>
                        </td>

                        {/* Status */}
                        <td className="p-3 text-center">
                          <span
                            className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                              c.updatedAt
                                ? "bg-emerald-500 text-slate-950"
                                : "bg-slate-700 text-slate-200"
                            }`}
                          >
                            {c.updatedAt ? "Published" : "Preset"}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {/* Edit */}
                            <button
                              type="button"
                              onClick={() => handleStartEditCity(c)}
                              title="Edit City Page"
                              className="p-1.5 text-blue-500 hover:bg-blue-500/10 rounded transition cursor-pointer"
                            >
                              <Edit className="w-4 h-4" />
                            </button>

                            {/* View Live */}
                            <a
                              href={livePath}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View Live Page"
                              className="p-1.5 text-amber-500 hover:bg-amber-500/10 rounded transition cursor-pointer"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>

                            {/* Delete */}
                            <button
                              type="button"
                              disabled={isDeleting}
                              onClick={() => handleDeleteCity(c)}
                              title="Delete City Page"
                              className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded transition cursor-pointer disabled:opacity-40"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* 2. CITY EDITOR VIEW (Full-width matching table and dashboard modules)     */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {!isListView && (
        <div className="space-y-6 w-full">
          {/* Header Bar */}
          <div className={`rounded-2xl border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${panel}`}>
            <div>
              <h1 className="text-lg font-bold">
                {creating ? "Add New City Page" : `Edit City Page — ${draft?.name || "City"}`}
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Home &gt; City Pages &gt; {creating ? "Add New" : `Edit ${draft?.name || ""}`}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (canSwitch() && onNavigateMenu) {
                    onNavigateMenu("cities-list");
                  }
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                  isDark
                    ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Cities</span>
              </button>

              <button
                type="button"
                onClick={handleStartAddCity}
                disabled={loading || saving}
                className="rounded-xl bg-amber-500 hover:bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 transition flex items-center gap-1.5 disabled:opacity-50"
              >
                <Plus className="w-4 h-4" />
                <span>New City</span>
              </button>
            </div>
          </div>

          {/* City & Product Switcher Selector Bar */}
          {draft && (
            <div className={panel}>
              <div className="flex flex-wrap items-end gap-4">
                {!creating ? (
                  <label className={`${label} min-w-56 flex-1`}>
                    Select City
                    <select
                      className={input}
                      value={draft.citySlug}
                      disabled={saving}
                      onChange={event => selectCity(event.target.value)}
                    >
                      {locations.map(city => (
                        <option key={city.citySlug} value={city.citySlug}>
                          {city.name} {city.state ? `(${city.state})` : ""}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <div className="min-w-56 flex-1">
                    <span className={label}>Mode</span>
                    <div className="mt-2 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-500 font-bold text-xs">
                      <span>Add New City (Blank Form)</span>
                    </div>
                  </div>
                )}

                <label className={`${label} min-w-56 flex-1`}>
                  Select Product
                  <select
                    className={input}
                    value={draft.productSlug}
                    disabled={saving}
                    onChange={event => selectProduct(event.target.value)}
                  >
                    {CITY_PRODUCTS.map(product => (
                      <option key={product.slug} value={product.slug}>
                        {product.label}
                      </option>
                    ))}
                  </select>
                </label>

                {draft.updatedAt && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={cityPagePath(draft)}
                    className="rounded-xl border border-amber-500/60 hover:border-amber-500 px-4 py-2.5 text-xs font-semibold text-amber-500 hover:text-amber-400 transition flex items-center gap-1.5 shrink-0"
                  >
                    <span>View Live Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setPreview(!preview)}
                  className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition flex items-center gap-1.5 shrink-0 ${
                    preview
                      ? "border-amber-500 bg-amber-500/10 text-amber-400"
                      : isDark
                      ? "border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
                      : "border-slate-300 bg-slate-100 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {preview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{preview ? "Hide Preview" : "Show Preview"}</span>
                </button>
              </div>

              <p className={`mt-3 text-xs ${muted}`}>
                Use <code className="text-amber-500 font-bold">{"{{city}}"}</code>, <code className="text-amber-500 font-bold">{"{{state}}"}</code> and <code className="text-amber-500 font-bold">{"{{product}}"}</code> in text.
                Content is saved for the selected city and product combination.
              </p>
            </div>
          )}

          {/* Edit Form */}
          {draft && (
            <form onSubmit={save} className="space-y-6">
              {/* Card 1: City Details */}
              <fieldset disabled={saving} className={`${panel} grid gap-5 sm:grid-cols-2 disabled:opacity-60`}>
                <legend className="sr-only">City Details</legend>
                <div className="sm:col-span-2 flex items-center justify-between border-b pb-3 border-slate-700/40">
                  <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider">
                    1. City Details &amp; URL Configuration
                  </h2>
                  <span className={`text-xs ${muted}`}>
                    {draft.updatedAt ? "Editing Published Page" : "New City (Blank Form)"}
                  </span>
                </div>

                <label className={label}>
                  City Name *
                  <input
                    required
                    maxLength={100}
                    placeholder="Enter city name (e.g. Surat)"
                    className={input}
                    value={draft.name}
                    readOnly={!creating}
                    onChange={event => {
                      const locationSlug = citySlug(event.target.value);
                      change({
                        name: event.target.value,
                        citySlug: locationSlug,
                        slug: locationSlug ? `${draft.productSlug}-${locationSlug}` : "",
                      });
                    }}
                  />
                </label>

                <label className={label}>
                  State
                  <input
                    maxLength={100}
                    placeholder="Enter state (e.g. Gujarat)"
                    className={input}
                    value={draft.state}
                    readOnly={!creating}
                    onChange={event => change({ state: event.target.value })}
                  />
                </label>

                <label className={label}>
                  City Slug
                  <input
                    required
                    maxLength={120}
                    pattern="[a-z0-9]+(-[a-z0-9]+)*"
                    readOnly={!creating}
                    placeholder="e.g. surat"
                    className={input}
                    value={draft.citySlug}
                    onChange={event =>
                      change({
                        citySlug: event.target.value,
                        slug: event.target.value ? `${draft.productSlug}-${event.target.value}` : "",
                      })
                    }
                  />
                </label>

                <label className={label}>
                  Live Page Path
                  <input
                    readOnly
                    className={`${input} font-mono text-[11px] bg-slate-800/40 opacity-80 cursor-default`}
                    value={draft.citySlug ? cityPagePath(draft) : `/${draft.productSlug}-[city-slug]`}
                  />
                  <span className={`mt-1.5 block text-[10px] ${muted}`}>
                    Auto-generated from product and city slug.
                  </span>
                </label>
              </fieldset>

              {/* Card 2: SEO Metadata */}
              <fieldset disabled={saving} className={`${panel} space-y-5 disabled:opacity-60`}>
                <legend className="sr-only">SEO Metadata</legend>
                <div className="border-b pb-3 border-slate-700/40">
                  <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider">
                    2. SEO Metadata
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
                  <label htmlFor="city-meta-tags" className={label}>Meta Tag</label>
                  <div className="md:col-span-2">
                    <input
                      id="city-meta-tags"
                      aria-describedby="city-meta-tags-hint"
                      type="text"
                      maxLength={500}
                      placeholder="Enter Meta Tag"
                      className={input}
                      value={draft.metaTags ?? ""}
                      onChange={event => change({ metaTags: event.target.value })}
                    />
                    <span id="city-meta-tags-hint" className={`mt-1.5 block text-[11px] ${muted}`}>
                      SEO page title. Leave blank to use the H1 heading and Pithal Machines.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
                  <label htmlFor="city-meta-description" className={label}>Meta Description</label>
                  <div className="md:col-span-2">
                    <textarea
                      id="city-meta-description"
                      aria-describedby="city-meta-description-hint"
                      rows={3}
                      maxLength={5000}
                      placeholder="Enter Meta Description"
                      className={input}
                      value={draft.metaDescription ?? ""}
                      onChange={event => change({ metaDescription: event.target.value })}
                    />
                    <span id="city-meta-description-hint" className={`mt-1.5 block text-[11px] ${muted}`}>
                      Leave blank to use the subheading. Both fields support {"{{city}}"}, {"{{state}}"} and {"{{product}}"}.
                    </span>
                  </div>
                </div>
              </fieldset>

              {/* Card 3: Hero Capacity */}
              <fieldset disabled={saving} className={`${panel} grid gap-5 sm:grid-cols-2 disabled:opacity-60`}>
                <legend className="sr-only">Hero Capacity</legend>
                <div className="sm:col-span-2 border-b pb-3 border-slate-700/40">
                  <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider">
                    3. Hero Capacity &amp; Key Highlights
                  </h2>
                  <p className={`mt-1 text-xs ${muted}`}>
                    Configures the primary statistic displayed directly below the hero buttons on the landing page.
                  </p>
                </div>

                <label className={label}>
                  Capacity Value *
                  <input
                    required
                    maxLength={60}
                    className={input}
                    placeholder="e.g. 150–600"
                    value={draft.capacityValue}
                    onChange={event => change({ capacityValue: event.target.value })}
                  />
                </label>

                <label className={label}>
                  Capacity Label *
                  <input
                    required
                    maxLength={100}
                    className={input}
                    placeholder="e.g. TPH capacity"
                    value={draft.capacityLabel}
                    onChange={event => change({ capacityLabel: event.target.value })}
                  />
                </label>
              </fieldset>

              {/* Card 4: Headings & Long Content */}
              <fieldset disabled={saving} className={`${panel} space-y-5 disabled:opacity-60`}>
                <legend className="sr-only">City Content</legend>
                <div className="border-b pb-3 border-slate-700/40">
                  <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider">
                    4. Page Content &amp; Buyer&apos;s Guide
                  </h2>
                  <p className={`mt-1 text-xs ${muted}`}>
                    Long content automatically formats headings, tables, callout boxes, and paragraphs just like blog posts.
                  </p>
                </div>

                <label className={label}>
                  H1 Heading *
                  <textarea
                    required
                    maxLength={500}
                    rows={3}
                    placeholder="Enter H1 heading (e.g. Stone Crusher&#10;Manufacturer&#10;in {{city}})"
                    className={input}
                    value={draft.h1}
                    onChange={event => change({ h1: event.target.value })}
                  />
                  <span className={`mt-1.5 block text-[11px] ${muted}`}>
                    Tip: Use a new line for each heading phrase. Line 2 renders with the brand olive accent on the live site.
                  </span>
                </label>

                <label className={label}>
                  Subheading *
                  <textarea
                    required
                    maxLength={5000}
                    rows={3}
                    placeholder="Enter short description / subheading for this city page"
                    className={input}
                    value={draft.subheading}
                    onChange={event => change({ subheading: event.target.value })}
                  />
                </label>

                {/* Long Content Rich Editor */}
                <div>
                  <span className={`${label} mb-2 block`}>Buyer&apos;s Guide / Long Content Editor</span>
                  <LongContentEditor
                    key={draft.slug || (creating ? "new-empty-city" : "edit-city")}
                    value={draft.longContent}
                    onChange={longContent => change({ longContent })}
                    email={email}
                    password={password}
                    isDark={isDark}
                    disabled={saving}
                  />
                </div>
              </fieldset>

              {/* Card 5: FAQs */}
              <fieldset disabled={saving} className={`${panel} space-y-5 disabled:opacity-60`}>
                <legend className="sr-only">Frequently Asked Questions</legend>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3 border-slate-700/40">
                  <div>
                    <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider">
                      5. Frequently Asked Questions ({draft.faqs.length})
                    </h2>
                    <p className={`mt-1 text-xs ${muted}`}>
                      Add FAQ items for local city queries and technical product specs.
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={draft.faqs.length >= 50}
                    onClick={() => change({ faqs: [...draft.faqs, { question: "", answer: "" }] })}
                    className="rounded-xl border border-amber-500/60 hover:border-amber-500 px-3.5 py-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add FAQ</span>
                  </button>
                </div>

                {draft.faqs.length === 0 && (
                  <p className={`text-xs ${muted}`}>No FAQs yet. Click &quot;Add FAQ&quot; above to create one.</p>
                )}

                {draft.faqs.map((faq, index) => (
                  <div key={index} className="space-y-3 border-t border-slate-700/40 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">FAQ #{index + 1}</span>
                      <button
                        type="button"
                        className="text-xs font-bold text-rose-500 hover:text-rose-400 transition cursor-pointer"
                        onClick={() =>
                          change({ faqs: draft.faqs.filter((_, position) => position !== index) })
                        }
                      >
                        Remove FAQ
                      </button>
                    </div>

                    <label className={label}>
                      Question *
                      <input
                        required
                        maxLength={500}
                        className={input}
                        value={faq.question}
                        onChange={event =>
                          change({
                            faqs: draft.faqs.map((item, position) =>
                              position === index ? { ...item, question: event.target.value } : item
                            ),
                          })
                        }
                      />
                    </label>

                    <label className={label}>
                      Answer *
                      <textarea
                        required
                        maxLength={10000}
                        rows={3}
                        className={input}
                        value={faq.answer}
                        onChange={event =>
                          change({
                            faqs: draft.faqs.map((item, position) =>
                              position === index ? { ...item, answer: event.target.value } : item
                            ),
                          })
                        }
                      />
                    </label>
                  </div>
                ))}
              </fieldset>

              {/* Optional Live Preview Box */}
              {preview && resolved && (
                <div className={`${panel} space-y-6 border-amber-500/40`}>
                  <div className="flex items-center justify-between border-b pb-3 border-slate-700/40">
                    <h2 className="text-base font-bold text-amber-500">
                      Live Content Preview — {selectedProduct?.name} in {draft.name || "New City"}
                    </h2>
                    <span className="text-xs text-slate-400">Rendering preview matching city page</span>
                  </div>

                  <div className="space-y-4">
                    <p className="whitespace-pre-line text-2xl font-black">{resolved.h1 || "H1 Heading Preview"}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{resolved.subheading || "Subheading preview will appear here."}</p>
                    {resolved.capacityValue && (
                      <div className="inline-block p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                        <p className="text-2xl font-bold text-amber-500">{resolved.capacityValue}</p>
                        <p className={`mt-0.5 text-xs uppercase tracking-wider ${muted}`}>{resolved.capacityLabel}</p>
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-4">
                      Buyer&apos;s Guide / Long Content
                    </h3>
                    {resolved.longContent ? (
                      <LongContent content={resolved.longContent} />
                    ) : (
                      <p className={`text-xs italic ${muted}`}>No long content entered yet.</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                      FAQs ({resolved.faqs.length})
                    </h3>
                    {resolved.faqs.length === 0 ? (
                      <p className={`text-xs italic ${muted}`}>No FAQs added yet.</p>
                    ) : (
                      resolved.faqs.map((faq, index) => (
                        <div key={index} className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                          <p className="font-bold text-sm text-white">{faq.question}</p>
                          <p className={`mt-1.5 text-xs leading-relaxed ${muted}`}>{faq.answer}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-700/40">
                <button
                  type="button"
                  onClick={() => {
                    if (canSwitch() && onNavigateMenu) {
                      onNavigateMenu("cities-list");
                    }
                  }}
                  className={`px-5 py-3 rounded-xl text-xs font-bold transition border cursor-pointer ${
                    isDark
                      ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
                  }`}
                >
                  Cancel / Back to List
                </button>

                <div className="flex items-center gap-3">
                  {dirty && <span className="text-xs text-amber-500 font-semibold">● Unsaved changes</span>}
                  <button
                    type="submit"
                    disabled={saving}
                    className="rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3 text-xs font-bold text-slate-950 transition cursor-pointer shadow-md disabled:opacity-50 flex items-center gap-2"
                  >
                    {saving && <span className="animate-spin">⏳</span>}
                    <span>{saving ? "Saving Changes…" : !draft.updatedAt ? "Create City Page" : "Save City Content"}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
