import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongodb";
import { canManageCities } from "@/lib/city-admin-auth";
import { sanitizeLongContent, LONG_CONTENT_LIMIT } from "@/lib/long-content";

export const runtime = "nodejs";
const MAX_DOCUMENT_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    if (!request.headers.get("x-city-admin-email") || !request.headers.get("x-city-admin-password")) return NextResponse.json({ success: false, error: "Please sign in before importing a document." }, { status: 401 });
    if (!await connectDB()) return NextResponse.json({ success: false, error: "City storage is unavailable. Please try again." }, { status: 503 });
    if (!await canManageCities(request)) return NextResponse.json({ success: false, error: "Your account cannot manage city pages." }, { status: 403 });

    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      if (Number(request.headers.get("content-length")) > MAX_DOCUMENT_BYTES + 65536) return NextResponse.json({ success: false, error: "Upload a DOCX file smaller than 10 MB." }, { status: 413 });
      const file = (await request.formData()).get("file");
      if (!(file instanceof File) || !file.name.toLowerCase().endsWith(".docx")) return NextResponse.json({ success: false, error: "Please select a Word (.docx) document." }, { status: 400 });
      if (file.size > MAX_DOCUMENT_BYTES) return NextResponse.json({ success: false, error: "Upload a DOCX file smaller than 10 MB." }, { status: 413 });
      const mammoth = await import("mammoth");
      const result = await mammoth.convertToHtml({ buffer: Buffer.from(await file.arrayBuffer()) });
      const html = sanitizeLongContent(result.value);
      if (html.length > LONG_CONTENT_LIMIT) return NextResponse.json({ success: false, error: "This document exceeds the long content limit. Upload one city article at a time." }, { status: 413 });
      return NextResponse.json({ success: true, html, warnings: result.messages.map(message => message.message) });
    }

    const body = await request.json().catch(() => null);
    let source: URL;
    try { source = new URL(body?.url); } catch { return NextResponse.json({ success: false, error: "Enter a valid Google Docs link." }, { status: 400 }); }
    const id = source.pathname.match(/^\/document\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/)?.[1];
    if (source.protocol !== "https:" || source.hostname !== "docs.google.com" || !id) return NextResponse.json({ success: false, error: "Enter a Google Docs document link." }, { status: 400 });

    // Build the export URL ourselves and restrict every redirect to Google's export hosts.
    let url = new URL(`https://docs.google.com/document/d/${id}/export?format=html`);
    const signal = AbortSignal.timeout(20000);
    for (let redirects = 0; redirects < 5; redirects++) {
      const response = await fetch(url, { cache: "no-store", redirect: "manual", signal });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        const next = new URL(response.headers.get("location") || "", url);
        if (next.protocol !== "https:" || next.port || next.username || next.password || !(next.hostname === "docs.google.com" || next.hostname.endsWith(".googleusercontent.com"))) break;
        url = next;
        continue;
      }
      if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) break;
      const reader = response.body?.getReader();
      if (!reader) break;
      const decoder = new TextDecoder();
      let html = "";
      let bytes = 0;
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) break;
        bytes += chunk.value.byteLength;
        if (bytes > MAX_DOCUMENT_BYTES) { await reader.cancel(); return NextResponse.json({ success: false, error: "This document is too large. Upload one city article as DOCX instead." }, { status: 413 }); }
        html += decoder.decode(chunk.value, { stream: true });
      }
      html += decoder.decode();
      // Export CSS is needed by the client to recover emphasis. It is parsed, never inserted into the page.
      return NextResponse.json({ success: true, html });
    }
    return NextResponse.json({ success: false, error: "Could not read this Google Doc. Enable 'Anyone with the link' viewer access, or download it as Word (.docx) and upload it." }, { status: 422 });
  } catch {
    return NextResponse.json({ success: false, error: "Could not import the document. Try again, or upload a Word (.docx) copy." }, { status: 422 });
  }
}
