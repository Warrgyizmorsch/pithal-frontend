import { sanitizeLongContent } from "./long-content";

export type DocumentSection = { title: string; html: string };

// Google Docs stores emphasis in CSS classes. Resolve those before removing its CSS.
export function normalizeDocumentHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const classStyles = new Map<string, string>();
  for (const style of doc.querySelectorAll("style")) {
    for (const match of (style.textContent || "").matchAll(/\.([\w-]+)\s*\{([^}]+)\}/g)) {
      classStyles.set(match[1], (classStyles.get(match[1]) || "") + ";" + match[2]);
    }
  }
  for (const element of doc.body.querySelectorAll("span, b, i, p, div")) {
    const style = [...element.classList].map(name => classStyles.get(name) || "").join(";") + ";" + (element.getAttribute("style") || "");
    const declarations = new Map(style.split(";").map(rule => {
      const colon = rule.indexOf(":");
      return [rule.slice(0, colon).trim().toLowerCase(), rule.slice(colon + 1).trim().toLowerCase()];
    }));
    const weight = declarations.get("font-weight") || "";
    const tags = [
      /^(bold|bolder|[6-9]00)$/.test(weight) && "strong",
      declarations.get("font-style") === "italic" && "em",
      declarations.get("text-decoration")?.includes("underline") && "u",
    ].filter((tag): tag is string => Boolean(tag));
    for (const tag of tags) {
      const wrapper = doc.createElement(tag);
      wrapper.append(...element.childNodes);
      element.append(wrapper);
    }
    // Google clipboard wraps the whole selection in <b style="font-weight:normal">.
    if (element.tagName === "B" && /^(normal|400)$/.test(weight)) element.replaceWith(...element.childNodes);
  }
  for (const link of doc.body.querySelectorAll("a[href]")) {
    try {
      const url = new URL(link.getAttribute("href")!);
      if (url.hostname === "www.google.com" && url.pathname === "/url" && url.searchParams.get("q")) link.setAttribute("href", url.searchParams.get("q")!);
    } catch { /* Keep relative links. */ }
  }
  return sanitizeLongContent(doc.body.innerHTML);
}

export function splitDocumentSections(html: string): DocumentSection[] {
  const doc = new DOMParser().parseFromString(html, "text/html");
  // Unwrap clipboard containers so top-level H1s delimit city articles.
  while (doc.body.children.length === 1 && /^(DIV|SECTION|ARTICLE)$/.test(doc.body.firstElementChild!.tagName)) {
    doc.body.firstElementChild!.replaceWith(...doc.body.firstElementChild!.childNodes);
  }
  const nodes = [...doc.body.childNodes];
  const headings = nodes.flatMap((node, index) => node instanceof Element && node.tagName === "H1" ? [{ index, title: node.textContent?.trim() || "Untitled section" }] : []);
  if (headings.length < 2) return [{ title: headings[0]?.title || "Document", html: doc.body.innerHTML }];
  const starts = headings.map((heading, index) => {
    if (index === 0) return 0;
    // In editorial documents, Meta Title / Meta Description notes precede the
    // next article's H1. Keep those notes with their own city, preserving the text.
    for (let before = heading.index - 1; before > headings[index - 1].index; before--) {
      if (/^meta\s+title\s*:/i.test(nodes[before].textContent?.trim() || "")) return before;
    }
    return heading.index;
  });
  const serialize = (node: ChildNode) => node instanceof Element ? node.outerHTML : node.nodeType === 3 ? (node.textContent || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
  return headings.map((heading, index) => ({ title: heading.title, html: nodes.slice(starts[index], starts[index + 1] ?? nodes.length).map(serialize).join("") }));
}
