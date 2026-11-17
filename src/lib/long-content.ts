import sanitizeHtml from "sanitize-html";

export const LONG_CONTENT_LIMIT = 150000;

export function isHtmlContent(content: string): boolean {
  return /<\/?(?:h[1-6]|p|div|span|br|ul|ol|li|table|thead|tbody|tr|td|th|strong|b|em|i|a|blockquote|pre|code|img|hr)\b[^>]*>/i.test(content);
}

// Keep document structure and emphasis; discard executable markup and document-wide CSS.
export function sanitizeLongContent(content: string): string {
  return sanitizeHtml(content, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "s", "del", "u", "sub", "sup"],
    allowedAttributes: {
      a: ["href", "title", "id"],
      img: ["src", "alt", "width", "height"],
      ol: ["start", "reversed"],
      li: ["value"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan", "scope"],
      "*": ["id"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowProtocolRelative: false,
  });
}

export function hasContentHeading(content: string): boolean {
  return isHtmlContent(content)
    ? /<h[1-6]\b/i.test(sanitizeLongContent(content))
    : /^\s*#{1,6}\s+/m.test(content);
}
