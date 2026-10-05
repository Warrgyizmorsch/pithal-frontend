"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const pathname = usePathname();

  // Hide on admin and dashboard pages
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 print:hidden">
      <div className="relative group flex items-center justify-center">
        {/* Subtle pulsing background glow */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 [animation-duration:3s]"
          aria-hidden="true"
        />

        <a
          href="https://wa.me/919887537129"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          <FaWhatsapp size={32} aria-hidden="true" />
          <span className="sr-only">Chat with us on WhatsApp</span>
        </a>

        {/* Hover Tooltip (desktop) */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm transition-opacity duration-200 opacity-0 group-hover:opacity-100 sm:inline-block"
        >
          Chat with us
        </span>
      </div>
    </aside>
  );
}

export default WhatsAppButton;
