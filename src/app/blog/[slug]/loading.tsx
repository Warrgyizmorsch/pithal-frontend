import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";

export default function BlogPostLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans py-6 sm:py-8 lg:py-10">
        <Container>
          <div className="max-w-[1240px] mx-auto animate-pulse">
            {/* Breadcrumb skeleton */}
            <div className="h-4 w-48 bg-slate-200 rounded mb-6"></div>

            <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-12 items-start">
              {/* Main Article skeleton */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
                {/* Badge */}
                <div className="h-6 w-32 bg-secondary/20 rounded-full"></div>
                {/* Title */}
                <div className="h-10 w-4/5 bg-slate-200 rounded-lg"></div>
                <div className="h-6 w-2/3 bg-slate-100 rounded"></div>

                {/* Metadata */}
                <div className="flex gap-4 pt-2">
                  <div className="h-4 w-24 bg-slate-100 rounded"></div>
                  <div className="h-4 w-24 bg-slate-100 rounded"></div>
                </div>

                {/* Image */}
                <div className="h-72 sm:h-96 w-full bg-slate-100 rounded-xl"></div>

                {/* Paragraphs */}
                <div className="space-y-3 pt-4">
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                </div>
              </div>

              {/* Sidebar skeleton */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                <div className="h-6 w-36 bg-slate-200 rounded"></div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-16 h-16 bg-slate-200 rounded-lg shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full bg-slate-200 rounded"></div>
                      <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

