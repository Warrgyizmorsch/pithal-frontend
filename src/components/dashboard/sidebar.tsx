"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Handshake, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

export type Section = "Leads" | "Dealers";

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
}

const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "Leads", label: "Leads", icon: Handshake },
  { id: "Dealers", label: "Dealer Applications", icon: Briefcase },
];

export function Sidebar({
  activeSection,
  onSectionChange,
  collapsed,
  onCollapsedChange,
  mobileOpen = false,
  onMobileOpenChange,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-45 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => onMobileOpenChange?.(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-out flex flex-col",
          collapsed ? "lg:w-[72px]" : "lg:w-[300px]",
          "w-[300px]",
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="py-4 px-2 border-b border-sidebar-border overflow-hidden flex items-center justify-center">
          <div className="flex items-center w-full justify-center">
            {collapsed ? (
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <span className="font-extrabold text-sidebar-foreground text-4xl lg:block hidden">
                  P
                </span>
                <span className="font-extrabold text-sidebar-foreground text-4xl lg:hidden block">
                  <Image
                    alt="Pithal Machines Ltd."
                    src="/images/brand/pithal-logo.png"
                    width={280}
                    height={100}
                    className="h-32 w-auto object-contain"
                    priority
                  />
                </span>
              </div>
            ) : (
              <div className="flex items-center w-full justify-center animate-in fade-in duration-300">
                <Image
                  alt="Pithal Machines Ltd."
                  src="/images/brand/pithal-logo.png"
                  width={280}
                  height={100}
                  className="h-32 w-auto object-contain -my-10"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  onMobileOpenChange?.(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-foreground"
                    : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
                )}
              >
                {/* Active indicator */}
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-accent transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
                <Icon
                  className={cn(
                    "w-5 h-5 shrink-0 transition-transform duration-200",
                    isActive ? "text-accent" : "group-hover:scale-110",
                  )}
                />
                <span
                  className={cn(
                    "whitespace-nowrap transition-all duration-300",
                    collapsed ? "lg:opacity-0 lg:w-0 lg:overflow-hidden" : "opacity-100",
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Collapse/Close button */}
        <div className="p-3 border-t border-sidebar-border">
          {/* Mobile Close Button */}
          <button
            onClick={() => onMobileOpenChange?.(false)}
            className="w-full flex lg:hidden items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Close Menu</span>
          </button>

          {/* Desktop Collapse Button */}
          <button
            onClick={() => onCollapsedChange(!collapsed)}
            className="w-full hidden lg:flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all duration-200"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
