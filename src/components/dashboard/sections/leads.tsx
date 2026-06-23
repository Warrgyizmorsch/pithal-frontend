"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  Clock,
  XCircle,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  company: string;
  country: string;
  capacity: string;
  requirement: string;
  status: "won" | "pending" | "lost";
  source?: string;
  date: string;
}

const statusConfig = {
  won: {
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/10",
    label: "Won",
  },
  pending: {
    icon: Clock,
    color: "text-warning",
    bg: "bg-warning/10",
    label: "Pending",
  },
  lost: {
    icon: XCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    label: "Lost",
  },
};

export function LeadsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch("/api/leads");
        const data = await response.json();
        if (data.success) {
          setLeads(data.leads);
        }
      } catch (error) {
        console.error("Failed to load leads:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.requirement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || lead.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-muted-foreground">
          View and manage all your Leads in one place
        </p>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search Leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 h-9 pl-9 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-all duration-200"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["all", "won", "pending", "lost"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex-1 sm:flex-none text-center",
                  selectedFilter === filter
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
          <Filter className="w-4 h-4" />
          More filters
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                    Name &amp; Company
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Country
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Capacity Needed
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Requirement
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Source
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-sm text-muted-foreground">
                    Loading leads...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-sm text-muted-foreground">
                    No leads found.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead, index) => {
                  const status = statusConfig[lead.status];
                  const StatusIcon = status.icon;

                  return (
                  <tr
                    key={lead.id}
                    className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors duration-150 cursor-pointer animate-in fade-in slide-in-from-left-2"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {lead.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {lead.company}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-foreground">
                      {lead.country}
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-foreground">
                        {lead.capacity}
                      </span>
                    </td>
                    <td className="py-4 px-4 max-w-[240px]">
                      <p className="text-xs text-muted-foreground truncate" title={lead.requirement}>
                        {lead.requirement}
                      </p>
                    </td>
                    <td className="py-4 px-4 text-xs text-muted-foreground font-semibold">
                      <span className="px-2 py-0.5 rounded bg-accent/10 text-accent">
                        {lead.source || "Quick Inquiry"}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div
                        className={cn(
                          "inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium",
                          status.bg,
                          status.color,
                        )}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {lead.date}
                    </td>
                    <td className="py-4 px-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              }))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-secondary/30">
          <span className="text-sm text-muted-foreground">
            Showing {filteredLeads.length} of {leads.length} Leads
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-lg text-sm bg-accent text-accent-foreground font-medium">
              1
            </button>
            <button className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
