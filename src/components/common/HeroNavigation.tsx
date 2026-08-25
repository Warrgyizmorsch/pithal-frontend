import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function HeroNavigation({
  current,
  light = false,
  breadcrumbs,
}: {
  current?: string;
  eyebrow?: string;
  light?: boolean;
  breadcrumbs?: Array<{ label: string; href: string }>;
}) {
  if (!breadcrumbs && !current) return null;

  return (
    <div className="mb-4 sm:mb-5">
      {breadcrumbs ? (
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 text-xs font-semibold leading-none"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={item.label}>
                {index === 0 ? (
                  <Link
                    className={`flex items-center gap-2 transition-colors hover:text-secondary ${
                      light ? "text-white/85 hover:text-white" : "text-primary"
                    }`}
                    href={item.href}
                  >
                    <Home aria-hidden size={15} strokeWidth={1.8} />
                    {item.label}
                  </Link>
                ) : isLast ? (
                  <span className="text-secondary">{item.label}</span>
                ) : (
                  <Link
                    className={`transition-colors hover:text-secondary ${
                      light ? "text-white/85 hover:text-white" : "text-primary"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight
                    aria-hidden
                    className={light ? "text-white/50" : "text-primary/50"}
                    size={14}
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
          className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 text-xs font-semibold leading-none"
        >
          <Link
            className={`flex items-center gap-2 transition-colors hover:text-secondary ${
              light ? "text-white/85 hover:text-white" : "text-primary"
            }`}
            href="/"
          >
            <Home aria-hidden size={15} strokeWidth={1.8} />
            Home
          </Link>
          <ChevronRight
            aria-hidden
            className={light ? "text-white/50" : "text-primary/50"}
            size={14}
            strokeWidth={1.8}
          />
          <span className="text-secondary">{current}</span>
        </nav>
      ) : null}
    </div>
  );
}
