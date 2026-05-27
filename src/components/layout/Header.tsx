import { navigation } from "@/data/homeData";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

function Logo() {
  return (
    <a aria-label="Pithal Machines home" className="block shrink-0" href="#home">
      <Image
        alt="Pithal Machines Ltd."
        className="h-auto w-[136px] min-[380px]:w-[152px] sm:w-[178px] xl:w-[188px] 2xl:w-[196px]"
        height={140}
        priority
        src="/images/brand/pithal-logo.png"
        width={394}
      />
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] w-[calc(100%-clamp(2rem,6vw,7rem))] items-center justify-between gap-4 border-b border-border/70 sm:h-[5.25rem] sm:gap-7 xl:h-[5.95rem]">
        <Logo />
        <nav aria-label="Main menu" className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(1rem,1.45vw,1.65rem)] xl:flex">
          {navigation.map((item) => (
            <a
              className="relative flex shrink-0 items-center gap-1.5 whitespace-nowrap py-5 text-[14px] font-bold uppercase tracking-[0.01em] text-primary after:absolute after:bottom-[1rem] after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-all hover:text-secondary hover:after:w-full min-[1400px]:text-[13px] 2xl:gap-2 2xl:text-[14px]"
              href={item.href}
              key={item.label}
            >
              {item.label}
              {item.label === "Products" && <ChevronDown aria-hidden className="mt-0.5" size={15} />}
            </a>
          ))}
        </nav>
        <a className="primary-btn hidden min-h-12 shrink-0 items-center justify-center rounded-[0.3rem] border px-6 text-[11px] font-bold uppercase tracking-widest text-white xl:inline-flex min-[1400px]:px-5 min-[1400px]:text-[12px] 2xl:px-7 2xl:text-[13px] 2xl:tracking-[0.12em]" href="#contact">
          Contact Us <ArrowRight aria-hidden className="ml-2" size={16} />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
