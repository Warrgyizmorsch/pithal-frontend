import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { getPostBySlug, getTrendingPosts } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, Eye, Flame, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { BlogFaqAccordion } from "@/components/blog/BlogFaqAccordion";
import { BlogShareButtons } from "@/components/blog/BlogShareButtons";

function cleanBlogContentHtml(html: string, title?: string): string {
  if (!html) return "";

  let cleaned = html;

  // 1. Remove duplicate H1/H2 at the start of HTML content matching the main post title or redundant H1
  if (title) {
    const escaped = title.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const titleRegex = new RegExp(`^\\s*<h[12][^>]*>\\s*(${escaped}|[^<]+)?\\s*</h[12]>`, "i");
    cleaned = cleaned.replace(titleRegex, "");
  }

  // Strip any standalone leading <h1> tag at the start of body content (since title is already in Hero header)
  cleaned = cleaned.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, "");

  // 2. Strip hardcoded inline font-weight & font-family from inline styles inside paragraphs
  cleaned = cleaned
    .replace(/font-weight\s*:\s*(600|700|800|900|bold|bolder)\s*;?/gi, "font-weight: 400;")
    .replace(/font-family\s*:\s*[^;"]+;?/gi, "");

  // 3. Strip <strong> and <b> tags from inside <p> paragraphs so all paragraph content is 100% normal weight
  cleaned = cleaned.replace(/<p([^>]*)>([\s\S]*?)<\/p>/gi, (_match, pAttr, pInner) => {
    const cleanInner = pInner.replace(/<\/?(strong|b)[^>]*>/gi, "");
    return `<p${pAttr}>${cleanInner}</p>`;
  });

  return cleaned;
}

import { connectDB } from "@/lib/db/mongodb";
import BlogModel from "@/lib/models/Blog";

async function getBlogPost(slug: string) {
  try {
    const conn = await connectDB();
    if (conn) {
      const b: any = await BlogModel.findOne({ slug }).lean();
      if (b) {
        return {
          slug: b.slug,
          tag: b.tag || b.category?.toUpperCase() || "CRUSHING SOLUTIONS",
          title: b.title,
          desc: b.excerpt || b.title,
          date: b.publishedAt || "Today",
          read: b.readTime || "5 min read",
          views: b.views || "1.2K",
          img: b.image || "/blogpageimg/crusherguide.jpg",
          content: b.content,
          faqs: b.faqs || [],
        };
      }
    }
  } catch (err) {
    console.warn("Direct DB blog fetch error, using fallback:", err);
  }
  return getPostBySlug(slug) || null;
}

async function getAllBackendBlogs() {
  try {
    const conn = await connectDB();
    if (conn) {
      const blogs: any = await BlogModel.find({ status: { $ne: "Draft" } }).sort({ createdAt: -1 }).lean();
      if (blogs && blogs.length > 0) {
        return blogs;
      }
    }
  } catch (err) {
    console.warn("Direct DB all blogs fetch error:", err);
  }
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post | Pithal Machine Pvt.",
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  return {
    title: post.title,
    description: post.desc,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.img],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allBackendBlogs] = await Promise.all([
    getBlogPost(slug),
    getAllBackendBlogs(),
  ]);

  if (!post) {
    notFound();
  }

  // Prepare top/latest sidebar posts from backend
  const sidebarPosts =
    allBackendBlogs.length > 0
      ? allBackendBlogs
          .filter((b: any) => b.slug !== slug)
          .slice(0, 4)
          .map((b: any, index: number) => ({
            slug: b.slug,
            title: b.title,
            read: b.readTime || "5 min read",
            date: b.publishedAt || "Today",
            img: b.image || "/blogpageimg/crusherguide.jpg",
            tag: b.tag || b.category?.toUpperCase() || "CRUSHING SOLUTIONS",
            num: `0${index + 1}`,
          }))
      : getTrendingPosts()
          .filter((p) => p.slug !== slug)
          .slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 font-sans">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-primary-dark text-white">
          <Image
            alt={post.title}
            className="object-cover object-center opacity-35"
            fill
            priority
            sizes="100vw"
            src={post.img}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/70" />
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-15" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent" />

          <div className="relative z-10 flex w-full max-w-[1520px] flex-col px-5 sm:px-8 lg:px-10 pt-8 pb-20 lg:pt-12 lg:pb-28">
            <div className="max-w-[860px]">
              <HeroNavigation current="Blog" eyebrow={post.tag} light />
              
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                  <Calendar size={13} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <Clock size={13} /> {post.read}
                </span>
                {post.views && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Eye size={13} /> {post.views} Views
                  </span>
                )}
              </div>

              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] text-white mb-6 uppercase tracking-wide">
                {post.title}
              </h1>
              
              <p className="max-w-3xl text-base font-normal leading-relaxed text-slate-300 md:text-lg">
                {post.desc}
              </p>
            </div>
          </div>
        </section>

        {/* MAIN ARTICLE & SIDEBAR SECTION */}
        <section className="py-10 lg:py-16">
          <Container>
            <div className="max-w-[1240px] mx-auto">
              <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
                
                {/* ARTICLE CONTENT COLUMN */}
                <div className="min-w-0 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10">
                  
                  {/* Banner Image inside post */}
                  <div className="relative w-full h-[280px] sm:h-[400px] rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Body Content */}
                  <article className="prose prose-lg max-w-none text-slate-800">
                    {post.content && post.content.includes("<") ? (
                      <div
                        className="blog-rich-content font-sans text-slate-800 space-y-4 leading-relaxed overflow-x-hidden
                          [&_p]:font-normal [&_p]:text-slate-700 [&_p]:text-[16.5px] md:[&_p]:text-[17.5px] [&_p]:leading-[1.85] [&_p]:mb-5
                          [&_p_*]:font-normal [&_p_strong]:font-normal [&_p_b]:font-normal
                          [&_h1]:text-3xl [&_h1]:font-black [&_h1]:text-primary [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:tracking-tight [&_h1]:leading-tight
                          [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:leading-tight
                          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:leading-tight
                          [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-primary [&_h4]:mt-5 [&_h4]:mb-2
                          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2.5 [&_li]:text-slate-700 [&_li]:font-normal [&_li]:text-[16px]
                          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2.5 [&_li]:text-slate-700 [&_li]:font-normal [&_li]:text-[16px]
                          [&_blockquote]:border-l-4 [&_blockquote]:border-secondary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-slate-600 [&_blockquote]:bg-orange-50/40 [&_blockquote]:py-3 [&_blockquote]:rounded-r-lg
                          [&_table]:w-full [&_table]:min-w-[520px] [&_table]:border-collapse [&_table]:my-6
                          [&_td]:border [&_td]:border-slate-200 [&_td]:p-3 [&_td]:text-sm [&_td]:font-normal
                          [&_th]:border [&_th]:border-slate-200 [&_th]:p-3 [&_th]:bg-slate-100 [&_th]:font-bold [&_th]:text-primary [&_th]:text-sm
                          [&_a]:text-secondary [&_a]:font-bold [&_a]:underline hover:[&_a]:text-primary
                          [&_div:has(table)]:overflow-x-auto [&_div:has(table)]:max-w-full [&_div:has(table)]:my-6 [&_div:has(table)]:rounded-xl [&_div:has(table)]:border [&_div:has(table)]:border-slate-200"
                        dangerouslySetInnerHTML={{ __html: cleanBlogContentHtml(post.content, post.title) }}
                      />
                    ) : (
                      <div className="blog-rich-content overflow-x-auto max-w-full
                        [&_p]:font-normal [&_p]:text-slate-700 [&_p]:text-[16.5px] md:[&_p]:text-[17.5px] [&_p]:leading-[1.85] [&_p]:mb-5
                        [&_p_*]:font-normal [&_p_strong]:font-normal [&_p_b]:font-normal
                        [&_h1]:text-3xl [&_h1]:font-black [&_h1]:text-primary [&_h1]:mt-8 [&_h1]:mb-4
                        [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-4
                        [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3
                        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2 [&_li]:text-slate-700 [&_li]:font-normal">
                        <ReactMarkdown>{post.content || ""}</ReactMarkdown>
                      </div>
                    )}
                  </article>

                  {/* FAQ Section */}
                  {post.faqs && post.faqs.length > 0 && (
                    <div className="pt-8 border-t border-slate-200">
                      <BlogFaqAccordion faqs={post.faqs} />
                    </div>
                  )}
                </div>

                {/* SIDEBAR COLUMN */}
                <aside className="space-y-8 sticky top-28 self-start">
                  
                  {/* Share Widget */}
                  <BlogShareButtons title={post.title} slug={post.slug} />

                  {/* Top & Latest Backend Blogs */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                      <h3 className="text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2">
                        <Flame size={18} className="text-secondary" />
                        Latest Articles
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Top Reads
                      </span>
                    </div>

                    <div className="space-y-5">
                      {sidebarPosts.map((sp: any, i: number) => (
                        <Link
                          key={i}
                          href={`/blog/${sp.slug}`}
                          className="group flex gap-3.5 items-center p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                            <Image
                              src={sp.img}
                              alt={sp.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-secondary block mb-0.5">
                              {sp.tag || "CRUSHING SOLUTIONS"}
                            </span>
                            <h4 className="text-xs font-bold text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                              {sp.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                              <span>{sp.read}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/blog"
                      className="mt-5 w-full py-2.5 px-4 rounded-xl border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      View All Blogs
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </aside>

              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
