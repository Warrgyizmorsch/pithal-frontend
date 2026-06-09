import { Container } from "@/components/common/Container";
import { Hammer, Construction } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BecomeADealerPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-6 mb-12">
              <div className="relative">
                <Construction className="w-20 h-20 text-secondary animate-bounce" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tight">
              Become a Dealer
            </h1>
            
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-secondary/10 text-secondary rounded-full font-bold uppercase tracking-widest text-sm mb-8 border border-secondary/20">
              <Hammer size={18} />
              Under Development
            </div>

            <p className="text-xl text-text-dark leading-relaxed mb-12">
              We are currently crafting our dealer partnership program to provide the best tools and support for our future partners. This page will soon feature all the information you need to join the Pithal Machines global network.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-primary mb-2 uppercase text-sm tracking-wider">Coming Soon</h3>
                <p className="text-text-dark text-sm">Online Application Portal</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-primary mb-2 uppercase text-sm tracking-wider">Benefits</h3>
                <p className="text-text-dark text-sm">Marketing & Technical Support</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-primary mb-2 uppercase text-sm tracking-wider">Network</h3>
                <p className="text-text-dark text-sm">Global Distribution Channels</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="primary-btn px-8 py-4 rounded-lg text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2"
              >
                Contact Us for Inquiries
              </Link>
              <Link 
                href="/" 
                className="px-8 py-4 rounded-lg text-primary font-bold uppercase tracking-widest text-sm border border-border hover:bg-gray-100 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
