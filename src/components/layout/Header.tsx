import { Button } from "@/components/common/Button";
import { navigation } from "@/data/homeData";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

function Logo() {
  return (
    <a aria-label="Pithal Machines home" className="block shrink-0" href="#home">
      <Image alt="Pithal Machines Ltd." className="h-auto w-[190px] sm:w-[246px]" height={59} priority src="/images/brand/pithal-logo.png" width={246} />
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur">
      <div className="mx-auto flex h-[5.25rem] w-[calc(100%-clamp(2.5rem,6vw,7rem))] items-center justify-between gap-7 border-b border-border/70 xl:h-[5.95rem]">
        <Logo />
        <nav aria-label="Main menu" className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(1.25rem,2.2vw,2.5rem)] xl:flex">
          {navigation.map((item) => (
            <a
              className="relative flex shrink-0 items-center gap-2 whitespace-nowrap py-5 text-[14px] font-bold uppercase tracking-[0.015em] text-primary after:absolute after:bottom-[1rem] after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-all hover:text-secondary hover:after:w-full"
              href={item.href}
              key={item.label}
            >
              {item.label}
              {item.label === "Products" && <ChevronDown aria-hidden className="mt-0.5" size={15} />}
            </a>
          ))}
        </nav>
        <Button className="primary-btn text-white! hidden min-h-[3rem] shrink-0 px-7 text-[13px] tracking-[0.12em] xl:inline-flex rounded-[0.3rem] ml-0.5" href="#contact">
          Contact Us <ArrowRight aria-hidden className="ml-2" size={16} />
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
}
