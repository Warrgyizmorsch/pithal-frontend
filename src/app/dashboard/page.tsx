"use client";

import { useState } from "react";
import { Sidebar, type Section } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { LeadsSection } from "@/components/dashboard/sections/leads";
import { DealersSection } from "@/components/dashboard/sections/dealers";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<Section>("Leads");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

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
          onThemeChange={setTheme}
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
