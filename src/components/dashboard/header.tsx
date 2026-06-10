"use client";

import { cn } from "@/lib/utils";
import type { Section } from "./sidebar";
import { Bell, Search, Calendar } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeSection: Section;
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}

const sectionTitles: Record<Section, string> = {
  Leads: "Leads",
  Dealers: "Dealer Applications",
};

export function Header({ activeSection, theme, onThemeChange }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="h-16 border-b border-sidebar-border bg-background/80 backdrop-blur-sm sticky top-0 z-30 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-semibold text-foreground">
          {sectionTitles[activeSection]}
        </h1>
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Last 30 days</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div
          className={cn(
            "relative flex items-center transition-all duration-300",
            searchFocused ? "w-64" : "w-48",
          )}
        >
          <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full h-9 pl-9 pr-4 rounded-lg bg-secondary border border-sidebar-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-all duration-200"
          />
        </div>

        {/* Theme Toggler Segmented Control */}
        <div className="flex items-center gap-1 bg-secondary p-1 rounded-lg border border-sidebar-border">
          {(["dark", "light"] as const).map((t) => (
            <button
              key={t}
              onClick={() => onThemeChange(t)}
              className={cn(
                "px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                theme === t
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full animate-pulse" />
        </button>

        {/* User avatar */}
        <button className="w-9 h-9 rounded-lg overflow-hidden bg-secondary ring-2 ring-transparent hover:ring-accent/50 transition-all duration-200">
          <div className="w-full h-full bg-gradient-to-br from-accent/80 to-accent flex items-center justify-center text-xs font-semibold text-accent-foreground">
            JD
          </div>
        </button>
      </div>
    </header>
  );
}
