import { Container } from "@/components/common/Container";
import { Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-primary-dark text-white/80 lg:block">
      <Container className="flex h-9 items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em]">
        <p>Engineered crushing and mining systems since 1976</p>
        <div className="flex gap-8">
          <a className="flex items-center gap-2" href="tel:+919887537129"><Phone aria-hidden size={12} /> +91 98875 37129</a>
          <a className="flex items-center gap-2" href="mailto:sales@pithalmachines.com"><Mail aria-hidden size={12} /> sales@pithalmachines.com</a>
        </div>
      </Container>
    </div>
  );
}
