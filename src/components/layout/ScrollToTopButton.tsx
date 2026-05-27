"use client";

import { ArrowRight } from "lucide-react";

export function ScrollToTopButton() {
  return (
    <button
      aria-label="Scroll to top"
      className="ml-2 flex h-9 w-9 items-center justify-center rounded border border-white/50 text-white transition-colors hover:border-white"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowRight aria-hidden className="-rotate-90" size={14} />
    </button>
  );
}