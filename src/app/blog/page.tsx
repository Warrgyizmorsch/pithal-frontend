import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Factors to Consider When Choosing Crushing Equipment",
      excerpt: "Learn the key considerations for selecting the right crushing solution for your project.",
      date: "May 20, 2024",
      category: "Tips & Tricks",
      author: "John Smith",
    },
    {
      id: 2,
      title: "How to Maximize Crushing Plant Efficiency",
      excerpt: "Discover proven strategies to optimize your crushing plant's performance and reduce downtime.",
      date: "May 15, 2024",
      category: "Industry Insights",
      author: "Sarah Johnson",
    },
    {
      id: 3,
      title: "The Future of Sustainable Crushing Technology",
      excerpt: "Explore how modern crushing equipment is becoming more eco-friendly and sustainable.",
      date: "May 10, 2024",
      category: "Technology",
      author: "Mike Chen",
    },
    {
      id: 4,
      title: "Case Study: 500 TPH Crushing Plant in Karnataka",
      excerpt: "A detailed look at how we delivered a successful crushing solution for a major aggregates producer.",
      date: "May 5, 2024",
      category: "Case Study",
      author: "Rajesh Kumar",
    },
    {
      id: 5,
      title: "Understanding Jaw Crusher Design and Operation",
      excerpt: "Technical deep-dive into the design principles and best practices for jaw crushers.",
      date: "April 30, 2024",
      category: "Technical",
      author: "Emma Wilson",
    },
    {
      id: 6,
      title: "Maintenance Guide: Keeping Your Equipment Running",
      excerpt: "Essential maintenance tips to extend the life of your crushing and screening equipment.",
      date: "April 25, 2024",
      category: "Maintenance",
      author: "David Brown",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <SectionHeader
              eyebrow="Latest Updates"
              title="Our Blog"
              highlight="Knowledge"
              subtitle="Industry insights, tips, and case studies from our team of experts"
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <p className="text-gray-500">Blog Image</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-3 py-1 bg-secondary/10 text-primary rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-600">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 hover:text-secondary cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-gray-600">By {post.author}</span>
                      <button className="text-secondary font-bold text-sm hover:text-secondary/80">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="primary-btn inline-flex items-center justify-center rounded-[0.3rem] border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white">
                View All Articles
              </button>
            </div>

            <div className="mt-20 p-12 bg-gray-50 rounded-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get the latest industry insights, product updates, and tips delivered to your inbox.
              </p>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded"
                />
                <button className="primary-btn px-6 py-3 text-sm font-bold uppercase tracking-widest text-white rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
