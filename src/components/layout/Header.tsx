"use client";

import { navigation } from "@/data/homeData";
import { products } from "@/data/homeData";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
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
      className="h-auto w-[136px] min-[380px]:w-[152px] sm:w-[178px] xl:w-[188px] 2xl:w-[196px]"
      height={140}
      priority
      src="/images/brand/pithal-logo.png"
      width={394}
    />
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
      <div className="flex h-[4.25rem] items-center justify-between gap-4 border-b border-border/70 sm:h-[4.75rem] sm:gap-6 xl:h-[5.25rem] px-10">
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
        <Link
          className="primary-btn hidden min-h-12 shrink-0 items-center justify-center rounded-[0.3rem] border px-6 text-[11px] font-bold uppercase tracking-widest text-white xl:inline-flex min-[1400px]:px-5 min-[1400px]:text-[12px] 2xl:px-7 2xl:text-[13px] 2xl:tracking-[0.12em]"
          href="/contact"
        >
          Contact Us <ArrowRight aria-hidden className="ml-2" size={16} />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
