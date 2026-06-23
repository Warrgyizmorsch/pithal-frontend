import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { getPostBySlug, getTrendingPosts } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, Eye, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = getPostBySlug(slug);

  if (!post) {
    // Fallback demo data instead of notFound()
    post = {
      slug: slug,
      tag: "GENERAL",
      title: "Exploring Industrial Innovations: A Comprehensive Guide",
      desc: "Discover the latest trends, technologies, and best practices shaping the future of industrial operations and engineering.",
      date: "Today",
      read: "5 min read",
      views: "1.2K",
      img: "/blogpageimg/crushersection.jpg",
      content: `
## Welcome to Pithal Insights
This is a demonstration post. The actual content for this article is currently being updated by our editorial team. 

In the fast-paced world of industrial engineering, staying ahead of the curve requires continuous learning and adaptation. We regularly publish insights on:
- Plant Optimization & Efficiency
- Preventive Maintenance Strategies
- Crushing and Screening Technologies
- Sustainable Industrial Practices

### Why This Matters
Efficiency and reliability are the cornerstones of profitable operations. Small adjustments in your crushing circuit or maintenance schedule can yield massive returns over a fiscal year.

*Stay tuned for the full article which will delve deep into technical specifications, case studies, and actionable takeaways for your plant.*
      `
    };
  }

  const trendingPosts = getTrendingPosts().slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-primary-dark text-white">
          <Image
            alt={post.title}
            className="object-cover object-center"
            fill
            preload
            sizes="100vw"
            src={post.img}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,19,45,.98)_0%,rgba(3,27,64,.94)_34%,rgba(3,27,64,.64)_56%,rgba(3,27,64,.18)_80%,rgba(3,27,64,0)_100%)]" />
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-15" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 via-gray-50/45 to-transparent" />

          <div className="relative z-10 flex w-full max-w-[1520px] flex-col px-5 sm:px-8 lg:px-10 pt-6 pb-24 lg:pt-8 lg:pb-36">
            <div className="max-w-[820px]">
              <HeroNavigation current="Blog" eyebrow={post.tag} light />
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white/75">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white/75">
                  <Clock size={14} /> {post.read}
                </span>
                {post.views && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white/75">
                    <Eye size={14} /> {post.views} Views
                  </span>
                )}
              </div>
              <h1 className="headline mb-6 text-[clamp(2.2rem,5vw,4.4rem)] uppercase leading-[1.02] text-white">
                {post.title}
              </h1>
              <p className="max-w-2xl text-base font-medium leading-8 text-white/82 md:text-lg">
                {post.desc}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <Container>
            <div className="max-w-[1200px] mx-auto">
              {/* Main Content & Sidebar */}
              <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                <div className="min-w-0">
                  {/* Post Content */}
                  <article className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-primary prose-headings:uppercase prose-h2:text-2xl prose-h3:text-xl prose-p:text-text-dark prose-p:leading-relaxed prose-a:text-secondary hover:prose-a:text-primary prose-strong:text-primary marker:text-secondary">
                    <ReactMarkdown>{post.content || ''}</ReactMarkdown>
                  </article>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8 hidden lg:block sticky top-32 self-start">
                  {/* Share */}
                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                      <Share2 size={16} className="text-secondary" />
                      Share this article
                    </h3>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-blue-600 hover:text-white transition-colors border border-border">
                        <FaFacebook size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-blue-400 hover:text-white transition-colors border border-border">
                        <FaTwitter size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-blue-700 hover:text-white transition-colors border border-border">
                        <FaLinkedin size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Trending Posts */}
                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-5">
                      Trending Now
                    </h3>
                    <div className="space-y-5">
                      {trendingPosts.map((tp, i) => (
                        <Link key={i} href={`/blog/${tp.slug}`} className="group flex gap-4 items-start">
                          <span className="text-3xl font-black text-gray-200 group-hover:text-secondary transition-colors leading-none">
                            {tp.num}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                              {tp.title}
                            </h4>
                            <span className="text-xs text-text-muted font-medium">
                              {tp.read} min read
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
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
