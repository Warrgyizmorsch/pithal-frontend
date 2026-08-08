import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { ArrowLeft, Search, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[75vh] bg-slate-950 text-white font-sans flex items-center justify-center py-20 relative overflow-hidden">
        {/* Ambient Industrial Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-0 industrial-grid opacity-20" />

        <Container className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-6 shadow-xl shadow-amber-500/10">
            <FileQuestion size={40} strokeWidth={2} />
          </div>

          <span className="block text-xs font-black uppercase tracking-[0.2em] text-amber-400 mb-2">
            404 — PAGE NOT FOUND
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Oops! The blog post or page you&apos;re looking for doesn&apos;t exist.
          </h1>

          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            The URL slug you entered may be invalid, removed, or typed incorrectly. Check the URL or explore live technical articles on Pithal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
            >
              <Search size={16} /> Browse All Blogs
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold border border-slate-700 px-6 py-3.5 text-xs uppercase tracking-wider transition-all"
            >
              <ArrowLeft size={16} /> Back To Home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
