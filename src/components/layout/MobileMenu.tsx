import { Button } from "@/components/common/Button";
import { navigation } from "@/data/homeData";
import { ArrowRight, Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <details className="group relative xl:hidden">
      <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-border text-primary [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open navigation menu</span>
        <Menu aria-hidden size={22} />
      </summary>
      <nav className="absolute right-0 top-[calc(100%+1rem)] w-[min(19rem,calc(100vw-2.5rem))] border border-border bg-white p-4 shadow-2xl">
        {navigation.map((item) => (
          <a
            className="block border-b border-border px-2 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
        <Button className="mt-4 w-full" href="#contact">
          Contact Us <ArrowRight aria-hidden size={14} />
        </Button>
      </nav>
    </details>
  );
}
