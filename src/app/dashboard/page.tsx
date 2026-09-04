"use client";

import { useState, useEffect } from "react";
import { Sidebar, type Section } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { LeadsSection } from "@/components/dashboard/sections/leads";
import { DealersSection } from "@/components/dashboard/sections/dealers";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<Section>("Leads");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pithal_admin_theme") || localStorage.getItem("pithal_theme");
      if (saved === "dark" || saved === "light") return saved;
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pithal_admin_theme") || localStorage.getItem("pithal_theme");
      if (saved === "dark" || saved === "light") {
        setTheme(saved);
        if (saved === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }
  }, []);

  const handleThemeChange = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("pithal_admin_theme", newTheme);
      localStorage.setItem("pithal_theme", newTheme);
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  return (
    <div
      className={`dashboard-theme theme-${theme} min-h-screen bg-background text-foreground transition-colors duration-300 flex`}
    >
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        onMobileOpenChange={setMobileOpen}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-out ${
          sidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-[300px]"
        } ml-0`}
      >
        <Header
          activeSection={activeSection}
          theme={theme}
          onThemeChange={handleThemeChange}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="flex-1 p-6 overflow-auto">
          <div
            key={activeSection}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {activeSection === "Leads" ? <LeadsSection /> : <DealersSection />}
          </div>
        </main>
      </div>
    </div>
  );
}
