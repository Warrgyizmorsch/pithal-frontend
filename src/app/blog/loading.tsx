import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";

export default function BlogLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 py-12 lg:py-16 bg-[#f8f9fc]">
        <Container>
          {/* Breadcrumb / Title skeleton */}
          <div className="animate-pulse space-y-4 mb-10">
            <div className="h-4 w-32 bg-slate-200 rounded"></div>
            <div className="h-10 w-3/4 max-w-lg bg-slate-200 rounded-lg"></div>
            <div className="h-4 w-1/2 max-w-md bg-slate-100 rounded"></div>
          </div>

          {/* Grid skeletons */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-white border border-slate-200 rounded-2xl overflow-hidden p-6 space-y-4 shadow-sm"
              >
                <div className="h-48 bg-slate-100 rounded-xl w-full"></div>
                <div className="h-4 w-1/4 bg-orange-100 rounded"></div>
                <div className="h-6 w-5/6 bg-slate-200 rounded"></div>
                <div className="h-4 w-full bg-slate-100 rounded"></div>
                <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

