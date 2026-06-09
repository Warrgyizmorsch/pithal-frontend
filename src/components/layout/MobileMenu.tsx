"use client";

import { navigation } from "@/data/homeData";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="relative z-20 xl:hidden">
      {/* Hamburger / Close toggle */}
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-primary transition-colors hover:border-secondary hover:text-secondary sm:h-11 sm:w-11"
        onClick={() => setIsOpen((v) => !v)}
        type="button"
      >
        {isOpen ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={close}
        />
      )}

      {/* Dropdown */}
      <nav
        aria-label="Mobile navigation"
        className={`absolute right-0 top-[calc(100%+0.75rem)] max-h-[calc(100svh-5.75rem)] w-[min(19rem,calc(100vw-2rem))] overflow-y-auto border border-border bg-white p-4 shadow-2xl transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {navigation.map((item) => (
          <Link
            className="block border-b border-border px-2 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-secondary"
            href={item.href}
            key={item.label}
            onClick={close}
          >
            {item.label}
          </Link>
        ))}

        {/* Contact Us — visible only in mobile dropdown */}
        <Link
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-[0.3rem] primary-btn min-h-[2.75rem] px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
          href="/contact"
          onClick={close}
        >
          Contact Us <ArrowRight aria-hidden size={15} />
        </Link>
      </nav>
    </div>
  );
}
