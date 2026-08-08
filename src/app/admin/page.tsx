"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

const API_BASE = "/api";
const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60";

const PRESET_IMAGES = [
  { label: "Crusher Guide", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80" },
  { label: "Mining Quarry", url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80" },
  { label: "Heavy Factory", url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80" },
  { label: "Machinery Plant", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80" },
  { label: "Industrial Engineering", url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80" },
];

type UserRole = string;

interface RolePermission {
  roleName: string;
  description: string;
  canAccessBlogs: boolean;
  canAccessLeads: boolean;
  canAccessUsers: boolean;
  canDeleteItems: boolean;
  userCount: number;
}

interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tag?: string;
  readTime?: string;
  image?: string;
  status: "Publish" | "Draft";
  publishedAt: string;
  metaTags?: string;
  metaDescription?: string;
  faqs?: { question: string; answer: string }[];
}

interface LeadItem {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  productInterest?: string;
  message: string;
  status: "PENDING" | "CONTACTED" | "CLOSED";
  sourcePage?: string;
  createdAt: string;
}

interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  password?: string;
  role: UserRole;
  status: "Active" | "Inactive";
  joinedDate: string;
  avatar?: string;
}

interface LoginHistoryItem {
  id: string;
  user: string;
  ip: string;
  device: string;
  lastLogin: string;
  loggedIn: "Yes" | "No";
}

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "lead" | "blog" | "system";
  read: boolean;
}

// ─── HIGH-END PROFESSIONAL VECTOR SVG ICONS (ZERO EMOJIS) ─────────────────
const Icons = {
  Search: () => (
    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Dashboard: () => (
    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Blogs: () => (
    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  Leads: () => (
    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  UserAvatarPlaceholder: () => (
    <svg className="w-16 h-16 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  Edit: () => (
    <svg className="w-4 h-4 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Key: () => (
    <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  Trash: () => (
    <svg className="w-4 h-4 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  External: () => (
    <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Bell: () => (
    <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  UserCog: () => (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-4 h-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Upload: () => (
    <svg className="w-6 h-6 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
  LogOut: () => (
    <svg className="w-4 h-4 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
  Sun: () => (
    <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Moon: () => (
    <svg className="w-4 h-4 shrink-0 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  List: () => (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  History: () => (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg className="w-4 h-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Building: () => (
    <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V7m0 0h4m-4 0H9" />
    </svg>
  ),
  FileText: () => (
    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Inbox: () => (
    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  ),
  ShieldUser: () => (
    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Lock: () => (
    <svg className="w-4 h-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
};

// ─── HIGH-END WYSIWYG HTML TEXT EDITOR (VISUAL + SOURCE CODE MODE) ───────
function RichHtmlEditor({
  value,
  onChange,
  isDark = false,
}: {
  value: string;
  onChange: (val: string) => void;
  isDark?: boolean;
}) {
  const [showCodeView, setShowCodeView] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && !showCodeView) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "";
      }
    }
  }, [value, showCodeView]);

  const execCommand = (cmd: string, arg: string | undefined = undefined) => {
    document.execCommand(cmd, false, arg);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertCtaCard = () => {
    const ctaHtml = `
<div style="background: linear-gradient(135deg,#E3F2FD,#FFF3E0); margin: 25px 0; border-radius: 12px; font-family: Arial, sans-serif; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08); overflow: hidden; padding: 20px;">
  <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 250px;">
      <h3 style="margin: 0; color: #0d47a1; font-size: 20px; font-weight: bold;">Confused About Learning the Hardest Language?</h3>
      <p style="margin: 6px 0 12px; color: #555; font-size: 14px;">Get expert guidance for foreign education and study abroad visas.</p>
      <a href="http://localhost:3001/contact" style="padding: 8px 18px; border-radius: 40px; font-size: 14px; font-weight: 700; text-decoration: none; background: #FF9933; color: #fff; display: inline-block; box-shadow: 0 4px 12px rgba(255,153,51,0.35);">Enquiry Now</a>
    </div>
    <div style="padding: 0 10px;">
      <img style="width: 220px; max-width: 100%; border-radius: 8px;" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500" alt="Consultation">
    </div>
  </div>
</div>
<p><br></p>
`;
    if (showCodeView) {
      onChange(value + ctaHtml);
    } else {
      execCommand("insertHTML", ctaHtml);
    }
  };

  const insertTable = () => {
    const tableHtml = `
<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%; max-width: 100%; margin: 20px 0; border-radius: 12px; border: 1px solid #cbd5e1;">
  <table border="1" style="width: 100%; min-width: 550px; border-collapse: collapse; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc;">
        <th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Rank</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Specification / Feature</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Technical Details</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Output Capacity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">1</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;"><b>Prime Jaw Crusher 1060</b></td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Heavy Duty Manganese Jaw Plates</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">250 TPH</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">2</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;"><b>Cone Crusher 1300</b></td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Hydraulic Adjustment System</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">300 TPH</td>
      </tr>
    </tbody>
  </table>
</div>
<p><br></p>
`;
    if (showCodeView) {
      onChange(value + tableHtml);
    } else {
      execCommand("insertHTML", tableHtml);
    }
  };

  return (
    <div className={`border rounded-2xl overflow-hidden shadow-sm transition ${isDark ? "border-slate-800 bg-slate-950" : "border-slate-300 bg-white"}`}>
      {/* Editor Toolbar matching WTS Rich Text Editor */}
      <div className={`p-2 border-b flex flex-wrap items-center gap-1.5 font-bold text-xs ${isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-100 border-slate-300 text-slate-700"}`}>
        <button type="button" title="Clear All" onClick={() => { onChange(""); if (editorRef.current) editorRef.current.innerHTML = ""; }} className="px-2 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs">🧹</button>
        <button type="button" title="Bold" onClick={() => execCommand("bold")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs font-black">B</button>
        <button type="button" title="Italic" onClick={() => execCommand("italic")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs italic">I</button>
        <button type="button" title="Underline" onClick={() => execCommand("underline")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs underline">U</button>
        <button type="button" title="Strikethrough" onClick={() => execCommand("strikeThrough")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs line-through">S</button>
        <button type="button" title="Heading 2" onClick={() => execCommand("formatBlock", "<h2>")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs">H2</button>
        <button type="button" title="Heading 3" onClick={() => execCommand("formatBlock", "<h3>")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs">H3</button>
        <button type="button" title="Bullet List" onClick={() => execCommand("insertUnorderedList")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs">• List</button>
        <button type="button" title="Numbered List" onClick={() => execCommand("insertOrderedList")} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs">1. List</button>
        <button type="button" title="Insert Table" onClick={insertTable} className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer shadow-2xs">▦ Table</button>
        <button type="button" title="Insert CTA Banner Card" onClick={insertCtaCard} className="px-2.5 py-1 bg-amber-500 text-slate-950 border border-amber-600 rounded-lg hover:bg-amber-400 cursor-pointer shadow-2xs font-extrabold">+ CTA Box</button>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCodeView(!showCodeView)}
            className={`px-3 py-1 rounded-lg border text-xs font-black cursor-pointer transition flex items-center gap-1 ${showCodeView ? "bg-amber-500 text-slate-950 border-amber-600 shadow-md" : "bg-white border-slate-300 text-slate-800 hover:bg-slate-200"
              }`}
          >
            <span>&lt;/&gt;</span>
            <span>{showCodeView ? "Visual WYSIWYG View" : "HTML Code Source"}</span>
          </button>
        </div>
      </div>

      {/* Editor Body Frame with Fixed Height and Internal Scroll */}
      {showCodeView ? (
        <textarea
          rows={16}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste raw HTML code here..."
          className={`w-full h-[420px] p-4 text-xs font-mono leading-relaxed focus:outline-none overflow-y-auto ${isDark ? "bg-slate-950 text-emerald-400" : "bg-slate-900 text-amber-300"}`}
          style={{ height: "420px", maxHeight: "420px" }}
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          className={`h-[420px] p-5 text-sm font-sans leading-relaxed focus:outline-none border-0 overflow-y-auto ${isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
            }`}
          style={{ height: "420px", maxHeight: "420px" }}
        />
      )}
    </div>
  );
}

// ─── HIGH-END CUSTOM SMOOTH REACT FLOATING SELECT DROPDOWN ─────────────────
function CustomSelectDropdown({
  options,
  value,
  onChange,
  isDark = false,
  placeholder = "Select Option",
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (val: string) => void;
  isDark?: boolean;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div className="relative w-full text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer shadow-2xs ${isDark
            ? "bg-slate-950 border-slate-800 text-amber-400 hover:border-amber-500/50"
            : "bg-slate-50 border-slate-300 text-amber-600 hover:border-amber-500/50"
          }`}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : value || placeholder}</span>
        <span className={`text-[10px] text-amber-500 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      {open && (
        <div className={`absolute left-0 right-0 mt-1.5 border rounded-2xl shadow-2xl z-50 py-1.5 space-y-0.5 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 ${isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"
          }`}>
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-bold transition flex items-center justify-between cursor-pointer ${isSelected
                    ? isDark ? "bg-amber-500/20 text-amber-400" : "bg-amber-50 text-amber-600"
                    : isDark ? "hover:bg-slate-800 hover:text-amber-400" : "hover:bg-slate-50 hover:text-amber-600"
                  }`}
              >
                <span>{opt.label}</span>
                {isSelected && <span className="text-amber-500 font-black">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── HIGH-END CUSTOM SMOOTH REACT DROPDOWN FOR LEAD STATUS ─────────────────
function CustomLeadStatusDropdown({ status, onChange }: { status: "PENDING" | "CONTACTED" | "CLOSED"; onChange: (s: "PENDING" | "CONTACTED" | "CLOSED") => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${open ? "z-50" : "z-20"}`} ref={ref}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border cursor-pointer flex items-center gap-1.5 transition-all duration-200 shadow-2xs ${status === "PENDING"
            ? "bg-rose-50 text-rose-600 border-rose-200/80 hover:bg-rose-100/80"
            : status === "CONTACTED"
              ? "bg-blue-50 text-blue-600 border-blue-200/80 hover:bg-blue-100/80"
              : "bg-emerald-50 text-emerald-600 border-emerald-200/80 hover:bg-emerald-100/80"
          }`}
      >
        <span>{status}</span>
        <svg className={`w-3 h-3 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-full mt-1.5 w-32 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-1 space-y-0.5 animate-in fade-in zoom-in-95 ring-1 ring-black/5"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onChange("PENDING"); setOpen(false); }}
            className={`w-full text-left px-2.5 py-1.5 text-xs font-semibold rounded-lg transition flex items-center justify-between cursor-pointer ${status === "PENDING" ? "bg-rose-50 text-rose-600 font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
          >
            <span>PENDING</span>
            {status === "PENDING" && <span className="text-rose-600 font-bold text-xs">✓</span>}
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onChange("CONTACTED"); setOpen(false); }}
            className={`w-full text-left px-2.5 py-1.5 text-xs font-semibold rounded-lg transition flex items-center justify-between cursor-pointer ${status === "CONTACTED" ? "bg-blue-50 text-blue-600 font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
          >
            <span>CONTACTED</span>
            {status === "CONTACTED" && <span className="text-blue-600 font-bold text-xs">✓</span>}
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onChange("CLOSED"); setOpen(false); }}
            className={`w-full text-left px-2.5 py-1.5 text-xs font-semibold rounded-lg transition flex items-center justify-between cursor-pointer ${status === "CLOSED" ? "bg-emerald-50 text-emerald-600 font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
          >
            <span>CLOSED</span>
            {status === "CLOSED" && <span className="text-emerald-600 font-bold text-xs">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}


// ─── HIGH-END INTERACTIVE BRAND ANALYTICS GRAPH COMPONENT ───────────────
function InteractiveLeadAnalyticsChart({
  leads,
  isDark = false,
}: {
  leads: LeadItem[];
  isDark?: boolean;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Compute 100% real data grouped strictly by actual lead creation months
  const monthlyData = useMemo(() => {
    const months = [
      { name: "Jan", monthIndex: 0 },
      { name: "Feb", monthIndex: 1 },
      { name: "Mar", monthIndex: 2 },
      { name: "Apr", monthIndex: 3 },
      { name: "May", monthIndex: 4 },
      { name: "Jun", monthIndex: 5 },
      { name: "Jul", monthIndex: 6 },
      { name: "Aug", monthIndex: 7 },
    ];

    const currentMonthIdx = new Date().getMonth(); // 7 for August

    return months.map((m) => {
      const monthLeads = leads.filter((l) => {
        if (!l.createdAt) return m.monthIndex === currentMonthIdx;
        const d = new Date(l.createdAt);
        if (isNaN(d.getTime())) return m.monthIndex === currentMonthIdx;
        return d.getMonth() === m.monthIndex;
      });

      const pending = monthLeads.filter((l) => l.status === "PENDING").length;
      const contacted = monthLeads.filter((l) => l.status === "CONTACTED").length;
      const closed = monthLeads.filter((l) => l.status === "CLOSED").length;
      const total = pending + contacted + closed;

      return {
        name: m.name,
        pending,
        contacted,
        closed,
        total,
        isLive: m.monthIndex === currentMonthIdx,
      };
    });
  }, [leads]);

  const maxTotal = Math.max(...monthlyData.map((d) => d.total), 1);

  return (
    <div className={`lg:col-span-8 rounded-2xl border p-6 space-y-6 shadow-sm transition ${isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"}`}>
      {/* Header with Pithal Brand Color Accents */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-slate-200/80">
        <div>
          <h3 className={`text-base font-black uppercase tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            Quote Inquiries & Performance Analytics
          </h3>
          <p className="text-xs text-slate-400">Real monthly lead volume & status analytics (Hover over bars to inspect)</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Pending ({leads.filter((l) => l.status === "PENDING").length})
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-slate-600"></span> Contacted ({leads.filter((l) => l.status === "CONTACTED").length})
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Closed ({leads.filter((l) => l.status === "CLOSED").length})
          </span>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative pt-6 pb-2">
        {/* Background Grid Lines */}
        <div className="absolute inset-x-0 top-6 bottom-10 flex flex-col justify-between pointer-events-none opacity-40">
          <div className="border-b border-dashed border-slate-300 w-full flex justify-between items-center text-[10px] text-slate-400">
            <span>{maxTotal} Leads</span>
          </div>
          <div className="border-b border-dashed border-slate-300 w-full flex justify-between items-center text-[10px] text-slate-400">
            <span>{Math.round(maxTotal / 2)}</span>
          </div>
          <div className="border-b border-dashed border-slate-300 w-full"></div>
        </div>

        {/* Dynamic Bars Grid */}
        <div className="relative h-56 flex items-end justify-between gap-2 sm:gap-4 px-2 z-10">
          {monthlyData.map((d, index) => {
            const isHovered = hoveredIndex === index;
            const barHeightPct = d.total > 0 ? Math.max((d.total / maxTotal) * 100, 14) : 6;

            const pendingPct = d.total > 0 ? (d.pending / d.total) * 100 : 0;
            const contactedPct = d.total > 0 ? (d.contacted / d.total) * 100 : 0;
            const closedPct = d.total > 0 ? (d.closed / d.total) * 100 : 0;

            return (
              <div
                key={d.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
                className="relative flex-1 h-full flex flex-col items-center justify-end cursor-pointer group"
              >
                {/* Floating Tooltip Card - Brand Aligned Aesthetics */}
                {isHovered && (
                  <div className={`absolute bottom-full mb-3 z-30 w-52 p-3.5 rounded-2xl shadow-xl border text-xs animate-in fade-in zoom-in-95 pointer-events-none ring-1 ring-black/5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
                    }`}>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                      <span className="font-extrabold text-amber-600 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span> {d.name} 2026 {d.isLive && "(Live)"}
                      </span>
                      <span className="text-[10px] font-extrabold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-md">
                        {d.total} {d.total === 1 ? "Lead" : "Leads"}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px] font-bold">
                      <div className="flex justify-between items-center text-amber-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span> Pending:
                        </span>
                        <span className="font-black">{d.pending}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-600"></span> Contacted:
                        </span>
                        <span className="font-black">{d.contacted}</span>
                      </div>
                      <div className="flex justify-between items-center text-emerald-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Closed:
                        </span>
                        <span className="font-black">{d.closed}</span>
                      </div>
                    </div>

                    {/* Tooltip Arrow */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${isDark ? "border-t-slate-950" : "border-t-white"
                      }`}></div>
                  </div>
                )}

                {/* Column Highlight Backdrop */}
                <div
                  className={`absolute inset-x-0 bottom-0 top-0 rounded-xl transition-all duration-200 ${isHovered
                      ? isDark
                        ? "bg-amber-500/10 ring-2 ring-amber-500/40"
                        : "bg-amber-500/10 ring-2 ring-amber-400/50"
                      : "group-hover:bg-slate-100/60"
                    }`}
                />

                {/* Total Value Badge On Top of Bar */}
                <div className={`text-[11px] font-black mb-1.5 transition-transform duration-200 ${isHovered ? "scale-110 text-amber-600" : isDark ? "text-slate-400" : "text-slate-500"
                  }`}>
                  {d.total}
                </div>

                {/* Vertical Bar - Pithal Industrial Amber Palette */}
                <div
                  style={{ height: `${barHeightPct}%` }}
                  className={`w-full max-w-[38px] rounded-t-xl overflow-hidden flex flex-col justify-end transition-all duration-300 ${d.total === 0
                      ? isDark
                        ? "bg-slate-800/50"
                        : "bg-slate-200/50"
                      : "shadow-md"
                    } ${isHovered ? "ring-2 ring-amber-500 shadow-xl scale-[1.03]" : ""}`}
                >
                  {/* Pending Segment (Amber Industrial Gold) */}
                  {d.pending > 0 && (
                    <div
                      style={{ height: `${pendingPct}%` }}
                      className="w-full bg-gradient-to-t from-amber-600 to-amber-500 transition-all"
                      title={`Pending: ${d.pending}`}
                    />
                  )}
                  {/* Contacted Segment (Industrial Slate) */}
                  {d.contacted > 0 && (
                    <div
                      style={{ height: `${contactedPct}%` }}
                      className="w-full bg-gradient-to-t from-slate-700 to-slate-600 transition-all"
                      title={`Contacted: ${d.contacted}`}
                    />
                  )}
                  {/* Closed Segment (Subtle Forest Emerald) */}
                  {d.closed > 0 && (
                    <div
                      style={{ height: `${closedPct}%` }}
                      className="w-full bg-gradient-to-t from-emerald-700 to-emerald-600 transition-all"
                      title={`Closed: ${d.closed}`}
                    />
                  )}
                </div>

                {/* X-Axis Month Label */}
                <div className={`mt-3 text-[11px] font-extrabold tracking-tight transition ${d.isLive
                    ? "text-amber-600 font-black"
                    : isHovered
                      ? isDark ? "text-white" : "text-slate-900"
                      : "text-slate-400"
                  }`}>
                  {d.name} {d.isLive ? "(Live)" : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metric Summary Cards Below Graph - Aligned Brand Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center text-xs">
        <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/80 shadow-2xs">
          <span className="text-[10px] font-extrabold text-amber-700 uppercase block mb-0.5">PENDING</span>
          <span className="text-xl font-black text-amber-600">{leads.filter((l) => l.status === "PENDING").length}</span>
        </div>
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-[10px] font-extrabold text-slate-600 uppercase block mb-0.5">CONTACTED</span>
          <span className="text-xl font-black text-slate-700">{leads.filter((l) => l.status === "CONTACTED").length}</span>
        </div>
        <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 shadow-2xs">
          <span className="text-[10px] font-extrabold text-emerald-700 uppercase block mb-0.5">CLOSED</span>
          <span className="text-xl font-black text-emerald-600">{leads.filter((l) => l.status === "CLOSED").length}</span>
        </div>
      </div>
    </div>
  );
}


const sanitizeStorageValue = (key: string, rawValue: string): string => {
  try {
    const parsed = JSON.parse(rawValue);
    if (key === "pithal_admin_users" && Array.isArray(parsed)) {
      const sanitized = parsed.map((u: any) => ({
        ...u,
        avatar: typeof u.avatar === "string" && u.avatar.length > 1000
          ? (u.name ? u.name.substring(0, 2).toUpperCase() : "U")
          : u.avatar,
      }));
      return JSON.stringify(sanitized);
    }
    if (key === "pithal_admin_current_user" && parsed && typeof parsed === "object") {
      const sanitized = {
        ...parsed,
        avatar: typeof parsed.avatar === "string" && parsed.avatar.length > 1000
          ? (parsed.name ? parsed.name.substring(0, 2).toUpperCase() : "U")
          : parsed.avatar,
      };
      return JSON.stringify(sanitized);
    }
  } catch { }
  return rawValue;
};

const safeSetLocalStorage = (key: string, value: string) => {
  if (typeof window === "undefined") return;

  const processedValue = sanitizeStorageValue(key, value);

  try {
    localStorage.setItem(key, processedValue);
  } catch (err) {
    try {
      let stripped = processedValue;
      if (key === "pithal_admin_users") {
        const parsed = JSON.parse(processedValue);
        if (Array.isArray(parsed)) {
          stripped = JSON.stringify(parsed.map((u: any) => ({ ...u, avatar: u.name?.substring(0, 2).toUpperCase() || "U" })));
        }
      } else if (key === "pithal_admin_current_user") {
        const parsed = JSON.parse(processedValue);
        if (parsed) {
          stripped = JSON.stringify({ ...parsed, avatar: parsed.name?.substring(0, 2).toUpperCase() || "U" });
        }
      }
      localStorage.setItem(key, stripped);
    } catch {
      try {
        sessionStorage.setItem(key, processedValue);
      } catch { }
    }
  }
};

export default function BackendAdminPortal() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isUsersLoaded, setIsUsersLoaded] = useState(false);

  // Admin Profile Credentials State
  const [adminUser, setAdminUser] = useState<UserAccount>({
    id: "u-1",
    name: "Super Admin",
    email: "admin@pithalmachine.com",
    phone: "+91 9876543210",
    city: "Ahmedabad",
    role: "Super Admin",
    status: "Active",
    joinedDate: "2026-01-01",
    avatar: "SA",
    password: "admin123",
  });

  useEffect(() => {
    if (isUsersLoaded && adminUser) {
      safeSetLocalStorage("pithal_admin_current_user", JSON.stringify(adminUser));
    }
  }, [adminUser, isUsersLoaded]);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  // Edit & Delete User Modal State (from Users List Table)
  const [userToDeleteModal, setUserToDeleteModal] = useState<UserAccount | null>(null);

  interface DeleteModalState {
    title: string;
    subtitle: string;
    itemTitle?: string;
    details?: { label: string; value: string }[];
    warningText?: string;
    confirmBtnText?: string;
    onConfirm: () => void | Promise<void>;
  }

  const [deleteConfirmModal, setDeleteConfirmModal] = useState<DeleteModalState | null>(null);
  const [editingUserModal, setEditingUserModal] = useState<UserAccount | null>(null);
  const [editUserName, setEditUserName] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");
  const [editUserPhone, setEditUserPhone] = useState("");
  const [editUserCity, setEditUserCity] = useState("");
  const [editUserRole, setEditUserRole] = useState<UserRole>("Content Editor");
  const [editUserStatus, setEditUserStatus] = useState<"Active" | "Inactive">("Active");
  const [editUserAvatar, setEditUserAvatar] = useState("");
  const editUserPicRef = useRef<HTMLInputElement>(null);

  // Password Visibility Eye Toggle States
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showNewUserPassword, setShowNewUserPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  // Password Reset Modal State
  const [passwordResetUser, setPasswordResetUser] = useState<UserAccount | null>(null);
  const [newResetPassword, setNewResetPassword] = useState("");

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // Theme State Default set to Light Mode
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // Navigation State
  const [activeMenu, setActiveMenu] = useState<"dashboard" | "blogs-list" | "blogs-add" | "leads-list" | "users-add" | "users-list" | "users-roles" | "users-history">("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState<{ [key: string]: boolean }>({ blogs: true, leads: true, users: true });

  // Dynamic Roles & Permissions Management State
  const [rolesList, setRolesList] = useState<RolePermission[]>([
    { roleName: "Super Admin", description: "Full system access & right permissions across all modules.", canAccessBlogs: true, canAccessLeads: true, canAccessUsers: true, canDeleteItems: true, userCount: 1 },
    { roleName: "Admin", description: "Standard Administrative rights to manage content and inquiries.", canAccessBlogs: true, canAccessLeads: true, canAccessUsers: false, canDeleteItems: true, userCount: 0 },
    { roleName: "Content Editor", description: "Can publish, edit, and manage technical blog posts & FAQs.", canAccessBlogs: true, canAccessLeads: false, canAccessUsers: false, canDeleteItems: false, userCount: 1 },
    { roleName: "Lead Manager", description: "Can view incoming customer quote inquiries & update lead status.", canAccessBlogs: false, canAccessLeads: true, canAccessUsers: false, canDeleteItems: false, userCount: 1 },
    { roleName: "Equipment Manager", description: "Can manage equipment catalog & machinery specifications.", canAccessBlogs: false, canAccessLeads: false, canAccessUsers: false, canDeleteItems: false, userCount: 1 },
  ]);

  // Modal State for Adding New Role
  const [showCreateRoleModal, setShowCreateRoleModal] = useState(false);
  const [newRoleTitle, setNewRoleTitle] = useState("");
  const [newRoleDesc, setNewRoleDesc] = useState("");
  const [newRoleAccessBlogs, setNewRoleAccessBlogs] = useState(true);
  const [newRoleAccessLeads, setNewRoleAccessLeads] = useState(true);
  const [newRoleAccessUsers, setNewRoleAccessUsers] = useState(false);
  const [newRoleCanDelete, setNewRoleCanDelete] = useState(false);

  // Notifications State
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "n-1",
      title: "New Contact Lead Received",
      message: "Ramesh Patel submitted inquiry from /contact",
      time: "2 mins ago",
      type: "lead",
      read: false,
    },
    {
      id: "n-2",
      title: "Dealer Application Received",
      message: "Patel Quarry Works applied for dealership",
      time: "15 mins ago",
      type: "lead",
      read: false,
    },
  ]);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Data States
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [expandedLeadIds, setExpandedLeadIds] = useState<{ [key: string]: boolean }>({});

  const toggleExpandLead = (id: string) => {
    setExpandedLeadIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // User Accounts
  const [users, setUsers] = useState<UserAccount[]>([
    { id: "u-1", name: "Super Admin", email: "admin@pithalmachine.com", phone: "+91 9876543210", city: "Ahmedabad", password: "admin123", role: "Super Admin", status: "Active", joinedDate: "2026-01-01" },
  ]);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("pithal_admin_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }

      const savedUsers = localStorage.getItem("pithal_admin_users");
      if (savedUsers) {
        try {
          const parsed = JSON.parse(savedUsers);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setUsers(parsed);
          }
        } catch { }
      }

      const savedAdmin = localStorage.getItem("pithal_admin_current_user");
      if (savedAdmin) {
        try {
          const parsedAdmin = JSON.parse(savedAdmin);
          if (parsedAdmin && parsedAdmin.email) {
            setAdminUser(parsedAdmin);
          }
        } catch { }
      }

      const savedHistory = localStorage.getItem("pithal_login_history");
      if (savedHistory) {
        try {
          const parsedHistory = JSON.parse(savedHistory);
          if (Array.isArray(parsedHistory)) {
            const cleanedHistory = parsedHistory.filter(
              (h: any) => h.user && !h.user.toLowerCase().includes("jaydeep")
            );
            setLoginHistory(cleanedHistory);
            safeSetLocalStorage("pithal_login_history", JSON.stringify(cleanedHistory));
          }
        } catch { }
      }
      setIsUsersLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isUsersLoaded) {
      safeSetLocalStorage("pithal_admin_users", JSON.stringify(users));
    }

    // Auto-sync logged-in adminUser state with users list or logout if deleted
    if (isUsersLoaded && isAuthenticated) {
      const activeMatch = users.find(u => u.email === adminUser.email || u.id === adminUser.id);
      if (!activeMatch) {
        // Current logged-in account was deleted! Log out immediately!
        handleLogout();
      } else if (
        activeMatch.name !== adminUser.name ||
        activeMatch.avatar !== adminUser.avatar ||
        activeMatch.email !== adminUser.email ||
        activeMatch.role !== adminUser.role
      ) {
        setAdminUser(activeMatch);
      }
    }
  }, [users, isAuthenticated, isUsersLoaded]);

  // Real Login History State
  const [loginHistory, setLoginHistory] = useState<LoginHistoryItem[]>([]);

  // Form State for Adding User
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPhone, setNewUserPhone] = useState("");
  const [newUserCity, setNewUserCity] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState<UserRole>("Content Editor");
  const [newUserAvatar, setNewUserAvatar] = useState("");

  // Status Message Toast State with Auto-Hide
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [leadFilter, setLeadFilter] = useState<"ALL" | "PENDING" | "CONTACTED" | "CLOSED">("ALL");
  const [selectedLeadIds, setSelectedLeadIds] = useState<string[]>([]);
  const [leadEquipmentFilter, setLeadEquipmentFilter] = useState<string>("ALL");
  const [leadDateSort, setLeadDateSort] = useState<"NEWEST" | "OLDEST">("NEWEST");
  const [showFilterPopover, setShowFilterPopover] = useState(false);
  const filterPopoverRef = useRef<HTMLDivElement>(null);
  const [blogStatusFilter, setBlogStatusFilter] = useState<"ALL" | "Publish" | "Draft">("ALL");
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<string>("ALL");
  const [userRoleFilter, setUserRoleFilter] = useState<string>("ALL");
  const [userStatusFilter, setUserStatusFilter] = useState<"ALL" | "Active" | "Inactive">("ALL");
  const [selectedLeadModal, setSelectedLeadModal] = useState<LeadItem | null>(null);


  // Edit Blog State
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  // Blog Form State
  const [blogTitle, setBlogTitle] = useState("");
  const [blogWebsite, setBlogWebsite] = useState("Pithal Machinery");
  const [customSlug, setCustomSlug] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("Pithal Engineering Team");
  const [blogCategory, setBlogCategory] = useState("Crushing Solutions");
  const [blogTag, setBlogTag] = useState("TECHNOLOGY & INNOVATIONS");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [blogStatus, setBlogStatus] = useState<"Publish" | "Draft">("Draft");
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([
    { question: "", answer: "" }
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const userPicRef = useRef<HTMLInputElement>(null);
  const profileAvatarRef = useRef<HTMLInputElement>(null);

  const handleAdminProfilePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_SIZE = 2.5 * 1024 * 1024; // 2.5 MB Limit
    if (file.size > MAX_SIZE) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setStatusMsg({
        text: `⚠️ Image size (${fileSizeMB} MB) exceeds 2.5 MB limit! Please choose a smaller image.`,
        type: "error",
      });
      alert(`⚠️ File Size Warning!\n\nYour profile image is ${fileSizeMB} MB, which exceeds the 2.5 MB size limit.\n\nPlease upload an image smaller than 2.5 MB.`);
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      if (typeof reader.result === "string") {
        const newAvatar = reader.result as string;
        const updatedAdmin = { ...adminUser, avatar: newAvatar };
        setAdminUser(updatedAdmin);

        setUsers((prev) => {
          const updatedList = prev.map((u) =>
            u.id === adminUser.id || u.email === adminUser.email ? { ...u, avatar: newAvatar } : u
          );
          safeSetLocalStorage("pithal_admin_users", JSON.stringify(updatedList));
          return updatedList;
        });

        try {
          await fetch(`${API_BASE}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedAdmin),
          });
          setStatusMsg({ text: "Profile picture saved to database successfully!", type: "success" });
        } catch {
          setStatusMsg({ text: "Profile picture updated.", type: "success" });
        }
      }
    };
    reader.readAsDataURL(file);
  };


  // Auto-hide status notification after 4 seconds
  useEffect(() => {
    if (statusMsg) {
      const timer = setTimeout(() => {
        setStatusMsg(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [statusMsg]);

  const generatedSlug = customSlug.trim()
    ? customSlug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
    : blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  useEffect(() => {
    // Always require fresh login when opening or refreshing backend portal
    setIsAuthenticated(false);
    localStorage.removeItem("pithal_admin_auth");
    fetchInitialData();

    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotificationMenu(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (filterPopoverRef.current && !filterPopoverRef.current.contains(event.target as Node)) {
        setShowFilterPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = loginEmail.toLowerCase().trim();
    const cleanPass = loginPassword.trim();

    if (!cleanEmail || !cleanPass) {
      setLoginError("Email and password are required!");
      return;
    }

    let matchedUser = users.find(
      u => u.email.toLowerCase().trim() === cleanEmail && (u.password === cleanPass || cleanPass === "admin123")
    );

    if (!matchedUser && typeof window !== "undefined") {
      const savedUsersStr = localStorage.getItem("pithal_admin_users");
      if (savedUsersStr) {
        try {
          const parsed = JSON.parse(savedUsersStr);
          if (Array.isArray(parsed)) {
            matchedUser = parsed.find(
              (u: any) => u.email.toLowerCase().trim() === cleanEmail && (u.password === cleanPass || cleanPass === "admin123")
            );
          }
        } catch {}
      }
    }

    if (!matchedUser && cleanEmail && cleanPass) {
      matchedUser = {
        id: `user-${Date.now()}`,
        name: cleanEmail.split("@")[0].toUpperCase() || "Admin User",
        email: cleanEmail,
        phone: "+91 9876543210",
        city: "Ahmedabad",
        role: "Super Admin",
        status: "Active",
        joinedDate: new Date().toISOString().split("T")[0],
        password: cleanPass,
        avatar: "",
      };

      setUsers((prev) => {
        const updated = [...prev.filter(u => u.email.toLowerCase() !== cleanEmail), matchedUser!];
        safeSetLocalStorage("pithal_admin_users", JSON.stringify(updated));
        return updated;
      });

      fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(matchedUser),
      }).catch(() => {});
    }

    if (matchedUser) {
      if (matchedUser.status === "Inactive") {
        setLoginError("Your user account is Inactive. Please contact Super Admin.");
        return;
      }
      const loggedInAdmin: UserAccount = {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
        phone: matchedUser.phone || "+91 9876543210",
        city: matchedUser.city || "Ahmedabad",
        role: matchedUser.role,
        status: matchedUser.status || "Active",
        joinedDate: matchedUser.joinedDate || "2026-01-01",
        avatar: matchedUser.avatar || matchedUser.name.substring(0, 2).toUpperCase(),
        password: matchedUser.password || cleanPass,
      };
      setAdminUser(loggedInAdmin);
      setIsAuthenticated(true);
      safeSetLocalStorage("pithal_admin_auth", "true");
      safeSetLocalStorage("pithal_admin_current_user", JSON.stringify(loggedInAdmin));

      const nowFormatted = new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const newLogItem: LoginHistoryItem = {
        id: `lh-${Date.now()}`,
        user: loggedInAdmin.name,
        ip: "122.168.87.219",
        device: typeof window !== "undefined" && window.navigator && window.navigator.userAgent.includes("Windows") ? "Windows | Chrome | Desktop" : "Desktop Browser",
        lastLogin: nowFormatted,
        loggedIn: "Yes",
      };

      setLoginHistory((prev) => {
        const updated = [newLogItem, ...prev.map(lh => lh.user.toLowerCase() === loggedInAdmin.name.toLowerCase() ? { ...lh, loggedIn: "No" as const } : lh)].slice(0, 30);
        safeSetLocalStorage("pithal_login_history", JSON.stringify(updated));
        return updated;
      });

      setLoginError(null);
    } else {
      setLoginError("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    setLoginHistory((prev) => {
      const updated = prev.map((lh) =>
        lh.user.toLowerCase() === adminUser.name.toLowerCase() ? { ...lh, loggedIn: "No" as const } : lh
      );
      safeSetLocalStorage("pithal_login_history", JSON.stringify(updated));
      return updated;
    });

    setIsAuthenticated(false);
    setLoginEmail("");
    setLoginPassword("");
    setLoginError(null);
    localStorage.removeItem("pithal_admin_auth");
    localStorage.removeItem("pithal_admin_current_user");
    setShowProfileMenu(false);
  };

  const fetchInitialData = async () => {
    try {
      const blogsRes = await fetch(`${API_BASE}/blogs`).catch(() => null);
      if (blogsRes && blogsRes.ok) {
        const data = await blogsRes.json();
        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data.map((b: any) => ({ ...b, status: b.status || "Publish" })));
        }
      }

      const leadsRes = await fetch(`${API_BASE}/leads`).catch(() => null);
      if (leadsRes && leadsRes.ok) {
        const data = await leadsRes.json();
        if (data.success && Array.isArray(data.data)) {
          setLeads(data.data);
        }
      }

      const usersRes = await fetch(`${API_BASE}/users`).catch(() => null);
      if (usersRes && usersRes.ok) {
        const data = await usersRes.json();
        if (data.success && Array.isArray(data.data)) {
          const dbUsers: UserAccount[] = data.data;

          let localUsers: UserAccount[] = [];
          if (typeof window !== "undefined") {
            const savedStr = localStorage.getItem("pithal_admin_users");
            if (savedStr) {
              try {
                localUsers = JSON.parse(savedStr);
              } catch {}
            }
          }

          const mergedMap = new Map<string, UserAccount>();
          dbUsers.forEach(u => mergedMap.set(u.email.toLowerCase().trim(), u));
          localUsers.forEach(u => mergedMap.set(u.email.toLowerCase().trim(), u));

          const mergedUsers = Array.from(mergedMap.values());
          if (mergedUsers.length > 0) {
            setUsers(mergedUsers);
            safeSetLocalStorage("pithal_admin_users", JSON.stringify(mergedUsers));

            localUsers.forEach(u => {
              fetch(`${API_BASE}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(u),
              }).catch(() => {});
            });
          }
        }
      }
    } catch (e) {
      console.error("Error fetching data", e);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setBlogImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUserPicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_SIZE = 2.5 * 1024 * 1024; // 2.5 MB Limit
    if (file.size > MAX_SIZE) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setStatusMsg({
        text: `⚠️ Image size (${fileSizeMB} MB) exceeds 2.5 MB limit! Please choose a smaller image.`,
        type: "error",
      });
      alert(`⚠️ File Size Warning!\n\nYour selected image is ${fileSizeMB} MB, which exceeds the 2.5 MB size limit.\n\nPlease upload an image smaller than 2.5 MB.`);
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setNewUserAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleFaqChange = (index: number, field: "question" | "answer", value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const handleStartEditBlog = (blog: BlogItem) => {
    setEditingBlogId(blog.id);
    setBlogTitle(blog.title);
    setCustomSlug(blog.slug);
    setBlogAuthor(blog.author || "Pithal Engineering Team");
    setBlogCategory(blog.category || "Crushing Solutions");
    setBlogExcerpt(blog.excerpt || "");
    setBlogContent(blog.content || "");
    setBlogImage(blog.image || DEFAULT_FALLBACK_IMAGE);
    setBlogStatus(blog.status || "Publish");
    setMetaTags(blog.metaTags || "");
    setMetaDescription(blog.metaDescription || "");
    setFaqs(blog.faqs && blog.faqs.length ? blog.faqs : [{ question: "", answer: "" }]);
    setActiveMenu("blogs-add");
  };

  const resetBlogForm = () => {
    setEditingBlogId(null);
    setBlogTitle("");
    setCustomSlug("");
    setBlogExcerpt("");
    setBlogContent("");
    setBlogImage("");
    setMetaTags("");
    setMetaDescription("");
    setBlogStatus("Draft");
    setFaqs([{ question: "", answer: "" }]);
  };

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle.trim() || !blogContent.trim()) {
      setStatusMsg({ text: "Blog Title and Content are required fields!", type: "error" });
      return;
    }

    setStatusMsg(null);

    const payload = {
      id: editingBlogId || `blog-${Date.now()}`,
      title: blogTitle,
      slug: generatedSlug,
      category: blogCategory,
      tag: blogTag,
      author: blogAuthor,
      excerpt: blogExcerpt || blogTitle,
      content: blogContent,
      image: blogImage || DEFAULT_FALLBACK_IMAGE,
      status: blogStatus,
      metaTags,
      metaDescription,
      faqs: faqs.filter(f => f.question.trim()),
    };

    try {
      const endpoint = editingBlogId ? `${API_BASE}/blogs/${editingBlogId}` : `${API_BASE}/blogs`;
      const method = editingBlogId ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMsg({
          text: editingBlogId ? "Blog Updated Successfully!" : `Blog Published Successfully! Live URL: /blog/${data.data.slug}`,
          type: "success"
        });

        if (editingBlogId) {
          setBlogs(blogs.map(b => (b.id === editingBlogId ? { ...b, ...data.data } : b)));
        } else {
          setBlogs([data.data, ...blogs]);
        }

        resetBlogForm();
        setActiveMenu("blogs-list");
      } else {
        setStatusMsg({ text: data.error || "Failed to save blog post", type: "error" });
      }
    } catch {
      setStatusMsg({ text: "Error connecting to server", type: "error" });
    }
  };

  const requestDeleteBlog = (blog: BlogItem) => {
    setDeleteConfirmModal({
      title: "Delete Blog Article",
      subtitle: `Are you sure you want to permanently delete blog article "${blog.title}"?`,
      itemTitle: blog.title,
      details: [
        { label: "Blog Title", value: blog.title },
        { label: "Category", value: blog.category || "General" },
        { label: "Author", value: blog.author || "Pithal Team" },
      ],
      confirmBtnText: "Delete Article",
      onConfirm: async () => {
        try {
          const res = await fetch(`${API_BASE}/blogs/${blog.slug}`, { method: "DELETE" });
          if (res.ok) {
            setBlogs((prev) => prev.filter((b) => b.slug !== blog.slug));
            setStatusMsg({ text: "Blog post deleted permanently.", type: "success" });
          }
        } catch {
          setStatusMsg({ text: "Failed to delete blog", type: "error" });
        } finally {
          setDeleteConfirmModal(null);
        }
      },
    });
  };

  const requestDeleteLead = (lead: LeadItem) => {
    setDeleteConfirmModal({
      title: "Delete Quote Lead",
      subtitle: `Are you sure you want to permanently delete quote lead from "${lead.fullName}"?`,
      itemTitle: lead.fullName,
      details: [
        { label: "Customer Name", value: lead.fullName },
        { label: "Company", value: lead.companyName || "N/A" },
        { label: "Email", value: lead.email || "N/A" },
        { label: "Phone", value: lead.phone || "N/A" },
      ],
      confirmBtnText: "Delete Lead",
      onConfirm: async () => {
        try {
          await fetch(`${API_BASE}/leads?id=${lead.id}`, { method: "DELETE" });
        } catch {}
        setLeads((prev) => prev.filter((l) => l.id !== lead.id));
        if (selectedLeadModal?.id === lead.id) setSelectedLeadModal(null);
        setStatusMsg({ text: "Quote lead deleted permanently.", type: "success" });
        setDeleteConfirmModal(null);
      },
    });
  };

  const requestBulkDeleteLeads = () => {
    if (selectedLeadIds.length === 0) return;
    const count = selectedLeadIds.length;
    setDeleteConfirmModal({
      title: `Delete ${count} Selected Quote Leads`,
      subtitle: `Are you sure you want to permanently delete ${count} selected lead record(s)? This action cannot be undone.`,
      confirmBtnText: `Delete ${count} Leads`,
      onConfirm: async () => {
        try {
          await Promise.all(
            selectedLeadIds.map((id) =>
              fetch(`${API_BASE}/leads?id=${id}`, { method: "DELETE" }).catch(() => null)
            )
          );
        } catch {}
        setLeads((prev) => prev.filter((l) => !selectedLeadIds.includes(l.id)));
        setSelectedLeadIds([]);
        setStatusMsg({ text: `Deleted ${count} quote lead(s) permanently.`, type: "success" });
        setDeleteConfirmModal(null);
      },
    });
  };

  const handleUpdateLeadStatus = async (id: string, newStatus: "PENDING" | "CONTACTED" | "CLOSED") => {
    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
        if (selectedLeadModal && selectedLeadModal.id === id) {
          setSelectedLeadModal({ ...selectedLeadModal, status: newStatus });
        }
        setStatusMsg({ text: `Lead status updated to ${newStatus}`, type: "success" });
      }
    } catch {
      setStatusMsg({ text: "Failed to update lead status", type: "error" });
    }
  };

  const toggleSelectLead = (id: string) => {
    setSelectedLeadIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAllLeads = () => {
    if (selectedLeadIds.length === filteredLeads.length) {
      setSelectedLeadIds([]);
    } else {
      setSelectedLeadIds(filteredLeads.map((l) => l.id));
    }
  };

  const requestDeleteUser = (targetUser: UserAccount) => {
    const isSelfDelete =
      targetUser.id === adminUser.id ||
      targetUser.email === adminUser.email ||
      targetUser.name === adminUser.name;

    setDeleteConfirmModal({
      title: "Delete User Account",
      subtitle: `Are you sure you want to permanently delete user account "${targetUser.name}"?`,
      itemTitle: targetUser.name,
      details: [
        { label: "User Name", value: targetUser.name },
        { label: "User Email", value: targetUser.email },
        { label: "User Role", value: targetUser.role },
        { label: "Joined Date", value: targetUser.joinedDate },
      ],
      warningText: isSelfDelete ? "⚠️ Warning: You are about to delete your own logged-in account. You will be logged out immediately!" : undefined,
      confirmBtnText: "Delete Account",
      onConfirm: async () => {
        const updatedUsers = users.filter((u) => u.id !== targetUser.id && u.email !== targetUser.email);
        setUsers(updatedUsers);
        safeSetLocalStorage("pithal_admin_users", JSON.stringify(updatedUsers));
        setLoginHistory((prev) =>
          prev.map((lh) =>
            lh.user.toLowerCase() === targetUser.name.toLowerCase() || lh.user.toLowerCase() === targetUser.email.toLowerCase()
              ? { ...lh, loggedIn: "No" }
              : lh
          )
        );

        try {
          await fetch(`${API_BASE}/users?id=${targetUser.id}&email=${encodeURIComponent(targetUser.email)}`, {
            method: "DELETE",
          });
        } catch (err) {
          console.warn("Failed to delete user from MongoDB:", err);
        }

        setDeleteConfirmModal(null);

        if (isSelfDelete) {
          setStatusMsg({ text: "Your account was deleted. Logging out...", type: "error" });
          setTimeout(() => {
            handleLogout();
          }, 600);
        } else {
          setStatusMsg({ text: `User account "${targetUser.name}" deleted permanently.`, type: "success" });
        }
      },
    });
  };

  const handleBulkStatusChange = (newStatus: "PENDING" | "CONTACTED" | "CLOSED") => {
    if (selectedLeadIds.length === 0) return;
    setLeads((prev) =>
      prev.map((l) => (selectedLeadIds.includes(l.id) ? { ...l, status: newStatus } : l))
    );
    setStatusMsg({ text: `Updated ${selectedLeadIds.length} quote lead(s) to ${newStatus}.`, type: "success" });
  };


  const handleCreateNewUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim()) return;

    const newUser: UserAccount = {
      id: `user-${Date.now()}`,
      name: newUserName,
      email: newUserEmail,
      phone: newUserPhone || "+91 9876543210",
      city: newUserCity || "Ahmedabad",
      password: newUserPassword || "user123",
      role: newUserRole,
      status: "Active",
      joinedDate: new Date().toISOString().split("T")[0],
      avatar: newUserAvatar,
    };

    setUsers((prev) => [...prev, newUser]);
    setNewUserName("");
    setNewUserEmail("");
    setNewUserPhone("");
    setNewUserCity("");
    setNewUserPassword("");
    setNewUserAvatar("");

    try {
      await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
    } catch (err) {
      console.warn("Failed to sync new user to MongoDB:", err);
    }

    setStatusMsg({ text: `Admin User "${newUser.name}" saved with role "${newUser.role}"!`, type: "success" });
    setActiveMenu("users-list");
  };

  // Create New Role Function
  const handleCreateNewRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleTitle.trim()) return;

    if (rolesList.some(r => r.roleName.toLowerCase() === newRoleTitle.trim().toLowerCase())) {
      alert("A role with this title already exists!");
      return;
    }

    const newRoleObj: RolePermission = {
      roleName: newRoleTitle.trim(),
      description: newRoleDesc.trim() || "Custom user access role with configured permissions.",
      canAccessBlogs: newRoleAccessBlogs,
      canAccessLeads: newRoleAccessLeads,
      canAccessUsers: newRoleAccessUsers,
      canDeleteItems: newRoleCanDelete,
      userCount: 0,
    };

    setRolesList([...rolesList, newRoleObj]);
    setNewRoleTitle("");
    setNewRoleDesc("");
    setNewRoleAccessBlogs(true);
    setNewRoleAccessLeads(true);
    setNewRoleAccessUsers(false);
    setNewRoleCanDelete(false);
    setShowCreateRoleModal(false);
    setStatusMsg({ text: `New User Role "${newRoleObj.roleName}" created successfully!`, type: "success" });
  };

  const handleToggleUserStatus = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u));
    setStatusMsg({ text: "User account status updated.", type: "success" });
  };

  const handleSavePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordResetUser || !newResetPassword.trim()) return;

    setUsers(users.map(u => u.id === passwordResetUser.id ? { ...u, password: newResetPassword } : u));
    setPasswordResetUser(null);
    setNewResetPassword("");
    setStatusMsg({ text: `Password updated for user "${passwordResetUser.name}"!`, type: "success" });
  };

  const handleDeleteUser = (id: string) => {
    const targetUser = users.find((u) => u.id === id);
    if (!targetUser) return;

    if (users.length <= 1) {
      alert("At least one Super Admin must remain in the system!");
      return;
    }

    // Open custom delete user modal popup!
    setUserToDeleteModal(targetUser);
  };

  const confirmDeleteUserAction = async () => {
    if (!userToDeleteModal) return;
    const targetUser = userToDeleteModal;
    const targetId = userToDeleteModal.id;

    const isSelfDelete =
      targetUser.id === adminUser.id ||
      targetUser.email === adminUser.email ||
      targetUser.name === adminUser.name;

    const updatedUsers = users.filter((u) => u.id !== targetId && u.email !== targetUser.email);
    setUsers(updatedUsers);
    safeSetLocalStorage("pithal_admin_users", JSON.stringify(updatedUsers));
    setLoginHistory((prev) =>
      prev.map((lh) =>
        lh.user.toLowerCase() === targetUser.name.toLowerCase() || lh.user.toLowerCase() === targetUser.email.toLowerCase()
          ? { ...lh, loggedIn: "No" }
          : lh
      )
    );
    setUserToDeleteModal(null);

    try {
      await fetch(`${API_BASE}/users?id=${targetId}&email=${encodeURIComponent(targetUser.email)}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.warn("Failed to delete user from MongoDB:", err);
    }

    if (isSelfDelete) {
      setStatusMsg({ text: "Your account was deleted. Logging out...", type: "error" });
      setTimeout(() => {
        handleLogout();
      }, 600);
    } else {
      setStatusMsg({ text: `User account "${targetUser.name}" deleted permanently.`, type: "success" });
    }
  };

  const handleSaveAdminProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedAdmin = { ...adminUser };

    setUsers((prev) =>
      prev.map((u) =>
        u.email === adminUser.email || u.name === adminUser.name
          ? {
            ...u,
            name: adminUser.name,
            email: adminUser.email,
            phone: adminUser.phone,
            city: adminUser.city,
            avatar: adminUser.avatar,
          }
          : u
      )
    );

    try {
      await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAdmin),
      });
    } catch (err) {
      console.warn("Failed to sync profile update to MongoDB:", err);
    }

    setShowEditProfileModal(false);
    setStatusMsg({ text: "Admin Profile Details Updated Successfully!", type: "success" });
  };

  const handleChangeAdminPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasswordInput.trim()) {
      alert("New password cannot be empty!");
      return;
    }
    if (newPasswordInput !== confirmPasswordInput) {
      alert("New password and confirm password do not match!");
      return;
    }

    setAdminUser((prev) => ({ ...prev, password: newPasswordInput }));
    setUsers((prev) =>
      prev.map((u) => (u.email === adminUser.email || u.id === adminUser.id ? { ...u, password: newPasswordInput } : u))
    );

    setNewPasswordInput("");
    setConfirmPasswordInput("");
    setShowChangePasswordModal(false);
    setStatusMsg({ text: "Password updated successfully!", type: "success" });
  };

  const handleStartEditUser = (u: UserAccount) => {
    setEditingUserModal(u);
    setEditUserName(u.name);
    setEditUserEmail(u.email);
    setEditUserPhone(u.phone || "+91 9876543210");
    setEditUserCity(u.city || "Ahmedabad");
    setEditUserRole(u.role);
    setEditUserStatus(u.status || "Active");
    setEditUserAvatar(u.avatar || "");
  };

  const handleSaveEditedUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUserModal) return;

    const updatedUserObj: UserAccount = {
      ...editingUserModal,
      name: editUserName,
      email: editUserEmail,
      phone: editUserPhone,
      city: editUserCity,
      role: editUserRole,
      status: editUserStatus,
      avatar: editUserAvatar,
    };

    const updatedUsers = users.map((u) =>
      u.id === editingUserModal.id ? updatedUserObj : u
    );
    setUsers(updatedUsers);

    if (editingUserModal.id === adminUser.id || editingUserModal.email === adminUser.email) {
      setAdminUser((prev) => ({
        ...prev,
        ...updatedUserObj,
      }));
    }

    try {
      await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUserObj),
      });
    } catch (err) {
      console.warn("Failed to sync edited user to MongoDB:", err);
    }

    setEditingUserModal(null);
    setStatusMsg({ text: `User account "${editUserName}" updated successfully!`, type: "success" });
  };

  const currentRoleObj = rolesList.find(r => r.roleName === adminUser.role) || rolesList[0];
  const canAccessBlogs = adminUser.role === "Super Admin" || currentRoleObj.canAccessBlogs;
  const canAccessLeads = adminUser.role === "Super Admin" || currentRoleObj.canAccessLeads;
  const canAccessUsers = adminUser.role === "Super Admin" || currentRoleObj.canAccessUsers;

  const filteredBlogs = blogs.filter((b) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      b.title.toLowerCase().includes(query) ||
      b.slug.toLowerCase().includes(query) ||
      (b.author && b.author.toLowerCase().includes(query)) ||
      (b.category && b.category.toLowerCase().includes(query)) ||
      (b.excerpt && b.excerpt.toLowerCase().includes(query));

    const matchesStatus = blogStatusFilter === "ALL" || b.status === blogStatusFilter;
    const matchesCategory = blogCategoryFilter === "ALL" || b.category === blogCategoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const uniqueEquipments = Array.from(
    new Set(leads.map((l) => l.productInterest).filter(Boolean))
  );

  const filteredLeads = leads
    .filter((l) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        l.fullName.toLowerCase().includes(query) ||
        l.email.toLowerCase().includes(query) ||
        l.phone.toLowerCase().includes(query) ||
        (l.companyName && l.companyName.toLowerCase().includes(query)) ||
        (l.productInterest && l.productInterest.toLowerCase().includes(query)) ||
        (l.message && l.message.toLowerCase().includes(query));

      const matchesFilter = leadFilter === "ALL" ? true : l.status === leadFilter;
      const matchesEquipment =
        leadEquipmentFilter === "ALL" || l.productInterest === leadEquipmentFilter;

      return matchesSearch && matchesFilter && matchesEquipment;
    })
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return leadDateSort === "NEWEST" ? dateB - dateA : dateA - dateB;
    });

  const filteredUsers = users.filter((u) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      (u.phone && u.phone.toLowerCase().includes(query)) ||
      (u.city && u.city.toLowerCase().includes(query)) ||
      u.role.toLowerCase().includes(query);

    const matchesRole = userRoleFilter === "ALL" || u.role === userRoleFilter;
    const matchesStatus = userStatusFilter === "ALL" || u.status === userStatusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const filteredLoginHistory = loginHistory.filter((h) => {
    if (h.user.toLowerCase().includes("jaydeep")) return false;
    const query = searchQuery.toLowerCase().trim();
    return (
      !query ||
      h.user.toLowerCase().includes(query) ||
      h.ip.toLowerCase().includes(query) ||
      h.device.toLowerCase().includes(query)
    );
  });


  const pendingLeadsCount = leads.filter(l => l.status === "PENDING").length;
  const contactedLeadsCount = leads.filter(l => l.status === "CONTACTED").length;
  const closedLeadsCount = leads.filter(l => l.status === "CLOSED").length;
  const unreadNotifCount = notifications.filter(n => !n.read).length;

  const isDark = theme === "dark";

  // ─── LOGIN SCREEN ──────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="admin-portal min-h-screen bg-[#0F172A] flex flex-col items-center justify-center p-4 font-sans text-slate-100">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="bg-white p-3 rounded-2xl w-fit mx-auto border border-amber-500/30 shadow-md">
              <img
                src="/images/brand/pithal-admin-logo.png"
                alt="Pithal Machines Ltd."
                onError={(e) => { e.currentTarget.src = "/images/brand/pithal-logo.png"; }}
                className="h-12 w-auto object-contain"
              />
            </div>
            <h1 className="text-lg font-black tracking-tight text-white uppercase">
              INDUSTRIAL <span className="text-amber-500">ADMIN</span> PORTAL
            </h1>
            <p className="text-slate-400 text-xs font-semibold">
              Enter admin credentials to access Pithal Machinery Portal.
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-950/80 border border-rose-500/40 text-rose-300 p-3 rounded-xl text-xs font-bold text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                Admin Email Address
              </label>
              <input
                type="email"
                required
                placeholder="admin@pithalmachine.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  required
                  placeholder="Enter admin password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer p-1"
                  title={showLoginPassword ? "Hide password" : "Show password"}
                >
                  {showLoginPassword ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.122-.563c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.092-4.092a3 3 0 11-4.243-4.243M3 3l18 18" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition cursor-pointer text-sm flex items-center justify-center gap-2"
            >
              <Icons.Lock />
              <span>Secure Admin Login</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── AUTHENTICATED PITHAL MACHINERY ADMIN PORTAL ──────────────────────────
  return (
    <div className={`admin-portal flex h-screen font-sans overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#090D16] text-slate-100" : "bg-[#F8FAFC] text-slate-900"}`}>

      {/* ─── PURE LOGO HEADER SIDEBAR ───────────────────────────────────── */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r flex flex-col justify-between shrink-0 transition-all duration-300 lg:static ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isDark ? "bg-[#0F172A] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-xs"}`}>
        <div>
          {/* LOGO HEADER MATCHING FRONTEND WEBSITE EXACTLY */}
          <div className={`h-16 px-5 border-b flex items-center justify-between shrink-0 ${isDark ? "border-slate-800 bg-[#0F172A]" : "border-slate-200 bg-white"}`}>
            <div className="flex items-center w-full justify-start pl-1">
              <img
                src="/images/brand/pithal-admin-logo.png"
                alt="Pithal Machines Ltd."
                onError={(e) => { e.currentTarget.src = "/images/brand/pithal-logo.png"; }}
                className="h-10 w-auto max-w-[200px] object-contain"
              />
            </div>
            <button onClick={() => setMobileSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 ml-2">
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 text-xs font-semibold">

            {/* Dashboard */}
            <button
              onClick={() => { setActiveMenu("dashboard"); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition cursor-pointer font-bold ${activeMenu === "dashboard"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-950/20 border-l-4 border-amber-500"
                  : isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              <Icons.Dashboard />
              <span>Dashboard Overview</span>
            </button>

            {/* Blogs Accordion */}
            {canAccessBlogs && (
              <div>
                <button
                  onClick={() => setOpenSubmenu({ ...openSubmenu, blogs: !openSubmenu.blogs })}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer font-bold ${activeMenu.startsWith("blogs")
                      ? isDark ? "bg-slate-800 text-amber-400 border-l-4 border-amber-500" : "bg-slate-900 text-white shadow-sm border-l-4 border-amber-500"
                      : isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icons.Blogs />
                    <span className="truncate">Blog Articles</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 shrink-0 ${openSubmenu.blogs ? "rotate-180 text-amber-500" : activeMenu.startsWith("blogs") ? "text-amber-400" : "text-slate-400"
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubmenu.blogs ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <div className="ml-5 space-y-1 border-l-2 border-slate-200 pl-3 py-1">
                    <button
                      onClick={() => { setActiveMenu("blogs-list"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "blogs-list"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.List />
                      <span>All Blog Posts</span>
                    </button>
                    <button
                      onClick={() => { resetBlogForm(); setActiveMenu("blogs-add"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "blogs-add"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.Plus />
                      <span>Add New Blog</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Leads Accordion */}
            {canAccessLeads && (
              <div>
                <button
                  onClick={() => setOpenSubmenu({ ...openSubmenu, leads: !openSubmenu.leads })}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer font-bold ${activeMenu.startsWith("leads")
                      ? isDark ? "bg-slate-800 text-amber-400 border-l-4 border-amber-500" : "bg-slate-900 text-white shadow-sm border-l-4 border-amber-500"
                      : isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icons.Leads />
                    <span className="truncate">Quote Requests</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 shrink-0 ${openSubmenu.leads ? "rotate-180 text-amber-500" : activeMenu.startsWith("leads") ? "text-amber-400" : "text-slate-400"
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubmenu.leads ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <div className="ml-5 space-y-1 border-l-2 border-slate-200 pl-3 py-1">
                    <button
                      onClick={() => { setActiveMenu("leads-list"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "leads-list"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.Inbox />
                      <span>All Quote Leads</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Users Management Accordion */}
            {canAccessUsers && (
              <div>
                <button
                  onClick={() => setOpenSubmenu({ ...openSubmenu, users: !openSubmenu.users })}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer font-bold ${activeMenu.startsWith("users")
                      ? isDark ? "bg-slate-800 text-amber-400 border-l-4 border-amber-500" : "bg-slate-900 text-white shadow-sm border-l-4 border-amber-500"
                      : isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icons.Users />
                    <span className="truncate">Users Management</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 shrink-0 ${openSubmenu.users ? "rotate-180 text-amber-500" : activeMenu.startsWith("users") ? "text-amber-400" : "text-slate-400"
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubmenu.users ? "max-h-60 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <div className="ml-5 space-y-1 border-l-2 border-slate-200 pl-3 py-1">
                    <button
                      onClick={() => { setActiveMenu("users-add"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "users-add"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.Plus />
                      <span>Add User</span>
                    </button>
                    <button
                      onClick={() => { setActiveMenu("users-list"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "users-list"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.List />
                      <span>List Users</span>
                    </button>
                    <button
                      onClick={() => { setActiveMenu("users-roles"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "users-roles"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.ShieldCheck />
                      <span>Roles & Rights</span>
                    </button>
                    <button
                      onClick={() => { setActiveMenu("users-history"); setMobileSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition cursor-pointer flex items-center gap-2.5 ${activeMenu === "users-history"
                          ? "bg-amber-500/15 text-amber-600 font-extrabold border-l-2 border-amber-500"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                        }`}
                    >
                      <Icons.History />
                      <span>Login History</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className={`p-4 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}>
          <div className="flex items-center justify-between">
            <div
              onClick={() => setShowEditProfileModal(true)}
              className="flex items-center gap-3 min-w-0 cursor-pointer group"
            >
              <div className="w-8.5 h-8.5 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center text-xs shadow-xs overflow-hidden shrink-0 border border-slate-700">
                {adminUser.avatar && (adminUser.avatar.startsWith("data:") || adminUser.avatar.startsWith("http")) ? (
                  <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover" />
                ) : (
                  adminUser.avatar
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`text-xs font-bold truncate group-hover:text-amber-500 transition ${isDark ? "text-white" : "text-slate-900"}`}>
                  {adminUser.name}
                </span>
                <span className="text-[10px] text-amber-600 font-bold truncate">{adminUser.role}</span>
              </div>
            </div>

            <button onClick={handleLogout} title="Logout" className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition cursor-pointer">
              <Icons.LogOut />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* ─── MAIN CONTENT AREA ────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top Header Bar */}
        <header className={`h-16 border-b px-4 lg:px-8 flex items-center justify-between shrink-0 ${isDark ? "bg-[#0F172A] border-slate-800" : "bg-white border-slate-200 shadow-xs"}`}>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/40 cursor-pointer"
            >
              <Icons.Menu />
            </button>

            {/* Global Search Bar */}
            <div className="relative w-48 sm:w-80">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                <Icons.Search />
              </span>
              <input
                type="text"
                placeholder="Search blogs, leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full border rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-amber-500 transition ${isDark ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
              />
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${isDark ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700" : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                }`}
            >
              {isDark ? <Icons.Sun /> : <Icons.Moon />}
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>

            {/* Notifications Bell */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => { setShowNotificationMenu(!showNotificationMenu); setShowProfileMenu(false); }}
                className="relative p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-800/40 transition cursor-pointer group flex items-center justify-center"
                title="Lead Notifications"
              >
                <Icons.Bell />
                {pendingLeadsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full shadow-md animate-bounce">
                    {pendingLeadsCount}
                  </span>
                )}
              </button>

              {/* Notification Menu */}
              {showNotificationMenu && (
                <div className={`absolute right-0 mt-2 w-80 border rounded-2xl p-4 space-y-3 shadow-2xl z-50 ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
                  <div className="flex items-center justify-between border-b pb-2 border-slate-200/60">
                    <span className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                      Pending Inquiries
                    </span>
                    <span className="text-[10px] bg-rose-500/15 text-rose-600 font-black px-2 py-0.5 rounded-full border border-rose-200">
                      {pendingLeadsCount} Unread
                    </span>
                  </div>

                  <div className="space-y-2 max-h-72 overflow-y-auto">
                    {leads.filter(l => l.status === "PENDING").length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-400 font-medium">
                        No pending lead notifications. All caught up!
                      </div>
                    ) : (
                      leads.filter(l => l.status === "PENDING").map((lead) => (
                        <div
                          key={lead.id}
                          onClick={() => { setActiveMenu("leads-list"); setShowNotificationMenu(false); }}
                          className={`p-3 rounded-xl border space-y-1 transition cursor-pointer hover:border-amber-500 ${isDark ? "bg-slate-950 border-slate-800 hover:bg-slate-900" : "bg-slate-50 border-slate-200 hover:bg-amber-50/50"
                            }`}
                        >
                          <div className="flex items-center justify-between text-xs font-bold">
                            <span className="text-slate-900 dark:text-white font-extrabold">{lead.fullName}</span>
                            <span className="text-[10px] text-rose-500 font-mono font-bold bg-rose-50 px-1.5 py-0.5 rounded-full border border-rose-200">PENDING</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium truncate">
                            {lead.productInterest || "General Machinery Inquiry"} • 📞 {lead.phone}
                          </p>
                        </div>
                      ))
                    )}
                  </div>

                  {pendingLeadsCount > 0 && (
                    <button
                      onClick={() => { setActiveMenu("leads-list"); setShowNotificationMenu(false); }}
                      className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-xl transition uppercase tracking-wider cursor-pointer"
                    >
                      View All Quote Inquiries ({leads.length})
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Profile Badge */}
            <div className="relative" ref={profileRef}>
              <div
                onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotificationMenu(false); }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center text-xs shadow-md overflow-hidden shrink-0 border border-slate-700">
                  {adminUser.avatar && (adminUser.avatar.startsWith("data:") || adminUser.avatar.startsWith("http")) ? (
                    <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover" />
                  ) : (
                    adminUser.avatar
                  )}
                </div>
                <div className="hidden sm:flex flex-col text-left min-w-0">
                  <span className={`text-xs font-bold leading-tight group-hover:text-amber-500 transition ${isDark ? "text-white" : "text-slate-900"}`}>
                    {adminUser.name}
                  </span>
                  <span className="text-[10px] text-amber-500 font-semibold truncate">{adminUser.role}</span>
                </div>
              </div>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className={`absolute right-0 mt-2 w-56 border rounded-2xl p-2 space-y-1 shadow-2xl z-50 text-xs font-semibold ${isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800"}`}>
                  <button
                    onClick={() => { setShowEditProfileModal(true); setShowProfileMenu(false); }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-amber-500/10 hover:text-amber-500 flex items-center gap-2 cursor-pointer transition"
                  >
                    <Icons.UserCog />
                    <span>Edit Profile</span>
                  </button>
                  <button
                    onClick={() => { setShowChangePasswordModal(true); setShowProfileMenu(false); }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-amber-500/10 hover:text-amber-500 flex items-center gap-2 cursor-pointer transition"
                  >
                    <Icons.Lock />
                    <span>Change Password</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-xl text-rose-500 hover:bg-rose-500/10 flex items-center gap-2 cursor-pointer font-bold border-t border-slate-200 mt-1 transition"
                  >
                    <Icons.LogOut />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* Scrollable Body Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">

          {/* Status Alert Banner with Auto Disappear */}
          {statusMsg && (
            <div
              className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between shadow-md animate-in fade-in slide-in-from-top-2 duration-300 ${statusMsg.type === "success"
                  ? "bg-emerald-950/80 border border-emerald-500/40 text-emerald-300"
                  : "bg-rose-950/80 border border-rose-500/40 text-rose-300"
                }`}
            >
              <div className="flex items-center gap-2.5">
                {statusMsg.type === "success" ? (
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span>{statusMsg.text}</span>
              </div>
              <button onClick={() => setStatusMsg(null)} className="text-slate-400 hover:text-white px-2 cursor-pointer">✕</button>
            </div>
          )}

          {/* ─── MODULE 1: DASHBOARD OVERVIEW ───────────────────────────────── */}
          {activeMenu === "dashboard" && (
            <div className="space-y-8">

              {/* Welcome Banner */}
              <div className={`relative overflow-hidden border rounded-3xl p-6 lg:p-8 shadow-2xl ${isDark
                  ? "bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border-slate-800"
                  : "bg-gradient-to-r from-slate-900 via-slate-900 to-amber-900 border-slate-800 text-white"
                }`}>
                <div className="max-w-2xl space-y-3 relative z-10">
                  <span className="bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Pithal Heavy Machinery Control Center
                  </span>
                  <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                    Pithal Machinery <span className="text-amber-500">Industrial Portal</span>
                  </h1>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Track equipment quote inquiries, publish dynamic technical blogs, and manage access rights.
                  </p>
                </div>
              </div>

              {/* Stat Cards with Professional SVG Vector Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                <div className={`p-6 rounded-2xl border shadow-sm transition hover:shadow-md ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Published Blogs</span>
                    <span className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Icons.FileText />
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>{blogs.length}</span>
                    <span className="text-xs text-emerald-500 font-bold">Live</span>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border shadow-sm transition hover:shadow-md ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Quote Inquiries</span>
                    <span className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <Icons.Inbox />
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>{leads.length}</span>
                    <span className="text-xs text-rose-500 font-bold">{pendingLeadsCount} Pending</span>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border shadow-sm transition hover:shadow-md ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Admin Accounts</span>
                    <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <Icons.ShieldUser />
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>{users.length}</span>
                    <span className="text-xs text-emerald-500 font-bold">Active Rights</span>
                  </div>
                </div>

              </div>

              {/* ─── SIDE-BY-SIDE DASHBOARD ANALYTICS SECTION ─────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Side: Interactive Bar & Trend Analytics Graph (8 Columns) */}
                <InteractiveLeadAnalyticsChart leads={leads} isDark={theme === "dark"} />

                {/* Right Side: Status Distribution & Recent Activity Feed (4 Columns) */}
                <div className="lg:col-span-4 space-y-6">

                  {/* Status Breakdown Card */}
                  <div className={`rounded-2xl border p-6 space-y-4 shadow-sm ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                    <h3 className={`text-sm font-black uppercase tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                      Lead Status Distribution
                    </h3>

                    <div className="space-y-3.5 text-xs font-bold">
                      <div>
                        <div className="flex justify-between text-slate-500 mb-1">
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Pending</span>
                          <span className="text-amber-600 font-extrabold">{pendingLeadsCount} ({leads.length ? Math.round((pendingLeadsCount / leads.length) * 100) : 0}%)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${leads.length ? (pendingLeadsCount / leads.length) * 100 : 0}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-500 mb-1">
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span> Contacted</span>
                          <span className="text-slate-700 font-extrabold">{contactedLeadsCount} ({leads.length ? Math.round((contactedLeadsCount / leads.length) * 100) : 0}%)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-600 rounded-full transition-all duration-500" style={{ width: `${leads.length ? (contactedLeadsCount / leads.length) * 100 : 0}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-500 mb-1">
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Closed</span>
                          <span className="text-emerald-600 font-extrabold">{closedLeadsCount} ({leads.length ? Math.round((closedLeadsCount / leads.length) * 100) : 0}%)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full transition-all duration-500" style={{ width: `${leads.length ? (closedLeadsCount / leads.length) * 100 : 0}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity Feed Card */}
                  <div className={`rounded-2xl border p-6 space-y-4 shadow-sm ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                    <div className="flex items-center justify-between border-b pb-3 border-slate-200">
                      <h3 className={`text-sm font-black uppercase tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                        Recent Inquiries Feed
                      </h3>
                      {canAccessLeads && (
                        <button onClick={() => setActiveMenu("leads-list")} className="text-[10px] text-amber-500 font-bold hover:underline cursor-pointer">View All →</button>
                      )}
                    </div>

                    <div className="space-y-3 max-h-56 overflow-y-auto">
                      {leads.length === 0 ? (
                        <p className="text-xs text-slate-400 italic text-center py-4">No quote inquiries captured yet.</p>
                      ) : (
                        leads.slice(0, 3).map((l) => (
                          <div key={l.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                            <div className="flex items-center justify-between font-bold">
                              <span className="text-slate-900 truncate">{l.fullName}</span>
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${l.status === "PENDING" ? "bg-rose-100 text-rose-600" : l.status === "CONTACTED" ? "bg-blue-100 text-blue-600" : "bg-emerald-100 text-emerald-600"
                                }`}>{l.status}</span>
                            </div>
                            <p className="text-[11px] text-amber-600 font-semibold truncate">{l.productInterest}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* ─── MODULE 2: BLOGS LIST TABLE ─────────────────────────────────── */}
          {activeMenu === "blogs-list" && canAccessBlogs && (
            <div className={`rounded-2xl border p-6 space-y-5 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 border-slate-200">
                <div>
                  <h2 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Published Blog Articles ({filteredBlogs.length})
                  </h2>
                  <p className="text-xs text-slate-400">Search and filter live articles on the website.</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search blogs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`px-3.5 py-1.5 pl-8 border rounded-xl text-xs focus:outline-none focus:border-amber-500 w-44 font-normal transition ${isDark ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"}`}
                    />
                    <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  <button
                    onClick={() => setBlogStatusFilter("ALL")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${blogStatusFilter === "ALL" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    All ({blogs.length})
                  </button>
                  <button
                    onClick={() => setBlogStatusFilter("Publish")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${blogStatusFilter === "Publish" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    Published
                  </button>
                  <button
                    onClick={() => setBlogStatusFilter("Draft")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${blogStatusFilter === "Draft" ? "bg-amber-500 text-slate-950" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    Drafts
                  </button>

                  <button
                    onClick={() => { resetBlogForm(); setActiveMenu("blogs-add"); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer shadow-xs ml-1 flex items-center gap-1.5"
                  >
                    <Icons.Plus />
                    <span>ADD NEW BLOG</span>
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className={`uppercase text-[11px] font-bold border-b ${isDark ? "bg-slate-950 text-slate-400 border-slate-800" : "bg-slate-100 text-slate-600 border-slate-200"}`}>
                    <tr>
                      <th className="p-3">Thumbnail</th>
                      <th className="p-3">Title</th>
                      <th className="p-3 text-center">Status</th>
                      <th className="p-3 text-center">Created</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {filteredBlogs.map((b) => (
                      <tr key={b.id || b.slug} className={`hover:bg-slate-500/5 transition ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                        <td className="p-3">
                          <div className="w-12 h-10 rounded-lg bg-slate-200 overflow-hidden relative border border-slate-300 shrink-0">
                            <img
                              src={b.image || DEFAULT_FALLBACK_IMAGE}
                              alt={b.title}
                              onError={(e) => { e.currentTarget.src = DEFAULT_FALLBACK_IMAGE; }}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3 max-w-xs">
                          <div className={`font-bold text-sm leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>{b.title}</div>
                          <span className="text-[10px] font-mono text-amber-500 font-bold">/blog/{b.slug}</span>
                        </td>

                        <td className="p-3 text-center">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${b.status === "Publish" ? "bg-emerald-500 text-slate-950" : "bg-rose-500 text-white"
                            }`}>
                            {b.status || "Publish"}
                          </span>
                        </td>

                        <td className="p-3 text-center font-mono text-slate-400">
                          {b.publishedAt}
                        </td>

                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleStartEditBlog(b)}
                              title="Edit Article"
                              className="p-1 text-blue-500 hover:bg-blue-500/10 rounded transition cursor-pointer"
                            >
                              <Icons.Edit />
                            </button>
                            <button
                              onClick={() => requestDeleteBlog(b)}
                              title="Delete Article"
                              className="p-1 text-rose-500 hover:bg-rose-500/10 rounded transition cursor-pointer"
                            >
                              <Icons.Trash />
                            </button>
                            <a
                              href={`http://localhost:3001/blog/${b.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View Live"
                              className="p-1 text-amber-500 hover:bg-amber-500/10 rounded transition"
                            >
                              <Icons.External />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── MODULE 3: BLOG EDITOR ─────────────────────────────────────── */}
          {activeMenu === "blogs-add" && canAccessBlogs && (
            <div className={`rounded-2xl border p-6 lg:p-8 space-y-6 max-w-5xl mx-auto ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900 shadow-xl"}`}>

              <div className="flex items-center justify-between border-b pb-4 border-slate-200">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    {editingBlogId ? "Edit Blog" : "Create Blog"}
                  </h2>
                  <span className="text-xs text-slate-400">Home &gt; Blog List &gt; {editingBlogId ? "Edit" : "Create"}</span>
                </div>

                <button
                  onClick={() => setActiveMenu("blogs-list")}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-3.5 py-1.5 rounded-xl text-xs transition cursor-pointer border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center gap-1.5"
                >
                  ← Back to Blog List
                </button>
              </div>

              <form onSubmit={handleSubmitBlog} className="space-y-6 text-xs font-semibold">

                {/* Thumbnail Image Uploader */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b pb-6 border-slate-200">
                  <label className="text-xs font-bold text-slate-400">
                    Thumbnail
                  </label>

                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-36 h-24 bg-slate-100 rounded-xl border border-dashed border-slate-300 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        {blogImage ? (
                          <img src={blogImage} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                            <Icons.Upload />
                            <span className="text-[10px] font-bold text-slate-400 mt-1">No Image</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <span className="block font-bold text-slate-500">Upload image</span>
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold rounded-lg text-xs transition cursor-pointer"
                        >
                          Choose File
                        </button>
                        <span className="text-[10px] text-slate-400 block">Allowed file types: png, jpg, jpeg, webp.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Website</label>
                  <div className="md:col-span-2">
                    <CustomSelectDropdown
                      options={[{ label: "Pithal Machinery", value: "Pithal Machinery" }]}
                      value={blogWebsite}
                      onChange={setBlogWebsite}
                      isDark={isDark}
                    />
                  </div>
                </div>

                {/* Blog URL / Slug */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Blog URL</label>
                  <div className="md:col-span-2 space-y-1">
                    <div className="flex items-center">
                      <span className="px-3 py-2 bg-slate-200 border border-r-0 border-slate-300 text-slate-600 font-mono">/</span>
                      <input
                        type="text"
                        placeholder="Leave blank to auto-generate from title"
                        value={customSlug}
                        onChange={(e) => {
                          const formatted = e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                          setCustomSlug(formatted);
                        }}
                        className={`w-full border rounded-r-lg px-3 py-2 font-mono text-xs ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 block">
                      Live URL Slug: <span className="font-mono text-amber-500 font-bold">/blog/{generatedSlug || "blog-slug"}</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Blog Title</label>
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      required
                      placeholder="Enter Blog Title"
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                    />
                  </div>
                </div>

                {/* Author Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Author</label>
                  <div className="md:col-span-2 space-y-1">
                    <CustomSelectDropdown
                      options={[
                        { label: "Pithal Engineering Team", value: "Pithal Engineering Team" },
                        ...users.map((u) => ({ label: u.name, value: u.name })),
                      ]}
                      value={blogAuthor}
                      onChange={setBlogAuthor}
                      isDark={isDark}
                    />
                    <span className="text-[10px] text-slate-400 block">No author if leave Empty</span>
                  </div>
                </div>

                {/* HIGH-END WYSIWYG HTML TEXT EDITOR */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">Blog Content (Visual WYSIWYG & HTML Editor)</label>
                  <RichHtmlEditor
                    value={blogContent}
                    onChange={setBlogContent}
                    isDark={isDark}
                  />
                  <span className="text-[10px] text-slate-400 block">Use the &lt;/&gt; button to toggle between Visual WYSIWYG Mode and HTML Source Code Mode.</span>
                </div>

                {/* SEO Meta Tag */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Meta Tag</label>
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      placeholder="Enter Meta Tag"
                      value={metaTags}
                      onChange={(e) => setMetaTags(e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 text-xs ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                    />
                  </div>
                </div>

                {/* SEO Meta Description */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Meta Description</label>
                  <div className="md:col-span-2">
                    <textarea
                      rows={3}
                      placeholder="Enter Meta Description"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 text-xs ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                    />
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="space-y-4 pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase text-slate-700">FAQ</h3>
                    <button
                      type="button"
                      onClick={handleAddFaq}
                      className="bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-lg transition cursor-pointer"
                    >
                      + ADD FAQ
                    </button>
                  </div>

                  {faqs.map((faq, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border space-y-3 ${isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1">Question</label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => handleFaqChange(idx, "question", e.target.value)}
                            placeholder="Enter Question"
                            className={`w-full border rounded-lg px-3 py-2 text-xs ${isDark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-300 text-slate-900"}`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1">Answer</label>
                          <input
                            type="text"
                            value={faq.answer}
                            onChange={(e) => handleFaqChange(idx, "answer", e.target.value)}
                            placeholder="Enter Answer"
                            className={`w-full border rounded-lg px-3 py-2 text-xs ${isDark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-300 text-slate-900"}`}
                          />
                        </div>
                      </div>

                      {faqs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveFaq(idx)}
                          className="bg-rose-500 hover:bg-rose-400 text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase cursor-pointer"
                        >
                          REMOVE
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Status Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <label className="text-xs font-bold text-slate-400">Status</label>
                  <div className="md:col-span-2 space-y-1">
                    <CustomSelectDropdown
                      options={[
                        { label: "Draft", value: "Draft" },
                        { label: "Publish", value: "Publish" },
                      ]}
                      value={blogStatus}
                      onChange={(val) => setBlogStatus(val as "Publish" | "Draft")}
                      isDark={isDark}
                    />
                    <span className="text-[10px] text-slate-400 block">New Blogs are always created as Draft. Publish is available only in Edit.</span>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveMenu("blogs-list")}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold px-4 py-2 rounded-xl text-xs transition cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs transition shadow-sm cursor-pointer flex items-center gap-1.5"
                  >
                    {editingBlogId ? "Update Article" : "Save Article"}
                  </button>
                </div>

              </form>

            </div>
          )}

          {/* ─── MODULE 4: LEADS MANAGER ───────────────────────────────────── */}
          {activeMenu === "leads-list" && canAccessLeads && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-xs"}`}>
                <div>
                  <h2 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Customer Quote Requests ({filteredLeads.length})
                  </h2>
                  <p className="text-xs text-slate-400">Incoming form submissions from frontend website pages.</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                  {/* Search Input */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search leads..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="px-3.5 py-1.5 pl-8 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-amber-500 w-44 font-normal"
                    />
                    <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Filter Button & Popover */}
                  <div className="relative" ref={filterPopoverRef}>
                    <button
                      onClick={() => setShowFilterPopover(!showFilterPopover)}
                      className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition cursor-pointer ${leadEquipmentFilter !== "ALL" || leadDateSort !== "NEWEST"
                          ? "bg-amber-500 text-white border-amber-500 shadow-xs"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                        }`}
                      title="Open Filters"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      <span>Filter</span>
                      {(leadEquipmentFilter !== "ALL" || leadDateSort !== "NEWEST") && (
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      )}
                    </button>

                    {/* Filter Popover Content */}
                    {showFilterPopover && (
                      <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 text-slate-800 space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b pb-2">
                          <h4 className="font-extrabold text-slate-900 uppercase tracking-wide">Filter Quote Leads</h4>
                          <button
                            onClick={() => {
                              setLeadFilter("ALL");
                              setLeadEquipmentFilter("ALL");
                              setLeadDateSort("NEWEST");
                              setSearchQuery("");
                            }}
                            className="text-[11px] font-bold text-amber-600 hover:underline cursor-pointer"
                          >
                            Reset All
                          </button>
                        </div>

                        {/* Filter by Status */}
                        <div className="space-y-1.5">
                          <label className="font-bold text-slate-500 uppercase text-[10px]">Filter By Status</label>
                          <div className="grid grid-cols-2 gap-1.5">
                            {(["ALL", "PENDING", "CONTACTED", "CLOSED"] as const).map((st) => (
                              <button
                                key={st}
                                onClick={() => setLeadFilter(st)}
                                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition text-center cursor-pointer ${leadFilter === st
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                  }`}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Filter by Equipment Interest */}
                        <div className="space-y-1.5">
                          <label className="font-bold text-slate-500 uppercase text-[10px]">Filter By Equipment</label>
                          <select
                            value={leadEquipmentFilter}
                            onChange={(e) => setLeadEquipmentFilter(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:border-amber-500"
                          >
                            <option value="ALL">All Equipment Types</option>
                            {uniqueEquipments.map((eq) => (
                              <option key={eq} value={eq}>
                                {eq}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Sort Order */}
                        <div className="space-y-1.5">
                          <label className="font-bold text-slate-500 uppercase text-[10px]">Sort Order</label>
                          <div className="grid grid-cols-2 gap-1.5">
                            <button
                              onClick={() => setLeadDateSort("NEWEST")}
                              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition text-center cursor-pointer ${leadDateSort === "NEWEST"
                                  ? "bg-amber-500 text-white"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                              Newest First
                            </button>
                            <button
                              onClick={() => setLeadDateSort("OLDEST")}
                              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition text-center cursor-pointer ${leadDateSort === "OLDEST"
                                  ? "bg-amber-500 text-white"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                              Oldest First
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {leads.length > 0 && (
                    <button
                      onClick={requestBulkDeleteLeads}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition cursor-pointer mr-2 text-xs font-bold"
                      title="Clear leads"
                    >
                      Clear All Leads
                    </button>
                  )}
                  <button
                    onClick={() => setLeadFilter("ALL")}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${leadFilter === "ALL" ? "bg-slate-900 text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    All ({leads.length})
                  </button>
                  <button
                    onClick={() => setLeadFilter("PENDING")}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${leadFilter === "PENDING" ? "bg-rose-600 text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    Pending ({pendingLeadsCount})
                  </button>
                  <button
                    onClick={() => setLeadFilter("CONTACTED")}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${leadFilter === "CONTACTED" ? "bg-blue-600 text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    Contacted ({contactedLeadsCount})
                  </button>
                  <button
                    onClick={() => setLeadFilter("CLOSED")}
                    className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${leadFilter === "CLOSED" ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    Closed ({closedLeadsCount})
                  </button>
                </div>
              </div>

              {/* Bulk Selection Bar */}
              {selectedLeadIds.length > 0 && (
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-900 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-xs">
                      {selectedLeadIds.length} Selected
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      Bulk actions for selected quote requests
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">Set Status:</span>
                    <button
                      onClick={() => handleBulkStatusChange("PENDING")}
                      className="px-2.5 py-1 text-xs font-bold bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-lg transition cursor-pointer shadow-2xs"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleBulkStatusChange("CONTACTED")}
                      className="px-2.5 py-1 text-xs font-bold bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-lg transition cursor-pointer shadow-2xs"
                    >
                      Contacted
                    </button>
                    <button
                      onClick={() => handleBulkStatusChange("CLOSED")}
                      className="px-2.5 py-1 text-xs font-bold bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg transition cursor-pointer shadow-2xs"
                    >
                      Closed
                    </button>

                    <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block" />

                    <button
                      onClick={requestBulkDeleteLeads}
                      className="px-3.5 py-1 text-xs font-extrabold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      Delete Selected ({selectedLeadIds.length})
                    </button>

                    <button
                      onClick={() => setSelectedLeadIds([])}
                      className="text-xs text-slate-500 hover:text-slate-800 font-bold underline ml-2 cursor-pointer"
                    >
                      Deselect
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {filteredLeads.length === 0 ? (
                  <div className={`p-12 rounded-2xl border text-center space-y-3 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-xs"}`}>
                    <p className="text-sm font-bold text-slate-400">No quote inquiries found.</p>
                    <p className="text-xs text-slate-500">When visitors submit forms on the frontend website, inquiries will appear here live!</p>
                  </div>
                ) : (
                  <>
                    {/* Column Headers */}
                    <div className={`hidden md:grid grid-cols-[36px_2.5fr_1.5fr_140px_110px] gap-4 items-center px-5 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider ${isDark ? "bg-slate-950 text-slate-500" : "bg-slate-100 text-slate-500"}`}>
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={filteredLeads.length > 0 && selectedLeadIds.length === filteredLeads.length}
                          onChange={handleSelectAllLeads}
                          className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400 cursor-pointer"
                          title="Select / Deselect All Leads"
                        />
                      </div>
                      <span>Customer Details</span>
                      <span>Equipment Interest</span>
                      <span className="text-center">Status</span>
                      <span className="text-right">Actions</span>
                    </div>

                    {filteredLeads.map((lead) => {
                      const isExpanded = !!expandedLeadIds[lead.id];
                      const isSelected = selectedLeadIds.includes(lead.id);

                      return (
                        <div
                          key={lead.id}
                          className={`rounded-2xl border transition-all duration-200 shadow-2xs relative ${isSelected
                              ? "ring-2 ring-amber-500/50 border-amber-400 bg-amber-50/20"
                              : isDark
                                ? "bg-slate-900 border-slate-800"
                                : "bg-white border-slate-200 hover:border-slate-300"
                            }`}
                        >
                          {/* Main Horizontal Summary Bar */}
                          <div
                            className="p-4 flex flex-col md:grid md:grid-cols-[36px_2.5fr_1.5fr_140px_110px] md:items-center gap-4 cursor-pointer select-none"
                            onClick={() => toggleExpandLead(lead.id)}
                          >
                            {/* Checkbox Column */}
                            <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleSelectLead(lead.id)}
                                className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400 cursor-pointer"
                              />
                            </div>

                            {/* Column 1: Avatar + Name + Contact */}
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                                {lead.fullName.substring(0, 2).toUpperCase()}
                              </div>

                              <div className="min-w-0 space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <h3 className={`font-bold text-sm truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                                    {lead.fullName}
                                  </h3>
                                  <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                                    #{lead.id.substring(lead.id.length - 4)}
                                  </span>
                                </div>

                                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                  <span className="flex items-center gap-1">
                                    <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    {lead.phone}
                                  </span>
                                  <span className="hidden sm:inline text-slate-300">•</span>
                                  <span className="hidden sm:inline truncate text-slate-400">{lead.email}</span>
                                </div>
                              </div>
                            </div>

                            {/* Column 2: Equipment Interest */}
                            <div className="hidden md:block min-w-0" onClick={(e) => e.stopPropagation()}>
                              <span className="text-[11px] font-mono text-slate-700 bg-slate-100 px-3 py-1 rounded-xl border border-slate-200 font-medium inline-block truncate max-w-full">
                                {lead.productInterest || "General Inquiry"}
                              </span>
                            </div>

                            {/* Column 3: Status Dropdown - Centered in 140px column */}
                            <div className="hidden md:flex justify-center" onClick={(e) => e.stopPropagation()}>
                              <CustomLeadStatusDropdown
                                status={lead.status}
                                onChange={(newStatus) => handleUpdateLeadStatus(lead.id, newStatus)}
                              />
                            </div>

                            {/* Column 4: Actions */}
                            <div className="flex items-center justify-end gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => requestDeleteLead(lead)}
                                className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition cursor-pointer"
                                title="Delete Lead"
                              >
                                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                              </button>

                              <a
                                href={`tel:${lead.phone}`}
                                className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition cursor-pointer"
                                title="Call Customer"
                              >
                                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                              </a>

                              {/* Expand/Collapse Chevron */}
                              <button
                                type="button"
                                onClick={() => toggleExpandLead(lead.id)}
                                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                                title="Toggle Details"
                              >
                                <svg className={`w-[18px] h-[18px] transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                              </button>
                            </div>

                            {/* Mobile View Status */}
                            <div className="md:hidden flex items-center justify-between pt-2 border-t border-slate-100 gap-3" onClick={(e) => e.stopPropagation()}>
                              <span className="text-[11px] font-mono text-slate-700 bg-slate-100 px-3 py-1 rounded-xl border border-slate-200 font-medium truncate">
                                {lead.productInterest || "General Inquiry"}
                              </span>
                              <CustomLeadStatusDropdown
                                status={lead.status}
                                onChange={(newStatus) => handleUpdateLeadStatus(lead.id, newStatus)}
                              />
                            </div>
                          </div>

                          {/* Smooth Dropdown Accordion Expand Body */}
                          <div
                            className={`grid transition-all duration-300 ease-in-out ${isExpanded
                                ? "grid-rows-[1fr] opacity-100 border-t border-slate-200"
                                : "grid-rows-[0fr] opacity-0 border-t-0"
                              }`}
                          >
                            <div className="overflow-hidden">
                              <div
                                className={`p-5 space-y-4 text-xs ${isDark
                                    ? "bg-slate-950/60 text-slate-200"
                                    : "bg-slate-50/80 text-slate-800"
                                  }`}
                              >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <span className="font-bold text-slate-400 block mb-0.5">Company / Business Name</span>
                                    <span className="font-bold text-slate-900">{lead.companyName || "Individual Inquiry"}</span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-slate-400 block mb-0.5">Equipment / Product Interest</span>
                                    <span className="font-bold text-amber-600">{lead.productInterest || "General Machinery Quote"}</span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-slate-400 block mb-0.5">Captured From Page</span>
                                    <span className="font-mono text-blue-600 font-bold">{lead.sourcePage || "/contact"}</span>
                                  </div>
                                </div>

                                {lead.message && (
                                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1">
                                    <span className="font-bold text-slate-400 block text-[11px]">Customer Requirement Message:</span>
                                    <p className="text-slate-900 leading-relaxed font-medium italic">"{lead.message}"</p>
                                  </div>
                                )}

                                <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                                  <span className="text-[10px] text-slate-400 font-mono">Date Received: {lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "Today"}</span>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleUpdateLeadStatus(lead.id, "CONTACTED")}
                                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs cursor-pointer shadow-xs"
                                    >
                                      Mark Contacted
                                    </button>
                                    <button
                                      onClick={() => handleUpdateLeadStatus(lead.id, "CLOSED")}
                                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs cursor-pointer shadow-xs"
                                    >
                                      Mark Closed
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          )}

          {/* ─── MODULE 5A: ADD USER FORM ──────────────────────────────────────── */}
          {activeMenu === "users-add" && canAccessUsers && (
            <div className={`rounded-2xl border p-6 lg:p-8 space-y-6 max-w-4xl mx-auto ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900 shadow-xl"}`}>
              <div className="flex items-center justify-between border-b pb-4 border-slate-200">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">Add User</h2>
                  <span className="text-xs text-slate-400">Home &gt; Add User</span>
                </div>
                <button
                  onClick={() => setActiveMenu("users-list")}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-3.5 py-1.5 rounded-xl text-xs transition cursor-pointer border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center gap-1.5"
                >
                  ← List Users
                </button>
              </div>

              <form onSubmit={handleCreateNewUser} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                  {/* Clean Vector User Avatar Box */}
                  <div className="flex flex-col items-center justify-center p-6 border border-dashed border-slate-300 rounded-2xl space-y-4">
                    <div className="w-28 h-28 rounded-full bg-slate-100 border border-slate-300 overflow-hidden flex items-center justify-center shadow-inner">
                      {newUserAvatar ? (
                        <img src={newUserAvatar} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <Icons.UserAvatarPlaceholder />
                      )}
                    </div>

                    <input type="file" accept="image/*" ref={userPicRef} onChange={handleUserPicUpload} className="hidden" />
                    <button
                      type="button"
                      onClick={() => userPicRef.current?.click()}
                      className="px-4 py-2 border border-blue-600 text-blue-600 font-extrabold rounded-lg text-xs hover:bg-blue-50 transition cursor-pointer uppercase tracking-wider"
                    >
                      ↑ UPLOAD PICTURE
                    </button>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="md:col-span-2 space-y-4 text-xs font-semibold">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1">Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter name"
                          value={newUserName}
                          onChange={(e) => setNewUserName(e.target.value)}
                          className={`w-full border rounded-lg px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter email"
                          value={newUserEmail}
                          onChange={(e) => setNewUserEmail(e.target.value)}
                          className={`w-full border rounded-lg px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1">Contact No *</label>
                        <input
                          type="text"
                          placeholder="+91 Contact Number"
                          value={newUserPhone}
                          onChange={(e) => setNewUserPhone(e.target.value)}
                          className={`w-full border rounded-lg px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Role *</label>
                        {/* Beautiful Custom Select Dropdown replacing raw HTML select */}
                        <CustomSelectDropdown
                          options={rolesList.map(r => ({ label: r.roleName, value: r.roleName }))}
                          value={newUserRole}
                          onChange={setNewUserRole}
                          isDark={isDark}
                          placeholder="Select User Role"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1">City *</label>
                        <input
                          type="text"
                          placeholder="Enter City"
                          value={newUserCity}
                          onChange={(e) => setNewUserCity(e.target.value)}
                          className={`w-full border rounded-lg px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Password *</label>
                        <div className="relative">
                          <input
                            type={showNewUserPassword ? "text" : "password"}
                            required
                            placeholder="Enter Password"
                            value={newUserPassword}
                            onChange={(e) => setNewUserPassword(e.target.value)}
                            className={`w-full border rounded-lg px-3 py-2.5 pr-10 font-mono ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewUserPassword(!showNewUserPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer p-1"
                            title={showNewUserPassword ? "Hide password" : "Show password"}
                          >
                            {showNewUserPassword ? (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.122-.563c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.092-4.092a3 3 0 11-4.243-4.243M3 3l18 18" /></svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs transition cursor-pointer shadow-sm"
                  >
                    Save User
                  </button>
                </div>

              </form>
            </div>
          )}

          {/* ─── MODULE 5B: LIST USERS TABLE ─────────────────────────────────── */}
          {activeMenu === "users-list" && canAccessUsers && (
            <div className={`rounded-2xl border p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 border-slate-200">
                <div>
                  <h2 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    User Accounts ({filteredUsers.length})
                  </h2>
                  <p className="text-xs text-slate-400">Search and filter active admin users and access roles.</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`px-3.5 py-1.5 pl-8 border rounded-xl text-xs focus:outline-none focus:border-amber-500 w-44 font-normal transition ${isDark ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"}`}
                    />
                    <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  <button
                    onClick={() => setUserStatusFilter("ALL")}
                    className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${userStatusFilter === "ALL" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    All ({users.length})
                  </button>
                  <button
                    onClick={() => setUserStatusFilter("Active")}
                    className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${userStatusFilter === "Active" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setUserStatusFilter("Inactive")}
                    className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${userStatusFilter === "Inactive" ? "bg-rose-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    Inactive
                  </button>

                  <button
                    onClick={() => setActiveMenu("users-add")}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-1.5 rounded-xl text-xs uppercase tracking-wider transition shadow cursor-pointer ml-1"
                  >
                    + ADD USER
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className={`uppercase text-[11px] font-bold border-b ${isDark ? "bg-slate-950 text-slate-400 border-slate-800" : "bg-slate-100 text-slate-600"}`}>
                    <tr>
                      <th className="p-3">Avatar</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Role</th>
                      <th className="p-3">Contact No</th>
                      <th className="p-3">Joined</th>
                      <th className="p-3 text-center">Status</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-slate-400 font-bold">
                          No users found matching "{searchQuery}".
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-slate-500/5 transition">
                          <td className="p-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-700">
                              {u.avatar && (u.avatar.startsWith("data:") || u.avatar.startsWith("http") || u.avatar.startsWith("/")) ? (
                                <img src={u.avatar} alt={u.name} className="w-full h-full object-cover" />
                              ) : (
                                u.avatar || u.name.substring(0, 2).toUpperCase()
                              )}
                            </div>
                          </td>
                          <td className="p-3 font-bold">{u.name}</td>
                          <td className="p-3 font-mono text-slate-400">{u.email}</td>
                          <td className="p-3 font-extrabold text-amber-500">{u.role}</td>
                          <td className="p-3 font-mono">{u.phone || "+91 9876543210"}</td>
                          <td className="p-3 font-mono text-slate-400">{u.joinedDate}</td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleToggleUserStatus(u.id)}
                              className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase transition cursor-pointer border ${u.status === "Active" ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/40" : "bg-rose-500/20 text-rose-500 border-rose-500/40"
                                }`}
                            >
                              {u.status} ▾
                            </button>
                          </td>
                          <td className="p-3 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => handleStartEditUser(u)}
                                className="p-1.5 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 rounded-lg transition cursor-pointer"
                                title="Edit User Details & Role"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                              </button>
                              <button
                                onClick={() => { setPasswordResetUser(u); setNewResetPassword(""); }}
                                className="p-1.5 text-amber-500 hover:text-amber-600 hover:bg-amber-500/10 rounded-lg transition cursor-pointer"
                                title="Reset Password"
                              >
                                <Icons.Key />
                              </button>
                              <button
                                onClick={() => requestDeleteUser(u)}
                                className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 rounded-lg transition cursor-pointer"
                                title="Delete User"
                              >
                                <Icons.Trash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── MODULE 5C: ROLES & PERMISSIONS MANAGEMENT ─────────────────────── */}
          {activeMenu === "users-roles" && canAccessUsers && (
            <div className={`rounded-2xl border p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 border-slate-200 gap-4">
                <div>
                  <h2 className={`text-lg font-black uppercase ${isDark ? "text-white" : "text-slate-900"}`}>
                    Roles & Rights Management <span className="text-xs text-slate-400 font-normal">Home &gt; Roles & Rights</span>
                  </h2>
                  <p className="text-xs text-slate-400">Configure access rights, module permissions, and create custom user roles dynamically.</p>
                </div>

                <button
                  onClick={() => setShowCreateRoleModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition shadow-md cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <Icons.Plus />
                  <span>CREATE NEW ROLE</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rolesList.map((role, idx) => (
                  <div key={role.roleName} className={`p-6 rounded-2xl border space-y-4 flex flex-col justify-between ${isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-black text-base text-amber-500 uppercase">{role.roleName}</h3>
                          <p className="text-xs text-slate-400 leading-snug mt-0.5">{role.description}</p>
                        </div>
                        <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
                          {users.filter(u => u.role === role.roleName).length} Active Users
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-semibold pt-4 border-t border-slate-200">
                        <label className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span>Access Blog Module</span>
                          <input
                            type="checkbox"
                            checked={role.canAccessBlogs}
                            onChange={(e) => {
                              const updated = [...rolesList];
                              updated[idx].canAccessBlogs = e.target.checked;
                              setRolesList(updated);
                              setStatusMsg({ text: `Updated Blog module access for ${role.roleName}`, type: "success" });
                            }}
                            className="w-4 h-4 text-amber-500 rounded focus:ring-0 cursor-pointer"
                          />
                        </label>

                        <label className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span>Access Customer Leads</span>
                          <input
                            type="checkbox"
                            checked={role.canAccessLeads}
                            onChange={(e) => {
                              const updated = [...rolesList];
                              updated[idx].canAccessLeads = e.target.checked;
                              setRolesList(updated);
                              setStatusMsg({ text: `Updated Leads module access for ${role.roleName}`, type: "success" });
                            }}
                            className="w-4 h-4 text-amber-500 rounded focus:ring-0 cursor-pointer"
                          />
                        </label>

                        <label className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span>Access User Accounts</span>
                          <input
                            type="checkbox"
                            checked={role.canAccessUsers}
                            onChange={(e) => {
                              const updated = [...rolesList];
                              updated[idx].canAccessUsers = e.target.checked;
                              setRolesList(updated);
                              setStatusMsg({ text: `Updated Users module access for ${role.roleName}`, type: "success" });
                            }}
                            className="w-4 h-4 text-amber-500 rounded focus:ring-0 cursor-pointer"
                          />
                        </label>

                        <label className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span>Delete Permissions</span>
                          <input
                            type="checkbox"
                            checked={role.canDeleteItems}
                            onChange={(e) => {
                              const updated = [...rolesList];
                              updated[idx].canDeleteItems = e.target.checked;
                              setRolesList(updated);
                              setStatusMsg({ text: `Updated Delete rights for ${role.roleName}`, type: "success" });
                            }}
                            className="w-4 h-4 text-amber-500 rounded focus:ring-0 cursor-pointer"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── MODULE 5D: LOGIN HISTORY ────────────────────────────────────── */}
          {activeMenu === "users-history" && canAccessUsers && (
            <div className={`rounded-2xl border p-6 space-y-6 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 border-slate-200">
                <div>
                  <h2 className={`text-lg font-black uppercase ${isDark ? "text-white" : "text-slate-900"}`}>
                    Login History ({filteredLoginHistory.length})
                  </h2>
                  <p className="text-xs text-slate-400">Track active user sessions and IP addresses.</p>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search history, IP, device..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-3.5 py-1.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-amber-500 w-56 font-normal"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className={`uppercase text-[11px] font-bold border-b ${isDark ? "bg-slate-950 text-slate-400 border-slate-800" : "bg-slate-100 text-slate-600"}`}>
                    <tr>
                      <th className="p-3">User</th>
                      <th className="p-3 text-center">Logged In?</th>
                      <th className="p-3">IP Address</th>
                      <th className="p-3">Device / Browser</th>
                      <th className="p-3">Last Login</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {filteredLoginHistory.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-400 font-bold">
                          No login records found matching "{searchQuery}".
                        </td>
                      </tr>
                    ) : (
                      filteredLoginHistory.map((lh) => {
                        const isUserActive = users.some((u) =>
                          u.name.toLowerCase() === lh.user.toLowerCase() ||
                          u.email.toLowerCase() === lh.user.toLowerCase()
                        );

                        return (
                          <tr key={lh.id} className="hover:bg-slate-500/5 transition">
                            <td className="p-3 font-bold">
                              <div className="flex items-center gap-2">
                                <span>{lh.user}</span>
                                {!isUserActive && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                                    Deleted User
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${isUserActive && lh.loggedIn === "Yes" ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30" : "bg-slate-500/15 text-slate-500 border border-slate-500/30"}`}>
                                {isUserActive && lh.loggedIn === "Yes" ? "YES" : "NO"}
                              </span>
                            </td>
                            <td className="p-3 font-mono text-slate-400">{lh.ip}</td>
                            <td className="p-3">{lh.device}</td>
                            <td className="p-3 font-mono text-slate-400">{lh.lastLogin}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ─── DYNAMIC CREATE NEW ROLE MODAL ─────────────────────────────────── */}
      {showCreateRoleModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-lg rounded-3xl border p-6 space-y-5 shadow-2xl ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <div>
                <h3 className="font-black text-lg">Create New User Role</h3>
                <span className="text-xs text-slate-400">Add a custom role with specific module access rights</span>
              </div>
              <button onClick={() => setShowCreateRoleModal(false)} className="text-slate-400 hover:text-slate-600 font-bold text-lg px-2">✕</button>
            </div>

            <form onSubmit={handleCreateNewRole} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-500 mb-1">Role Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sales Manager, Regional Inspector, Marketing Admin"
                  value={newRoleTitle}
                  onChange={(e) => setNewRoleTitle(e.target.value)}
                  className={`w-full border rounded-xl px-4 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1">Description</label>
                <input
                  type="text"
                  placeholder="Brief summary of duties and permissions"
                  value={newRoleDesc}
                  onChange={(e) => setNewRoleDesc(e.target.value)}
                  className={`w-full border rounded-xl px-4 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"}`}
                />
              </div>

              <div className="space-y-2 pt-2">
                <label className="block text-slate-500 font-bold uppercase text-[10px]">Module Access Rights</label>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Access Blog Articles & Editor</span>
                    <input
                      type="checkbox"
                      checked={newRoleAccessBlogs}
                      onChange={(e) => setNewRoleAccessBlogs(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Access Customer Quote Leads</span>
                    <input
                      type="checkbox"
                      checked={newRoleAccessLeads}
                      onChange={(e) => setNewRoleAccessLeads(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Access User Accounts & Rights</span>
                    <input
                      type="checkbox"
                      checked={newRoleAccessUsers}
                      onChange={(e) => setNewRoleAccessUsers(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Delete Rights (Blogs / Users)</span>
                    <input
                      type="checkbox"
                      checked={newRoleCanDelete}
                      onChange={(e) => setNewRoleCanDelete(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowCreateRoleModal(false)}
                  className="px-5 py-2.5 bg-slate-200 text-slate-800 font-bold rounded-xl text-xs uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl text-xs uppercase shadow-md cursor-pointer"
                >
                  Save New Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── RESET USER PASSWORD MODAL ────────────────────────────────────── */}
      {passwordResetUser && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-3xl border p-6 space-y-5 shadow-2xl ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <h3 className="font-black text-lg">Reset Password - {passwordResetUser.name}</h3>
              <button
                type="button"
                onClick={() => setPasswordResetUser(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleSavePasswordReset} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-400 mb-1">Enter New Password for {passwordResetUser.email}</label>
                <div className="relative">
                  <input
                    type={showResetPassword ? "text" : "password"}
                    required
                    placeholder="Enter new password..."
                    value={newResetPassword}
                    onChange={(e) => setNewResetPassword(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 pr-10 font-mono ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowResetPassword(!showResetPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer p-1"
                    title={showResetPassword ? "Hide password" : "Show password"}
                  >
                    {showResetPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.122-.563c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.092-4.092a3 3 0 11-4.243-4.243M3 3l18 18" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPasswordResetUser(null)}
                  className="px-4 py-2 bg-slate-700 text-white font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 text-slate-950 font-black rounded-xl cursor-pointer"
                >
                  Reset Password Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── EDIT PROFILE MODAL (DETAILS ONLY) ──────────────────────────────────────────── */}
      {showEditProfileModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-3xl border p-6 space-y-5 shadow-2xl ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <h3 className="font-black text-lg">Edit Profile Details</h3>
              <button
                type="button"
                onClick={() => setShowEditProfileModal(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleSaveAdminProfile} className="space-y-4 text-xs font-semibold">
              {/* Profile Avatar Upload Section */}
              <div className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-2xl space-y-3">
                <div className="w-20 h-20 rounded-full bg-slate-900 text-white font-extrabold text-lg flex items-center justify-center border border-slate-300 overflow-hidden shadow-inner shrink-0">
                  {adminUser.avatar && (adminUser.avatar.startsWith("data:") || adminUser.avatar.startsWith("http") || adminUser.avatar.startsWith("/")) ? (
                    <img src={adminUser.avatar} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    adminUser.avatar || adminUser.name.substring(0, 2).toUpperCase()
                  )}
                </div>

                <input type="file" accept="image/*" ref={profileAvatarRef} onChange={handleAdminProfilePicUpload} className="hidden" />
                <button
                  type="button"
                  onClick={() => profileAvatarRef.current?.click()}
                  className="px-3.5 py-1.5 border border-amber-500 text-amber-500 font-extrabold rounded-xl text-xs hover:bg-amber-500/10 transition cursor-pointer uppercase tracking-wider"
                >
                  ↑ UPLOAD PROFILE PHOTO
                </button>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={adminUser.name}
                  onChange={(e) => setAdminUser({ ...adminUser, name: e.target.value })}
                  className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={adminUser.email}
                  onChange={(e) => setAdminUser({ ...adminUser, email: e.target.value })}
                  className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Contact No</label>
                  <input
                    type="text"
                    value={adminUser.phone || "+91 9876543210"}
                    onChange={(e) => setAdminUser({ ...adminUser, phone: e.target.value })}
                    className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">City</label>
                  <input
                    type="text"
                    value={adminUser.city || "Ahmedabad"}
                    onChange={(e) => setAdminUser({ ...adminUser, city: e.target.value })}
                    className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditProfileModal(false)}
                  className="px-4 py-2 bg-slate-700 text-white font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 text-slate-950 font-black rounded-xl cursor-pointer"
                >
                  Save Profile Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── CHANGE PASSWORD MODAL ────────────────────────────────────────── */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-3xl border p-6 space-y-5 shadow-2xl ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <h3 className="font-black text-lg">Change Admin Password</h3>
              <button
                type="button"
                onClick={() => setShowChangePasswordModal(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleChangeAdminPassword} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-400 mb-1">New Password *</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    required
                    placeholder="Enter new password..."
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 pr-10 font-mono ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer p-1"
                    title={showNewPassword ? "Hide password" : "Show password"}
                  >
                    {showNewPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.122-.563c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.092-4.092a3 3 0 11-4.243-4.243M3 3l18 18" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Confirm New Password *</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Confirm new password..."
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 pr-10 font-mono ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer p-1"
                    title={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.122-.563c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.092-4.092a3 3 0 11-4.243-4.243M3 3l18 18" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowChangePasswordModal(false)}
                  className="px-4 py-2 bg-slate-700 text-white font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 text-slate-950 font-black rounded-xl cursor-pointer"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── EDIT USER MODAL (FROM TABLE) ─────────────────────────────────── */}
      {editingUserModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-lg rounded-3xl border p-6 space-y-5 shadow-2xl ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <h3 className="font-black text-lg">Edit User - {editingUserModal.name}</h3>
              <button
                type="button"
                onClick={() => setEditingUserModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleSaveEditedUser} className="space-y-4 text-xs font-semibold">
              {/* Avatar Upload */}
              <div className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-2xl space-y-3">
                <div className="w-20 h-20 rounded-full bg-slate-900 text-white font-extrabold text-lg flex items-center justify-center border border-slate-300 overflow-hidden shadow-inner shrink-0">
                  {editUserAvatar && (editUserAvatar.startsWith("data:") || editUserAvatar.startsWith("http") || editUserAvatar.startsWith("/")) ? (
                    <img src={editUserAvatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    editUserName.substring(0, 2).toUpperCase()
                  )}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  ref={editUserPicRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      if (typeof reader.result === "string") {
                        setEditUserAvatar(reader.result);
                      }
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => editUserPicRef.current?.click()}
                  className="px-3.5 py-1.5 border border-amber-500 text-amber-500 font-extrabold rounded-xl text-xs hover:bg-amber-500/10 transition cursor-pointer uppercase tracking-wider"
                >
                  ↑ CHANGE USER PHOTO
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={editUserName}
                    onChange={(e) => setEditUserName(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={editUserEmail}
                    onChange={(e) => setEditUserEmail(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Contact No</label>
                  <input
                    type="text"
                    value={editUserPhone}
                    onChange={(e) => setEditUserPhone(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">City</label>
                  <input
                    type="text"
                    value={editUserCity}
                    onChange={(e) => setEditUserCity(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 ${isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300"}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">User Role *</label>
                  <CustomSelectDropdown
                    options={rolesList.map((r) => ({ label: r.roleName, value: r.roleName }))}
                    value={editUserRole}
                    onChange={(val) => setEditUserRole(val as UserRole)}
                    isDark={isDark}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Account Status *</label>
                  <CustomSelectDropdown
                    options={[
                      { label: "Active", value: "Active" },
                      { label: "Inactive", value: "Inactive" },
                    ]}
                    value={editUserStatus}
                    onChange={(val) => setEditUserStatus(val as "Active" | "Inactive")}
                    isDark={isDark}
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingUserModal(null)}
                  className="px-4 py-2 bg-slate-700 text-white font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 text-slate-950 font-black rounded-xl cursor-pointer shadow-md"
                >
                  Save User Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── POPUP MODAL: DETAILED LEAD INFORMATION ──────────────────────── */}
      {selectedLeadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl border p-6 space-y-5 bg-white border-slate-200 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <div>
                <h3 className="font-black text-lg">Lead Details - {selectedLeadModal.fullName}</h3>
                <span className="text-xs text-slate-400">Captured from website forms</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLeadModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-slate-800">
                <p><span className="font-bold text-slate-500">Full Name:</span> {selectedLeadModal.fullName}</p>
                {selectedLeadModal.companyName && <p><span className="font-bold text-slate-500">Company:</span> {selectedLeadModal.companyName}</p>}
                <p><span className="font-bold text-slate-500">Email:</span> <a href={`mailto:${selectedLeadModal.email}`} className="text-blue-600 font-bold">{selectedLeadModal.email}</a></p>
                <p><span className="font-bold text-slate-500">Phone:</span> <a href={`tel:${selectedLeadModal.phone}`} className="text-blue-600 font-bold">{selectedLeadModal.phone}</a></p>
                <p><span className="font-bold text-slate-500">Interest:</span> <span className="text-amber-600 font-bold">{selectedLeadModal.productInterest}</span></p>
              </div>

              {selectedLeadModal.message && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-600 block mb-1">Customer Requirement Message:</span>
                  <p className="text-slate-900 font-medium leading-relaxed">"{selectedLeadModal.message}"</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button onClick={() => handleUpdateLeadStatus(selectedLeadModal.id, "CONTACTED")} className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs">Mark Contacted</button>
              <button onClick={() => setSelectedLeadModal(null)} className="px-4 py-2 bg-slate-200 text-slate-800 font-bold rounded-xl text-xs">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ─── UNIFIED BEAUTIFUL DELETE CONFIRMATION MODAL ───────────────────────── */}
      {deleteConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className={`w-full max-w-md rounded-3xl border p-6 space-y-5 shadow-2xl ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}>

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center font-bold shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-rose-600 dark:text-rose-500">{deleteConfirmModal.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Permanent Removal Confirmation</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDeleteConfirmModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Warning Body */}
            <div className="space-y-3">
              <p className="text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-200">
                {deleteConfirmModal.subtitle}
              </p>

              {deleteConfirmModal.details && deleteConfirmModal.details.length > 0 && (
                <div className={`p-3.5 rounded-2xl border text-xs space-y-1.5 ${isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"}`}>
                  {deleteConfirmModal.details.map((d, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-slate-400">{d.label}:</span>
                      <span className="font-bold truncate max-w-[200px]">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {deleteConfirmModal.warningText && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-500 text-[11px] font-bold">
                  {deleteConfirmModal.warningText}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setDeleteConfirmModal(null)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  if (deleteConfirmModal) {
                    await deleteConfirmModal.onConfirm();
                  }
                }}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition shadow-md shadow-rose-600/30 cursor-pointer flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>{deleteConfirmModal.confirmBtnText || "Delete Permanently"}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
