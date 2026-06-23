"use client";

import { navigation, products } from "@/data/homeData";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      {/* Hamburger Toggle */}
      <button
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-primary transition-colors hover:border-secondary hover:text-secondary sm:h-11 sm:w-11"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Menu aria-hidden size={22} />
      </button>

      {/* Backdrop Overlay */}
      <div
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Slide Drawer Side Sheet */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 h-screen w-[300px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-[4.25rem] sm:h-[4.75rem] items-center justify-between border-b border-border/70 px-5">
          <Link href="/" onClick={close} className="block shrink-0">
            <Image
              alt="Pithal Machines Ltd."
              className="h-auto w-[120px]"
              height={140}
              src="/images/brand/pithal-logo.png"
              width={394}
            />
          </Link>
          <button
            aria-label="Close navigation menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-primary transition-colors hover:border-secondary hover:text-secondary sm:h-11 sm:w-11"
            onClick={close}
            type="button"
          >
            <X aria-hidden size={22} />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto p-5 text-left"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => {
              if (item.label === "Products") {
                return (
                  <div key={item.label} className="border-b border-border/70">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="flex w-full items-center justify-between py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-secondary cursor-pointer"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsOpen ? "rotate-180 text-secondary" : "text-primary"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        productsOpen ? "max-h-[400px] pb-2" : "max-h-0"
                      }`}
                    >
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href || "/products"}
                          onClick={close}
                          className="block pl-4 pr-2 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  className="block border-b border-border/70 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-secondary"
                  href={item.href}
                  key={item.label}
                  onClick={close}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Us button inside drawer */}
          <Link
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-[0.3rem] primary-btn min-h-[2.75rem] px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
            href="/contact"
            onClick={close}
          >
            Contact Us <ArrowRight aria-hidden size={15} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
