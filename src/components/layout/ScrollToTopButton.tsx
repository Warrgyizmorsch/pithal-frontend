"use client";

import { ArrowRight } from "lucide-react";

export function ScrollToTopButton({ className = "" }: { className?: string }) {
  return (
    <button
      aria-label="Scroll to top"
      className={"ml-2 flex h-9 w-9 items-center justify-center rounded border border-white/20 bg-secondary text-white transition-colors hover:opacity-90 " + className}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowRight aria-hidden className="-rotate-90" size={14} />
    </button>
  );
}