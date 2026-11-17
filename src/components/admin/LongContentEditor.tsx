"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ClipboardEvent } from "react";
import { LongContent } from "@/components/content/LongContent";
import contentStyles from "@/components/content/LongContent.module.css";
import { normalizeDocumentHtml, splitDocumentSections, type DocumentSection } from "@/lib/document-import";
import { LONG_CONTENT_LIMIT } from "@/lib/long-content";

type Props = { value: string; onChange: (value: string) => void; email: string; password?: string; isDark: boolean; disabled?: boolean };

export function LongContentEditor({ value, onChange, email, password, isDark, disabled = false }: Props) {
  const editor = useRef<HTMLDivElement>(null);
  const rendered = useRef<HTMLDivElement>(null);
  const lastEdit = useRef<string | null>(null);
  const activeImport = useRef<AbortController | null>(null);
  const [sourceMode, setSourceMode] = useState(false);
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [sections, setSections] = useState<DocumentSection[]>([]);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [warnings, setWarnings] = useState<string[]>([]);

  useEffect(() => () => activeImport.current?.abort(), []);

  useLayoutEffect(() => {
    if (!sourceMode && editor.current && rendered.current && lastEdit.current !== value) {
      editor.current.innerHTML = rendered.current.firstElementChild?.innerHTML || "";
      lastEdit.current = value;
    }
  }, [value, sourceMode]);

  function update(next: string) {
    if (next.length > LONG_CONTENT_LIMIT) { setError("Long content must be at most 150,000 characters. Select a smaller article."); return false; }
    setError("");
    onChange(next);
    return true;
  }

  function handleInput() {
    const next = editor.current?.innerHTML || "";
    if (update(next)) lastEdit.current = next;
    else if (editor.current) editor.current.innerHTML = rendered.current?.firstElementChild?.innerHTML || "";
  }

  function command(name: string, argument?: string) {
    editor.current?.focus();
    document.execCommand(name, false, argument);
    handleInput();
  }

  function paste(event: ClipboardEvent<HTMLDivElement>) {
    const html = event.clipboardData.getData("text/html");
    const text = event.clipboardData.getData("text/plain");
    event.preventDefault();
    if (html) command("insertHTML", normalizeDocumentHtml(html));
    else command("insertText", text);
  }

  function stageDocument(html: string) {
    const normalized = normalizeDocumentHtml(html);
    const parsed = splitDocumentSections(normalized);
    if (!normalized.trim()) throw new Error("This document has no readable content.");
    if (parsed.length > 1) {
      setSections(parsed);
      setSectionIndex(0);
      setNotice(`${parsed.length} articles found. Select the article for this city, then click Use selected article.`);
    } else if (update(normalized)) {
      setSections([]);
      setNotice("Document imported with headings and formatting. Preview it, then save the page.");
    }
  }

  async function importDocument(file?: File) {
    if (busy) return;
    const controller = new AbortController();
    activeImport.current = controller;
    setBusy(true); setError(""); setNotice(""); setWarnings([]); setSections([]);
    try {
      if (file && file.size > 10 * 1024 * 1024) throw new Error("Upload a document smaller than 10 MB.");
      if (file && /\.(html?|md|txt)$/i.test(file.name)) {
        const text = await file.text();
        if (controller.signal.aborted) return;
        if (/\.html?$/i.test(file.name)) stageDocument(text);
        else if (update(text)) setNotice("Text imported. Markdown headings are supported; plain text has no heading metadata.");
        return;
      }
      if (!password) throw new Error("Please sign out and sign back in before importing documents.");
      let body: FormData | string;
      if (file) { const form = new FormData(); form.append("file", file); body = form; }
      else body = JSON.stringify({ url });
      const response = await fetch("/api/cities/import-document", {
        method: "POST",
        headers: { "x-city-admin-email": email, "x-city-admin-password": password, ...(!file ? { "Content-Type": "application/json" } : {}) },
        body,
        signal: controller.signal,
      });
      const result = await response.json();
      if (controller.signal.aborted) return;
      if (!response.ok || !result.success) throw new Error(result.error || "Could not import the document.");
      stageDocument(result.html);
      setWarnings(result.warnings || []);
    } catch (error) { if (!controller.signal.aborted) setError(error instanceof Error ? error.message : "Could not import the document."); }
    finally { setBusy(false); }
  }

  const input = `w-full rounded-lg border px-3 py-2 ${isDark ? "border-slate-600 bg-slate-800 text-white" : "border-slate-300 bg-white text-slate-900"}`;
  const button = "rounded-lg border border-slate-400 px-3 py-2 text-sm font-semibold disabled:opacity-50";
  return <div className="space-y-3">
    <p id="long-content-label" className="text-sm font-semibold">Long content</p>
    <div className="flex flex-wrap items-end gap-3">
      <label className="min-w-56 flex-1 text-sm">Google Docs link<input type="url" className={`mt-1 ${input}`} value={url} onChange={event => setUrl(event.target.value)} placeholder="https://docs.google.com/document/d/…/edit" /></label>
      <button type="button" className={button} disabled={busy || !url.trim()} onClick={() => void importDocument()}>{busy ? "Importing…" : "Import Google Doc"}</button>
      <label className={`${button} cursor-pointer`}>Upload document<input aria-label="Upload long content document" type="file" accept=".docx,.html,.htm,.md,.txt" disabled={busy} className="sr-only" onChange={event => { const file = event.target.files?.[0]; if (file) void importDocument(file); event.target.value = ""; }} /></label>
    </div>
    {notice && <p role="status" className="text-sm text-emerald-600">{notice}</p>}
    {sections.length > 1 && <div className="flex flex-wrap gap-3 rounded-lg border border-amber-500 p-3">
      <label className="min-w-56 flex-1 text-sm">Choose article<select className={`mt-1 ${input}`} value={sectionIndex} onChange={event => setSectionIndex(Number(event.target.value))}>{sections.map((section, index) => <option key={index} value={index}>{section.title}</option>)}</select></label>
      <button type="button" className={button} onClick={() => { if (update(sections[sectionIndex].html)) { setSections([]); setNotice("Selected article imported. Preview it, then save the page."); } }}>Use selected article</button>
    </div>}
    {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
    {warnings.length > 0 && <details className="text-sm"><summary>Document conversion notes ({warnings.length})</summary><ul className="list-disc pl-5">{warnings.map((warning, index) => <li key={index}>{warning}</li>)}</ul></details>}
    <div className="overflow-hidden rounded-xl border border-slate-300">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-300 bg-slate-100 p-2 text-slate-900">
        {!sourceMode && <>
          {([ ["Paragraph", "p"], ["H1", "h1"], ["H2", "h2"], ["H3", "h3"], ["H4", "h4"], ["H5", "h5"], ["H6", "h6"] ] as const).map(([label, tag]) => <button key={tag} type="button" className="rounded border border-slate-300 bg-white px-2 py-1 text-xs" onMouseDown={event => event.preventDefault()} onClick={() => command("formatBlock", tag)}>{label}</button>)}
          {([ ["Bold", "bold"], ["Italic", "italic"], ["Bullets", "insertUnorderedList"], ["Numbered list", "insertOrderedList"] ] as const).map(([label, action]) => <button key={action} type="button" className="rounded border border-slate-300 bg-white px-2 py-1 text-xs" onMouseDown={event => event.preventDefault()} onClick={() => command(action)}>{label}</button>)}
        </>}
        <button type="button" className="ml-auto rounded border border-slate-300 bg-white px-2 py-1 text-xs" onClick={() => { lastEdit.current = null; setSourceMode(!sourceMode); }}>{sourceMode ? "Visual editor" : "HTML / Markdown source"}</button>
      </div>
      {sourceMode
        ? <textarea aria-labelledby="long-content-label" required maxLength={LONG_CONTENT_LIMIT} rows={16} className={`${input} rounded-none font-mono text-sm`} value={value} onChange={event => update(event.target.value)} />
        : <div ref={editor} role="textbox" aria-multiline="true" aria-labelledby="long-content-label" aria-disabled={disabled} contentEditable={!disabled} suppressContentEditableWarning onInput={handleInput} onPaste={paste} className={`${contentStyles.content} min-h-80 max-h-[640px] overflow-y-auto bg-white p-5 outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500`} />}
    </div>
    <p className="text-xs text-slate-500">Paste directly from Google Docs with Ctrl+V, import a shared link, or upload Word (.docx), HTML or Markdown. Headings H1–H6, bold, italic, links, lists and tables are preserved. Plain text cannot retain document heading styles.</p>
    <div ref={rendered} hidden><LongContent content={value} /></div>
  </div>;
}
