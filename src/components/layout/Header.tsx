"use client";

import { navigation } from "@/data/homeData";
import { products } from "@/data/homeData";
import Image from "next/image";
import { ArrowRight, ChevronDown, User, LayoutDashboard } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/common/Container";

const navLinkClass =
  "relative flex shrink-0 items-center gap-1.5 whitespace-nowrap bg-transparent py-5 text-primary transition-colors after:absolute after:bottom-[1rem] after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-all hover:text-secondary hover:after:w-full 2xl:gap-2";

const navTextClass =
  "font-sans text-[14px] font-bold uppercase tracking-[0.01em] min-[1400px]:text-[13px] 2xl:text-[14px]";

function NavLabel({ children }: { children: React.ReactNode }) {
  return <span className={navTextClass}>{children}</span>;
}

function Logo() {
  return (
    <Image
      alt="Pithal Machines Ltd."
      className="h-auto w-[160px] min-[380px]:w-[180px] sm:w-[210px] xl:w-[230px] 2xl:w-[240px]"
      height={140}
      priority
      src="/images/brand/pithal-logo.png"
      width={394}
    />
  );
}

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-label="User Options"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-12 w-12 items-center justify-center rounded-[0.3rem] border border-amber-500/40 bg-amber-500/10 text-amber-600 hover:bg-amber-500 hover:text-white transition-all shadow-sm cursor-pointer"
        title="User Account & Dashboard Options"
      >
        <User size={20} strokeWidth={2.2} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full pt-2 w-52 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-md text-slate-100">
            <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">User Account</p>
              <p className="text-xs font-semibold text-slate-300">Pithal Portal</p>
            </div>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-200 transition-all hover:bg-amber-500 hover:text-slate-950 group"
            >
              <LayoutDashboard size={16} className="text-amber-400 group-hover:text-slate-950 transition-colors" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <Link
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`${navLinkClass} group-hover:text-secondary group-hover:after:w-full`}
        href="/products"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <NavLabel>Products</NavLabel>
        <ChevronDown
          aria-hidden
          className="mt-0.5 transition-transform group-hover:rotate-180"
          size={14}
          strokeWidth={3}
        />
      </Link>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="bg-white border border-border rounded-lg shadow-xl p-0 overflow-hidden">
          {products.map((product, idx) => (
            <Link
              key={product.title}
              href={product.href || "/products"}
              className={`block px-6 py-3 text-sm font-medium text-primary hover:bg-secondary/10 hover:text-secondary transition-all relative group/item ${
                idx !== products.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                {product.title}
                <ChevronDown
                  aria-hidden
                  className="w-3 h-3 opacity-0 -rotate-90 group-hover/item:opacity-100 transition-all"
                  size={12}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur">
      <div className="flex h-[4.25rem] items-center justify-between gap-4 border-b border-border/70 sm:h-[4.75rem] sm:gap-6 xl:h-[5.25rem] px-5 sm:px-8 lg:px-10">
        <Link
          aria-label="Pithal Machines home"
          className="block shrink-0"
          href="/"
        >
          {" "}
          <Logo />
        </Link>
        <nav
          aria-label="Main menu"
          className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(1rem,1.45vw,1.65rem)] xl:flex"
        >
          {navigation.map((item) =>
            item.label === "Products" ? (
              <ProductsDropdown key={item.label} />
            ) : (
              <Link
                className={navLinkClass}
                href={item.href}
                key={item.label}
              >
                <NavLabel>{item.label}</NavLabel>
              </Link>
            ),
          )}
        </nav>
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            className="primary-btn flex min-h-12 items-center justify-center rounded-[0.3rem] border px-6 text-[11px] font-bold uppercase tracking-widest text-white min-[1400px]:px-5 min-[1400px]:text-[12px] 2xl:px-7 2xl:text-[13px] 2xl:tracking-[0.12em]"
            href="/contact"
          >
            Contact Us <ArrowRight aria-hidden className="ml-2" size={16} />
          </Link>
          <UserDropdown />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
