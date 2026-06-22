import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

function AccentBars() {
  return (
    <span className="flex items-center gap-[4px] text-secondary" aria-hidden>
      {[0, 1, 2].map((index) => (
        <span
          className="block h-[8px] w-[10px] skew-x-[-28deg] bg-current"
          key={index}
        />
      ))}
    </span>
  );
}

export function HeroNavigation({
  current,
  eyebrow,
  light = false,
  breadcrumbs,
}: {
  current?: string;
  eyebrow: string;
  light?: boolean;
  breadcrumbs?: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="mb-5 lg:mb-6">
      {breadcrumbs ? (
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-4 text-xs font-semibold leading-none"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={item.label}>
                {index === 0 ? (
                  <Link
                    className={`flex items-center gap-2 transition-colors hover:text-secondary ${
                      light ? "text-white" : "text-primary"
                    }`}
                    href={item.href}
                  >
                    <Home aria-hidden size={16} strokeWidth={1.8} />
                    {item.label}
                  </Link>
                ) : isLast ? (
                  <span className="text-secondary">{item.label}</span>
                ) : (
                  <Link
                    className={`transition-colors hover:text-secondary ${
                      light ? "text-white" : "text-primary"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight
                    aria-hidden
                    className={light ? "text-white" : "text-primary"}
                    size={16}
                    strokeWidth={1.8}
                  />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      ) : current ? (
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-4 text-xs font-semibold leading-none"
        >
          <Link
            className={`flex items-center gap-2 transition-colors hover:text-secondary ${
              light ? "text-white" : "text-primary"
            }`}
            href="/"
          >
            <Home aria-hidden size={16} strokeWidth={1.8} />
            Home
          </Link>
          <ChevronRight
            aria-hidden
            className={light ? "text-white" : "text-primary"}
            size={16}
            strokeWidth={1.8}
          />
          <span className="text-secondary">{current}</span>
        </nav>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 text-secondary">
        <AccentBars />
        <p className="text-xs font-black uppercase leading-none tracking-[0.16em]">
          {eyebrow}
        </p>
        <AccentBars />
        <span className="hidden h-px w-20 bg-secondary/35 sm:block" />
      </div>
    </div>
  );
}
