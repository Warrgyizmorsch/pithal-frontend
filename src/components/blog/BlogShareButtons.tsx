"use client";

import React, { useState, useEffect } from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface BlogShareButtonsProps {
  title: string;
  slug: string;
}

export function BlogShareButtons({ title, slug }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(`https://pithal.com/blog/${slug}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/blog/${slug}`);
    }
  }, [slug]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? `${window.location.origin}/blog/${slug}` : shareUrl;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2">
          <Share2 size={18} className="text-secondary" />
          Share Article
        </h3>
        {copied && (
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 animate-in fade-in slide-in-from-right duration-300">
            Copied!
          </span>
        )}
      </div>

      <div className="grid grid-cols-5 gap-2.5">
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
          className="h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-emerald-100 hover:shadow-md group"
        >
          <FaWhatsapp size={19} className="group-hover:scale-110 transition-transform" />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300 border border-blue-100 hover:shadow-md group"
        >
          <FaLinkedin size={19} className="group-hover:scale-110 transition-transform" />
        </a>

        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Twitter"
          className="h-11 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300 border border-sky-100 hover:shadow-md group"
        >
          <FaTwitter size={19} className="group-hover:scale-110 transition-transform" />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          className="h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-indigo-100 hover:shadow-md group"
        >
          <FaFacebook size={19} className="group-hover:scale-110 transition-transform" />
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          title="Copy Link"
          className={`h-11 rounded-xl flex items-center justify-center transition-all duration-300 border hover:shadow-md group ${
            copied
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-primary hover:text-white hover:border-primary"
          }`}
        >
          {copied ? (
            <Check size={18} className="animate-in zoom-in duration-200" />
          ) : (
            <LinkIcon size={18} className="group-hover:rotate-45 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}
