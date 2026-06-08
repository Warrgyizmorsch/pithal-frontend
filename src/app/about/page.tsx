import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Cog,
  Construction,
  Factory,
  Gauge,
  Globe2,
  Handshake,
  Headphones,
  Home,
  Landmark,
  Leaf,
  Lightbulb,
  Mountain,
  Network,
  Pickaxe,
  Play,
  Recycle,
  Ruler,
  Scale,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { aboutPageData } from "@/data/aboutPageData";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  award: Award,
  building: Building2,
  clipboard: ClipboardCheck,
  cog: Cog,
  construction: Construction,
  factory: Factory,
  gauge: Gauge,
  globe: Globe2,
  handshake: Handshake,
  headphones: Headphones,
  iso: BadgeCheck,
  landmark: Landmark,
  leaf: Leaf,
  lightbulb: Lightbulb,
  mission: Cog,
  mountain: Mountain,
  network: Network,
  pickaxe: Pickaxe,
  recycle: Recycle,
  ruler: Ruler,
  scale: Scale,
  settings: Settings2,
  shield: ShieldCheck,
  spark: Sparkles,
  target: Target,
  telescope: Telescope,
  trending: TrendingUp,
  truck: Truck,
  users: Users,
  vision: Telescope,
  wrench: Wrench,
};

function Icon({
  name,
  className,
  size = 22,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Component = icons[name] ?? Settings2;
  return (
    <Component
      aria-hidden
      className={className}
      size={size}
      strokeWidth={1.8}
    />
  );
}

function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "accent-bars text-[12px] font-black uppercase tracking-[0.24em] text-secondary",
        className,
      )}
    >
      {children}
    </p>
  );
}

function HeroSection() {
  const { hero, stats } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white lg:min-h-[calc(100svh-4.25rem)] xl:min-h-[calc(100svh-5.25rem)]">
      <Image
        alt="Pithal Machines industrial factory floor and quarry application background"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src="/images/about/about-hero-industrial-generated.png"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_22%,rgba(255,255,255,.88)_38%,rgba(255,255,255,.36)_58%,rgba(255,255,255,0)_78%)]"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[58%] industrial-grid opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/85 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-dark/70 via-primary-dark/20 to-transparent"
      />

      <Container className="relative z-10 flex flex-col gap-10 py-6 lg:min-h-[calc(100svh-4.25rem)] lg:justify-between lg:py-8 xl:min-h-[calc(100svh-5.25rem)]">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-3 text-xs font-black text-primary sm:mb-6 sm:text-sm lg:mb-7"
          >
            <Link
              className="flex items-center gap-2 transition-colors hover:text-secondary"
              href="/"
            >
              <Home aria-hidden size={16} />
              Home
            </Link>
            <ChevronRight aria-hidden size={18} />
            <span className="text-secondary">About Us</span>
          </nav>

          <div className="max-w-[650px]">
            <div className="mb-3 flex items-center gap-3 text-secondary sm:mb-4">
              <span className="flex items-center gap-[5px]" aria-hidden>
                {[0, 1, 2].map((index) => (
                  <span
                    className="block h-[8px] w-[6px] skew-x-[-30deg] bg-current"
                    key={index}
                  />
                ))}
              </span>
              <p className="text-xs font-black uppercase tracking-[0.08em] sm:text-sm">
                {hero.eyebrow}
              </p>
              <span className="flex items-center gap-[5px]" aria-hidden>
                {[0, 1, 2].map((index) => (
                  <span
                    className="block h-[8px] w-[6px] skew-x-[-30deg] bg-current"
                    key={index}
                  />
                ))}
              </span>
              <span className="hidden h-px w-16 bg-secondary/30 sm:block" />
            </div>
            <h1 className="headline mb-4 text-[clamp(2.2rem,5.6vw,4.3rem)] leading-[1.05] text-primary sm:mb-5">
              {hero.title}
              <span className="block text-secondary">{hero.highlight}</span>
            </h1>
            <p className="mt-4 max-w-[560px] text-sm font-medium leading-6 text-text-dark sm:text-[16px] lg:leading-7">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-7">
              <Button
                className="min-h-[50px] rounded-md px-5 text-[11px] shadow-[0_14px_28px_rgba(250,89,2,0.24)] sm:min-h-[52px] sm:px-6 sm:text-[12px]"
                href={hero.ctas[0].href}
                variant="primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
                  <Factory size={17} />
                </span>
                {hero.ctas[0].label}
                <ArrowRight aria-hidden size={19} />
              </Button>
              <Button
                className="min-h-[50px] rounded-md border-secondary/35 bg-white/95 px-5 text-[11px] shadow-[0_12px_22px_rgba(3,27,64,0.09)] sm:min-h-[52px] sm:px-6 sm:text-[12px]"
                href={hero.ctas[1].href}
                variant="outlineNavy"
              >
                <Headphones className="text-secondary" size={18} />
                {hero.ctas[1].label}
                <ArrowRight aria-hidden className="text-secondary" size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-[0_18px_42px_rgba(3,27,64,0.18)] sm:rounded-2xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_1.75fr] lg:divide-y-0">
            {stats.map((stat) => (
              <article
                className="flex min-h-[72px] items-center gap-2.5 px-3 py-3 sm:min-h-[82px] sm:gap-3 sm:px-4 lg:min-h-[92px]"
                key={stat.label}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                  <Icon name={stat.icon} size={22} />
                </span>
                <div>
                  <p className="headline text-[22px] leading-none text-primary sm:text-[35px] lg:text-[28px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[8rem] text-[10px] font-black leading-4 text-primary-dark lg:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              </article>
            ))}
            <article className="relative col-span-1 min-h-[76px] overflow-hidden bg-primary-dark text-white sm:col-span-1 sm:min-h-[82px] lg:min-h-[92px]">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,89,2,0.18),transparent_35%)]"
              />
              <div className="relative flex h-full min-h-[76px] items-center gap-3 p-3 sm:min-h-[82px] sm:p-4 lg:min-h-[92px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-white shadow-[0_12px_22px_rgba(250,89,2,0.25)]">
                  <Play fill="currentColor" size={17} />
                </span>
                <div>
                  <p className="max-w-[7rem] text-xs font-black leading-5">
                    Watch Our {hero.video.label}
                  </p>
                  <ArrowRight
                    aria-hidden
                    className="mt-2 text-secondary animate-slide-right"
                    size={16}
                  />
                </div>
                <div className="relative ml-auto hidden h-[66px] w-[126px] overflow-hidden rounded-lg border border-secondary/45 sm:block">
                  <Image
                    alt={hero.video.label}
                    className="object-cover"
                    fill
                    sizes="130px"
                    src={hero.video.image}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/10">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow">
                      <Play fill="currentColor" size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhoWeAreSection() {
  const { experience } = aboutPageData;

  return (
    <section className="bg-white py-[35px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          {/* ── Left Column ── */}
          <div>
            {/* Eyebrow: /// WHO WE ARE /// ——————— */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-[4px]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    aria-hidden
                    className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-secondary"
                  />
                ))}
              </span>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-secondary whitespace-nowrap">
                {experience.eyebrow}
              </p>
              <span className="flex items-center gap-[4px]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    aria-hidden
                    className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-secondary"
                  />
                ))}
              </span>
              <span aria-hidden className="flex-1 h-[1.5px] bg-secondary/20" />
            </div>

            {/* Headline */}
            <h2 className="headline text-[clamp(2rem,4.6vw,3.35rem)] leading-[0.94] text-primary">
              {experience.title}
              <span className="block text-secondary">
                {experience.highlight}
              </span>
            </h2>

            {/* Description paragraphs */}
            <p className="mt-6 max-w-[520px] text-sm leading-7 text-text-muted sm:text-[15px]">
              {experience.description1}
            </p>
            <p className="mt-3 max-w-[520px] text-sm leading-7 text-text-muted sm:text-[15px]">
              {experience.description2}
            </p>

            {/* Philosophy / Capability callout items */}
            <div className="mt-8 space-y-5">
              {experience.philosophy.map((item) => (
                <div className="flex gap-4" key={item.title}>
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-secondary/55 bg-secondary/5 text-secondary">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="text-[13px] font-black uppercase tracking-[0.07em] text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[430px] text-[13px] leading-6 text-text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Image Grid ── */}
          <div className="flex flex-col gap-4">
            {/* Top wide image */}
            <div className="image-hover relative h-[270px] overflow-hidden rounded-2xl shadow-[0_16px_36px_rgba(3,27,64,0.12)] sm:h-[310px]">
              <Image
                alt="Pithal Machines manufacturing floor with crushing equipment"
                className="object-cover"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                src="/images/about/our-foundation-1.png"
              />
            </div>
            {/* Bottom row: two images side-by-side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="image-hover relative h-[155px] overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(3,27,64,0.10)] sm:h-[175px]">
                <Image
                  alt="Pithal Machines facility exterior"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 50vw, 23vw"
                  src="/images/about/our-foundation-2.png"
                />
              </div>
              <div className="image-hover relative h-[155px] overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(3,27,64,0.10)] sm:h-[175px]">
                <Image
                  alt="Pithal engineers reviewing technical blueprints"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 50vw, 23vw"
                  src="/images/about/our-foundation-3.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Feature Cards Row ── */}
        <div className="mt-9 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_rgba(3,27,64,0.07)]">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {experience.metrics.map((metric) => (
              <article className="flex gap-4 p-6" key={metric.title}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon name={metric.icon} size={22} />
                </span>
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-[0.07em] text-primary">
                    {metric.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-5 text-text-muted">
                    {metric.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function VisionMissionSection() {
  const { visionMission } = aboutPageData;
  const vision = visionMission.items[0];
  const mission = visionMission.items[1];

  return (
    <section className="relative overflow-hidden bg-[#f1f4f8] py-[35px]">
      {/* Blueprint grid overlay */}

      <Container className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Faint industrial image overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/about/our-foundation-1.png')] bg-cover bg-center opacity-[0.03]"
        />
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          {/* Eyebrow: /// OUR DIRECTION /// */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#fa5902]">
              {visionMission.eyebrow}
            </p>
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
          </div>
          <h2 className="headline text-[38px] md:text-[46px] leading-[1.1] text-[#031b40] font-black tracking-tight uppercase">
            {visionMission.title}
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-12 bg-[#fa5902]"
          />
        </div>

        {/* ── Cards Container with relative positioning for the bottom tab ── */}
        <div className="relative mx-auto max-w-[1520px] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            
            {/* ▌ Vision Card (Dark Navy) */}
            <div className="relative z-[2] flex">
              <div 
                className="w-full bg-[#031b40] text-white border-l-[6px] border-[#fa5902] flex items-center p-8 md:p-12 md:pr-16 shadow-lg md:clip-vision"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
                  {/* Custom Double Ring Icon Container */}
                  <div className="relative shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#fa5902]/40 p-2">
                    <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                      {/* Custom Mountain with Flag SVG */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 text-white"
                      >
                        <line x1="12" y1="3" x2="12" y2="12" />
                        <path d="M12 3l6 2.5-6 2.5V3z" fill="#fa5902" stroke="#fa5902" />
                        <path d="M3 20l7-9 5 5 2-2 4 6" />
                        <path d="M2 20h20" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-2xl font-black tracking-wider text-white uppercase">
                      {vision.title}
                    </h3>
                    <span className="block w-8 h-[3px] bg-[#fa5902] mt-2 mb-4 mx-auto sm:mx-0" />
                    <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/80 font-medium">
                      {vision.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ▌ Mission Card (White) */}
            <div className="relative z-[1] flex">
              <div 
                className="w-full bg-white text-[#031b40] border-r-[6px] border-[#fa5902] flex items-center p-8 md:p-12 md:pl-16 shadow-lg md:clip-mission-card"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
                  {/* Custom Double Ring Icon Container */}
                  <div className="relative shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-dashed border-[#fa5902]/30 p-2">
                    <div className="w-full h-full rounded-full border border-[#031b40]/10 flex items-center justify-center bg-gray-50/50">
                      <Cog className="w-10 h-10 text-[#031b40]" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-2xl font-black tracking-wider text-[#031b40] uppercase">
                      {mission.title}
                    </h3>
                    <span className="block w-8 h-[3px] bg-[#fa5902] mt-2 mb-4 mx-auto sm:mx-0" />
                    <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#031b40]/70 font-medium">
                      {mission.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ▌ Center Bottom Skewed Navy Tab with Orange Slashes */}
          <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] z-10">
            <div className="bg-[#031b40] border-[3px] border-white px-8 py-3.5 skew-x-[-28deg] flex items-center gap-[5px] shadow-md rounded-tl-sm">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-[11px] w-[5.5px] bg-[#fa5902] skew-x-[-5deg]"
                />
              ))}
            </div>
          </div>

        </div>
      {/* Clip path styles for desktop visual slide alignment */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:clip-vision {
            clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%);
          }
          .md\\:clip-mission-card {
            clip-path: polygon(28px 0, 100% 0, 100% 100%, 0 100%, 0 28px);
          }
        }
        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-slide-right {
          animation: slide-right 1.2s ease-in-out infinite;
        }
      `}</style>
      </Container>
    </section>
  );
}

function WhyChooseSection() {
  const { whyChoose } = aboutPageData;

  const flaticonMap: Record<string, string> = {
    gauge: "/icons/high-efficiency.png",
    factory: "/icons/primary-crushing.png",
    wrench: "/icons/cost-effective.png",
    users: "/icons/reliable-performace.png",
    globe: "/icons/screening.png",
    shield: "/icons/consistance-quality.png",
  };

  return (
    <section className="relative overflow-hidden bg-white py-[35px]">
      {/* Industrial grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Faint gear watermark top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] opacity-[0.02] hidden lg:block"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M100 30a70 70 0 1 1 0 140 70 70 0 0 1 0-140Zm0 20a50 50 0 1 0 0 100 50 50 0 0 0 0-100Z"
            fill="#092a5c"
          />
          <path
            d="M93 0h14v30H93V0Zm0 170h14v30H93v-30ZM0 93h30v14H0V93Zm170 0h30v14h-30V93ZM28 28l10 10-21 21-10-10L28 28Zm134 134 10 10-21 21-10-10 21-21ZM162 28l-10 10 21 21 10-10-21-21ZM28 162l-10 10 21 21 10-10-21-21Z"
            fill="#092a5c"
          />
        </svg>
      </div>

      <Container className="relative">
        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#fa5902]">
              {whyChoose.eyebrow}
            </p>
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
          </div>

          {/* Headline */}
          <h2 className="headline text-[38px] md:text-[46px] leading-[1.1] font-black uppercase tracking-tight text-[#031b40]">
            {whyChoose.title} <span className="text-[#fa5902]">{whyChoose.highlight}</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-[1.65] text-[#031b40]/75 font-medium">
            {whyChoose.subtitle}
          </p>
        </div>

        {/* ── Cards 3×2 Grid ── */}
        <div className="mx-auto mt-9 grid max-w-[1520px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.cards.map((card) => (
            <article
              className="group relative flex items-start gap-5 rounded-xl border border-slate-100 bg-white p-6 shadow-[0_12px_38px_rgba(3,27,64,0.04)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(3,27,64,0.08)] border-b-[4px] border-b-[#fa5902]"
              key={card.title}
            >
              {/* Hexagon Container */}
              <div className="relative shrink-0 w-20 h-20 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#031b40]/5 fill-[#f8fafc] transition-colors duration-300 group-hover:text-[#fa5902]/10">
                  <polygon
                    points="50,3 97,27 97,73 50,97 3,73 3,27"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="relative z-10 flex items-center justify-center">
                  <Image
                    src={flaticonMap[card.icon] ?? "/icons/high-efficiency.png"}
                    alt={card.title}
                    width={57}
                    height={57}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-black uppercase tracking-wider text-[#031b40] leading-[1.3]">
                  {card.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-2 block h-[3px] w-6 bg-[#fa5902]"
                />
                <p className="mt-3 text-[13px] leading-[1.6] text-slate-500 font-medium">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* ── Bottom Dark Bar ── */}
      <div className="relative mt-16 bg-[#031b40] text-white py-6 overflow-hidden">
        {/* Slanted overlay on the right */}
        <div 
          className="absolute inset-y-0 right-0 w-[45%] bg-[#062454]/60 skew-x-[-28deg] translate-x-[15%] pointer-events-none border-l border-white/10 hidden md:block"
        />
        
        <Container className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Left orange slashes */}
            <span className="flex shrink-0 items-center gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[20px] w-[5.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
            {/* Text */}
            <div className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] leading-[1.5]">
              <p className="text-white">
                ENGINEERED FOR PERFORMANCE.
              </p>
              <p className="text-slate-300">
                BUILT FOR RELIABILITY. DELIVERED WORLDWIDE.
              </p>
            </div>
          </div>
          
          {/* Right dot pattern */}
          <div className="hidden sm:grid grid-cols-8 gap-[6px] opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="inline-block h-[4px] w-[4px] rounded-full bg-[#fa5902]"
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

function ManufacturingSection() {
  const { manufacturing } = aboutPageData;

  const stepFlaticons: Record<string, string> = {
    settings: "/icons/reliable-performace.png",
    shield: "/icons/consistance-quality.png",
    wrench: "/icons/high-efficiency.png",
    building: "/icons/primary-crushing.png",
    award: "/icons/final-output.png",
  };

  return (
    <section className="relative overflow-hidden bg-white py-[35px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 industrial-grid opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 hidden h-[280px] w-[280px] opacity-[0.02] lg:block"
      >
        <svg className="h-full w-full" fill="none" viewBox="0 0 200 200">
          <path
            d="M100 30a70 70 0 1 1 0 140 70 70 0 0 1 0-140Zm0 20a50 50 0 1 0 0 100 50 50 0 0 0 0-100Z"
            fill="#092a5c"
          />
          <path
            d="M93 0h14v30H93V0Zm0 170h14v30H93v-30ZM0 93h30v14H0V93Zm170 0h30v14h-30V93ZM28 28l10 10-21 21-10-10L28 28Zm134 134 10 10-21 21-10-10 21-21ZM162 28l-10 10 21 21 10-10-21-21ZM28 162l-10 10 21 21 10-10-21-21Z"
            fill="#092a5c"
          />
        </svg>
      </div>

      <Container className="relative">
        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#fa5902]">
              {manufacturing.eyebrow}
            </p>
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-[#fa5902]"
                />
              ))}
            </span>
          </div>

          <h2 className="headline text-[38px] md:text-[46px] leading-[1.1] font-black uppercase tracking-tight text-[#031b40]">
            {manufacturing.title} <span className="text-[#fa5902]">{manufacturing.highlight}</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-12 bg-[#fa5902]"
          />
          <p className="mx-auto mt-5 max-w-3xl text-[14px] sm:text-[15px] leading-[1.65] text-[#031b40]/75 font-medium">
            {manufacturing.subtitle}
          </p>
        </div>

        {/* ── Steps Horizontal Block ── */}
        <div className="mx-auto mt-8 grid grid-cols-2 md:grid-cols-5 border border-slate-100 bg-white shadow-[0_8px_30px_rgba(3,27,64,0.03)] rounded-xl py-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 max-w-[1520px]">
          {manufacturing.steps.map((step) => (
            <div
              className="flex flex-col items-center gap-4 px-3 py-3 text-center"
              key={step.title}
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-50/50">
                <Image
                  src={stepFlaticons[step.icon] ?? "/icons/reliable-performace.png"}
                  alt={step.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </span>
              <p className="text-[11px] font-black uppercase tracking-wider text-[#031b40] leading-[1.3] px-2">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* ── Cards Row ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-[1520px] mx-auto">
          {manufacturing.cards.map((card) => (
            <article
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_12px_38px_rgba(3,27,64,0.03)] hover:shadow-[0_16px_44px_rgba(3,27,64,0.06)] transition-all duration-300 border-b-[4px] border-b-[#fa5902] flex flex-col h-full"
              key={card.title}
            >
              <div className="image-hover relative h-[155px] overflow-hidden shrink-0">
                <Image
                  alt={card.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 639px) 100vw, 20vw"
                  src={card.image}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span
                  aria-hidden
                  className="block h-[3px] w-7 bg-[#fa5902] mb-3"
                />
                <h3 className="text-[13.5px] font-black uppercase text-[#031b40] tracking-wide mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[12.5px] leading-[1.55] text-slate-500 font-medium">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GlobalSection() {
  const { global: globalData } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white py-[35px]">
      {/* Faint grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Faint globe watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full border-[2px] border-primary/[0.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-[240px] w-[240px] rounded-full border-[2px] border-primary/[0.03]"
      />

      <Container className="relative">
        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[8px] w-[4px] skew-x-[-28deg] bg-secondary"
                />
              ))}
            </span>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-secondary">
              {globalData.eyebrow}
            </p>
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[8px] w-[4px] skew-x-[-28deg] bg-secondary"
                />
              ))}
            </span>
          </div>

          <h2 className="headline text-[clamp(2.15rem,5.2vw,3.45rem)] leading-[0.94] text-primary">
            {globalData.title}{" "}
            <span className="text-secondary">{globalData.highlight}</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-14 bg-secondary"
          />
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-[15px] whitespace-pre-line">
            {globalData.subtitle}
          </p>
        </div>

        {/* ── Map + Callout ── */}
        <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_290px] lg:items-center">
          {/* Map image */}
          <div className="relative min-h-[250px] overflow-hidden rounded-xl sm:min-h-[310px]">
            <Image
              alt="World map showing Pithal Machines global presence across continents"
              className="object-contain"
              fill
              sizes="(max-width: 1023px) 100vw, 70vw"
              src={globalData.mapImage}
            />
          </div>

          {/* Right callout card */}
          <div className="rounded-xl border border-border/80 bg-white p-6 shadow-[0_8px_28px_rgba(3,27,64,0.08)]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/15 text-secondary">
              <Icon name={globalData.callout.icon} size={28} />
            </span>
            <h3 className="headline mt-4 text-[15px] tracking-[0.08em] text-primary leading-[1.35] whitespace-pre-line sm:text-[16px]">
              {globalData.callout.title}
            </h3>
            <p className="mt-4 text-[13px] leading-[1.7] text-text-muted">
              {globalData.callout.text}
            </p>
          </div>
        </div>

        {/* ── Bottom 4 Feature Cards ── */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {globalData.cards.map((card) => (
            <article
              className="group relative flex gap-4 rounded-xl border border-border/80 bg-white p-5 shadow-[0_6px_24px_rgba(3,27,64,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(3,27,64,0.10)]"
              key={card.title}
            >
              {/* Orange top bar */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-secondary"
              />

              {/* Icon */}
              <span className="mt-1 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-primary/15 bg-white text-secondary transition-colors duration-300 group-hover:border-secondary/40">
                <Icon name={card.icon} size={24} />
              </span>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="headline text-[12px] tracking-[0.1em] text-primary leading-[1.3] sm:text-[13px]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.6] text-text-muted sm:text-[13px]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustriesSection() {
  const { industries } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-[35px]">
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Gear watermark top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] opacity-[0.025]"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M100 30a70 70 0 1 1 0 140 70 70 0 0 1 0-140Zm0 20a50 50 0 1 0 0 100 50 50 0 0 0 0-100Z"
            fill="#092a5c"
          />
          <path
            d="M93 0h14v30H93V0Zm0 170h14v30H93v-30ZM0 93h30v14H0V93Zm170 0h30v14h-30V93ZM28 28l10 10-21 21-10-10L28 28Zm134 134 10 10-21 21-10-10 21-21ZM162 28l-10 10 21 21 10-10-21-21ZM28 162l-10 10 21 21 10-10-21-21Z"
            fill="#092a5c"
          />
        </svg>
      </div>

      <Container className="relative">
        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[8px] w-[4px] skew-x-[-28deg] bg-secondary"
                />
              ))}
            </span>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-secondary">
              {industries.eyebrow}
            </p>
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[8px] w-[4px] skew-x-[-28deg] bg-secondary"
                />
              ))}
            </span>
          </div>

          <h2 className="headline text-[clamp(2.15rem,5.2vw,3.45rem)] leading-[0.94] text-primary">
            {industries.title}{" "}
            <span className="text-secondary">{industries.highlight}</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-14 bg-secondary"
          />
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-[15px] whitespace-pre-line">
            {industries.subtitle}
          </p>
        </div>

        {/* ── 6-Column Cards ── */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {industries.cards.map((industry) => (
            <article
              className="group relative overflow-visible rounded-xl border border-border/80 bg-white shadow-[0_6px_24px_rgba(3,27,64,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(3,27,64,0.10)]"
              key={industry.title}
            >
              {/* Image */}
              <div className="relative h-[140px] overflow-hidden rounded-t-xl">
                <Image
                  alt={industry.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 16vw"
                  src={industry.image}
                />
              </div>

              {/* Overlapping icon circle */}
              <div className="flex justify-center -mt-6 relative z-[2]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-white ring-[3px] ring-white shadow-[0_4px_12px_rgba(3,27,64,0.2)]">
                  <Icon name={industry.icon} className="text-white" size={20} />
                </span>
              </div>

              {/* Content */}
              <div className="px-4 pb-5 pt-3 text-center">
                <span
                  aria-hidden
                  className="mx-auto block h-[2.5px] w-8 bg-secondary"
                />
                <h3 className="headline mt-3 text-[12px] tracking-[0.1em] text-primary sm:text-[13px]">
                  {industry.title}
                </h3>
                <p className="mt-2 text-[11px] leading-[1.55] text-text-muted sm:text-[12px]">
                  {industry.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  const { values } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-[35px]">
      {/* Decorative dot grid top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 hidden h-32 w-32 opacity-25 lg:block"
        style={{
          backgroundImage: "radial-gradient(#475569 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Decorative blueprint gear background bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 hidden opacity-[0.025] text-primary lg:block"
      >
        <svg width="350" height="350" viewBox="0 0 100 100" fill="currentColor">
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="47"
              y="18"
              width="6"
              height="10"
              rx="1.5"
              fill="currentColor"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <Container className="relative z-10 pb-[35px]">
        {/* We wrap the whole grid in relative to place the connecting lines absolute on desktop */}
        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <Eyebrow>{values.eyebrow}</Eyebrow>
            <h2 className="headline mt-4 text-[clamp(2rem,4.6vw,3rem)] font-black leading-[1.02] text-primary">
              BUILT ON VALUES.
              <br />
              <span className="text-secondary">DRIVEN BY PURPOSE.</span>
            </h2>
            <span className="mt-6 block h-[1px] w-full bg-slate-200/80" />
            <p className="mt-6 text-sm leading-relaxed text-text-muted max-w-md">
              {values.description}
            </p>

            {/* Circular Image Container */}
            <div className="relative mx-auto mt-9 flex aspect-square w-full max-w-[280px] items-center justify-center lg:mx-0 lg:max-w-[320px]">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-slate-200/70" />
              <div className="absolute inset-[14px] rounded-full border border-slate-200/90" />
              <div className="absolute inset-[28px] rounded-full border border-slate-300" />

              {/* Dynamic arcs overlay */}
              <div className="absolute inset-0 pointer-events-none -rotate-[30deg]">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#031b40"
                    strokeWidth="1.5"
                    strokeDasharray="35 180"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#ff5a00"
                    strokeWidth="1.5"
                    strokeDasharray="55 180"
                    strokeDashoffset="-115"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Decorative nodes */}
              <span className="absolute top-[8%] right-[22%] h-2 w-2 rounded-full bg-secondary" />
              <span className="absolute bottom-[20%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
              <span className="absolute top-[50%] left-[2%] h-1 w-1 rounded-full bg-slate-300" />

              {/* The Image inside */}
              <div className="absolute inset-[36px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_16px_36px_rgba(3,27,64,0.12)] bg-white">
                <Image
                  alt="Pithal manufacturing plant floor values"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 300px, 350px"
                  src={values.image}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Connecting Lines SVG (Desktop only) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
            <svg className="h-full w-full" viewBox="0 0 1200 800" fill="none">
              {/* Node connecting paths */}
              <path
                d="M 280 435 C 330 435, 390 140, 520 140"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M 290 445 C 340 445, 385 245, 520 245"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M 295 455 C 345 455, 380 350, 520 350"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M 295 465 C 345 465, 380 455, 520 455"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M 290 475 C 340 475, 385 560, 520 560"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M 280 485 C 330 485, 390 665, 520 665"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Little dots at endpoints */}
              <circle cx="280" cy="435" r="2.5" fill="#ff5a00" />
              <circle cx="290" cy="445" r="2.5" fill="#031b40" />
              <circle cx="295" cy="455" r="2.5" fill="#ff5a00" />
              <circle cx="295" cy="465" r="2.5" fill="#031b40" />
              <circle cx="290" cy="475" r="2.5" fill="#ff5a00" />
              <circle cx="280" cy="485" r="2.5" fill="#031b40" />
            </svg>
          </div>

          {/* Right Column (Values List) */}
          <div className="relative z-10 flex flex-col gap-6 lg:pl-12">
            {values.items.map((item) => (
              <div
                className="flex gap-5 items-start border-b border-slate-200/70 last:border-0 pb-6 mb-2 last:pb-0 last:mb-0"
                key={item.title}
              >
                {/* Badge circle with icon */}
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-[0_6px_16px_rgba(3,27,64,0.04)]">
                  {/* Rotating decorative orange arc segment */}
                  <svg
                    className="absolute -inset-[1px] h-[66px] w-[66px] -rotate-[120deg] pointer-events-none"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-secondary"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="22 100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>

                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1.5">
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-primary flex items-center">
                    {item.title}
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary ml-2" />
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Navy Bottom Banner */}
      <div className="relative z-10 border-t border-white/10 bg-[#031b40] py-6 text-white">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {values.bottomItems.map((item, idx) => {
              const IconComponent = icons[item.icon] ?? Award;
              return (
                <div
                  className={cn(
                    "flex items-center gap-4 py-2",
                    idx > 0 && "sm:pl-8 lg:pl-12",
                  )}
                  key={item.title}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.14em] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/50">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

function ImpactSection() {
  const { impact } = aboutPageData;

  return (
    <section className="overflow-hidden bg-white">
      <div className="relative flex min-h-[230px] items-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,#f7f9fc_55%,#eef2f7_100%)] py-[35px] sm:min-h-[250px] lg:min-h-[270px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 industrial-grid opacity-35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 bottom-0 hidden h-[180px] w-[360px] opacity-[0.11] sm:block lg:h-[215px] lg:w-[430px]"
        >
          <Image
            alt=""
            className="object-contain object-left-bottom grayscale"
            fill
            sizes="430px"
            src="/images/about/our-foundation-1.png"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-8 hidden h-[265px] w-[300px] text-primary opacity-[0.055] md:block lg:right-0 lg:h-[300px] lg:w-[360px]"
        >
          <svg
            className="h-full w-full"
            fill="none"
            viewBox="0 0 360 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[{ cx: 165, cy: 72, r: 48 }, { cx: 238, cy: 190, r: 63 }, { cx: 314, cy: 68, r: 73 }].map(
              (gear) => (
                <g key={`${gear.cx}-${gear.cy}`}>
                  {Array.from({ length: 16 }).map((_, index) => (
                    <rect
                      height={gear.r * 0.28}
                      key={index}
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1"
                      transform={`rotate(${index * 22.5} ${gear.cx} ${gear.cy})`}
                      width={gear.r * 0.12}
                      x={gear.cx - gear.r * 0.06}
                      y={gear.cy - gear.r * 1.12}
                    />
                  ))}
                  <circle
                    cx={gear.cx}
                    cy={gear.cy}
                    r={gear.r}
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx={gear.cx}
                    cy={gear.cy}
                    r={gear.r * 0.62}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx={gear.cx}
                    cy={gear.cy}
                    r={gear.r * 0.24}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </g>
              ),
            )}
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-[1040px] text-center">
            <div className="mb-4 flex items-center justify-center gap-4 text-secondary">
              <span className="flex items-center gap-[5px]" aria-hidden>
                {[0, 1, 2].map((index) => (
                  <span
                    className="block h-[9px] w-[6px] skew-x-[-30deg] bg-current"
                    key={index}
                  />
                ))}
              </span>
              <p className="text-sm font-black uppercase tracking-[0.06em] sm:text-lg">
                {impact.eyebrow}
              </p>
              <span className="flex items-center gap-[5px]" aria-hidden>
                {[0, 1, 2].map((index) => (
                  <span
                    className="block h-[9px] w-[6px] skew-x-[-30deg] bg-current"
                    key={index}
                  />
                ))}
              </span>
            </div>
            <h2 className="headline text-[clamp(2.45rem,6.5vw,4.25rem)] leading-[0.94] text-primary">
              {impact.title}{" "}
              <span className="text-secondary">{impact.highlight}</span>
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-6 block h-[2px] w-14 bg-secondary sm:mt-7"
            />
            <p className="mx-auto mt-5 max-w-[665px] whitespace-pre-line text-sm font-medium leading-[1.55] text-primary-dark sm:text-base lg:text-lg">
              {impact.subtitle}
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-[#08182c]">
        <div className="w-full">
          <div className="relative aspect-[1535/699] w-full select-none">
            <Image
              alt="Pithal Machines global impact journey timeline milestones"
              className="object-cover object-top"
              fill
              priority
              sizes="100vw"
              src="/images/about/global-impact.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function renderCertIcon(iconName: string) {
  switch (iconName.toLowerCase()) {
    case "iso":
      return (
        <svg className="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="26" fill="#f8fafc" />
          <circle cx="32" cy="32" r="22" stroke="#071c3b" strokeWidth="2.5" />
          <path d="M10 32h44M32 10c7 7 10.5 14.4 10.5 22S39 47 32 54M32 10C25 17 21.5 24.4 21.5 32S25 47 32 54M14 20.5h36M14 43.5h36" stroke="#071c3b" strokeLinecap="round" strokeWidth="1.8" />
          <rect x="12.5" y="22.5" width="39" height="19" rx="2.5" fill="#071c3b" />
          <text x="32" y="37" fill="white" fontSize="17" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="-1">ISO</text>
        </svg>
      );
    case "award":
      return (
        <svg className="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m21 39.5-4.7 16.8L32 48l15.7 8.3L43 39.5" fill="#fa5902" stroke="#071c3b" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="m26.8 42.3-2 7 7.2-3.8 7.2 3.8-2-7" fill="#071c3b" />
          <circle cx="32" cy="27" r="20" fill="#071c3b" />
          <circle cx="32" cy="27" r="15.2" stroke="#fa5902" strokeDasharray="3 3" strokeWidth="2" />
          <circle cx="32" cy="27" r="8.5" fill="#fa5902" />
          <path d="m27.7 26.8 3 3.2 6.5-6.8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </svg>
      );
    case "shield":
      return (
        <svg className="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 29C14.8 16 25 9.5 32 9.5S49.2 16 51 29H13Z" fill="#fa5902" stroke="#071c3b" strokeLinejoin="round" strokeWidth="2.3" />
          <path d="M26 10.8c3.8-1.2 8.2-1.2 12 0v10H26v-10Z" fill="white" stroke="#071c3b" strokeWidth="2" />
          <path d="M32 9v12" stroke="#fa5902" strokeLinecap="round" strokeWidth="2" />
          <path d="M10 29h44v5H10v-5Z" fill="white" stroke="#071c3b" strokeLinejoin="round" strokeWidth="2.3" />
          <rect x="16" y="36" width="32" height="13" rx="6.5" fill="#071c3b" />
          <circle cx="25" cy="42.5" r="3.2" fill="white" />
          <circle cx="39" cy="42.5" r="3.2" fill="white" />
          <path d="M28.5 42.5h7" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="36" r="15" fill="#071c3b" />
          {Array.from({ length: 10 }).map((_, index) => (
            <path d="M25 16v6" key={index} stroke="#071c3b" strokeLinecap="round" strokeWidth="4" transform={`rotate(${index * 36} 25 36)`} />
          ))}
          <circle cx="25" cy="36" r="6" fill="#eef3f8" />
          <path d="M25 27v9l7 4" stroke="#fa5902" strokeLinecap="round" strokeWidth="2.4" />
          <rect x="31" y="12" width="27" height="38" rx="3.5" fill="white" stroke="#071c3b" strokeWidth="2.2" />
          <path d="M39 22h12M39 30h12M39 38h7" stroke="#071c3b" strokeLinecap="round" strokeWidth="2" />
          <path d="M39 22h8M39 38h5" stroke="#fa5902" strokeLinecap="round" strokeWidth="2.5" />
          <circle cx="53" cy="46" r="7" fill="#fa5902" />
          <path d="m49.7 45.8 2.3 2.3 4-4.4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "leaf":
      return (
        <svg className="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="white" stroke="#fa5902" strokeWidth="3" />
          <path d="M14 46c11-4.5 18-15.5 22-31 3 13.5 8.5 23.5 15.5 30" stroke="#071c3b" strokeLinecap="round" strokeWidth="2.4" />
          <path d="M35 20c-8.6-6.7-18.2-8.4-29-5.2 1.2 10.2 6.2 17.6 15 22.2 4.2-6.5 8.9-12 14-17Z" fill="#59b83f" stroke="#071c3b" strokeLinejoin="round" strokeWidth="2" />
          <path d="M35 20c7.2-4.2 14.8-5 23-2.5-1.1 8.3-5.1 14.3-12 18-3.2-5.5-6.9-10.7-11-15.5Z" fill="#7ed957" stroke="#071c3b" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 23c5.5.7 11.6 3.4 18.5 8M43 24c-3.5 1.2-6.9 3.3-10 6.2" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function CertificationsSection() {
  const { certifications } = aboutPageData;

  return (
    <section
      className="relative scroll-mt-[6.25rem] overflow-hidden bg-[#edf2f7]"
      id="certifications"
    >
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,#f9fbfd_56%,#edf2f7_100%)] py-[35px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 industrial-grid opacity-35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 bottom-[-18px] hidden h-[175px] w-[360px] opacity-[0.13] sm:block lg:h-[215px] lg:w-[440px]"
        >
          <Image
            alt=""
            className="object-contain object-left-bottom grayscale"
            fill
            sizes="440px"
            src="/images/about/our-foundation-1.png"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-4 hidden h-[245px] w-[300px] text-primary opacity-[0.06] md:block lg:right-0 lg:h-[285px] lg:w-[360px]"
        >
          <svg
            className="h-full w-full"
            fill="none"
            viewBox="0 0 360 285"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[{ cx: 168, cy: 70, r: 46 }, { cx: 242, cy: 186, r: 62 }, { cx: 316, cy: 66, r: 72 }].map(
              (gear) => (
                <g key={`${gear.cx}-${gear.cy}`}>
                  {Array.from({ length: 16 }).map((_, index) => (
                    <rect
                      height={gear.r * 0.28}
                      key={index}
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1"
                      transform={`rotate(${index * 22.5} ${gear.cx} ${gear.cy})`}
                      width={gear.r * 0.12}
                      x={gear.cx - gear.r * 0.06}
                      y={gear.cy - gear.r * 1.12}
                    />
                  ))}
                  <circle
                    cx={gear.cx}
                    cy={gear.cy}
                    r={gear.r}
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx={gear.cx}
                    cy={gear.cy}
                    r={gear.r * 0.62}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx={gear.cx}
                    cy={gear.cy}
                    r={gear.r * 0.24}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </g>
              ),
            )}
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="mb-5 flex items-center justify-center gap-4 text-secondary">
              <span className="flex items-center gap-[5px]" aria-hidden>
                {[0, 1, 2].map((index) => (
                  <span
                    className="block h-[8px] w-[6px] skew-x-[-30deg] bg-current"
                    key={index}
                  />
                ))}
              </span>
              <p className="text-[12px] font-black uppercase tracking-[0.05em] sm:text-base">
                Our Standards
              </p>
              <span className="flex items-center gap-[5px]" aria-hidden>
                {[0, 1, 2].map((index) => (
                  <span
                    className="block h-[8px] w-[6px] skew-x-[-30deg] bg-current"
                    key={index}
                  />
                ))}
              </span>
            </div>
            <h2 className="headline text-[clamp(2.45rem,6.3vw,4rem)] leading-[0.94] text-primary">
              Certified. <span className="text-secondary">Committed.</span>
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-6 block h-[2px] w-14 bg-secondary"
            />
            <p className="mx-auto mt-4 max-w-[640px] text-sm font-medium leading-[1.55] text-primary-dark sm:text-base">
              Our processes, materials, and manufacturing systems adhere to
              globally recognized standards that ensure{" "}
              <span className="font-black">quality, safety, and reliability</span>{" "}
              in everything we build.
            </p>
          </div>
        </Container>
      </div>

      <div className="relative border-y border-white/70 bg-[#edf2f7] pb-[35px] shadow-[inset_0_18px_38px_rgba(3,27,64,0.08)]">
        <Container className="relative z-10">
          <div className="relative mx-auto flex w-full max-w-[820px] items-center justify-center py-3">
            <span className="absolute inset-x-0 top-1/2 h-px bg-primary/10" />
            <span className="absolute left-[18%] top-0 hidden h-4 w-px bg-secondary sm:block" />
            <span className="absolute right-[18%] top-0 hidden h-4 w-px bg-secondary sm:block" />
            <span className="relative bg-[#edf2f7] px-5 text-center text-xs font-black uppercase tracking-[0.12em] text-primary sm:text-sm">
              OUR COMPLIANCE & STANDARDS
            </span>
          </div>

          <div className="relative mt-4 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {certifications.map((item, idx) => (
              <article
                className="relative flex flex-col items-center px-4 text-center lg:min-h-[178px] lg:border-r lg:border-primary/10 lg:last:border-r-0"
                key={item.title}
              >
                <div className="relative flex h-[86px] w-[86px] items-center justify-center rounded-full border border-white bg-[#f4f7fb] shadow-[inset_0_2px_8px_rgba(3,27,64,0.05),0_12px_26px_rgba(3,27,64,0.09)]">
                  <span className="absolute inset-[8px] rounded-full border border-primary/5 bg-white shadow-[0_7px_15px_rgba(3,27,64,0.08)]" />
                  <svg
                    aria-hidden
                    className="absolute inset-[-3px] h-[92px] w-[92px] -rotate-90"
                    viewBox="0 0 110 110"
                  >
                    <circle
                      cx="55"
                      cy="55"
                      fill="none"
                      r="51"
                      stroke="#fa5902"
                      strokeDasharray="74 260"
                      strokeLinecap="round"
                      strokeWidth="2.2"
                    />
                    <circle
                      cx="55"
                      cy="55"
                      fill="none"
                      r="43"
                      stroke="#d7e0eb"
                      strokeDasharray="2 5"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="relative z-10 scale-[1.08]">
                    {renderCertIcon(item.icon)}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-black text-primary">
                  {item.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-2 block h-[2px] w-7 bg-secondary"
                />
                <p className="mt-2 max-w-[170px] text-[10px] font-medium leading-[1.35] text-primary-dark/80">
                  {item.text}
                </p>
                {idx < certifications.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute right-[-5px] top-[70px] hidden h-2.5 w-2.5 rounded-full bg-secondary lg:block"
                  />
                )}
              </article>
            ))}
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-white bg-white/86 px-5 py-4 shadow-[0_18px_34px_rgba(3,27,64,0.12)] sm:px-7">
            <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_0.88fr] lg:items-center">
              <div className="flex gap-5">
                <span className="headline shrink-0 text-[4.25rem] leading-[0.8] text-secondary">
                  &ldquo;
                </span>
                <p className="max-w-[620px] pt-2 text-sm font-bold leading-6 text-primary-dark">
                  We continuously work towards meeting the{" "}
                  <span className="font-black italic text-secondary">
                    highest global benchmarks
                  </span>{" "}
                  to ensure excellence in everything we build.
                </p>
              </div>
              <div className="relative min-h-[86px] overflow-hidden rounded-lg sm:min-h-[96px]">
                <Image
                  alt="Global benchmark map with orange connection arcs"
                  className="object-cover object-center mix-blend-multiply"
                  fill
                  sizes="(max-width: 1023px) 100vw, 560px"
                  src="/images/about/global-benchmarks-map.png"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { cta } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,#f8fafc_52%,#edf2f7_100%)] py-[35px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 industrial-grid opacity-25"
      />
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[86%] w-[470px] opacity-[0.1] lg:block">
        <Image
          alt=""
          className="object-contain object-bottom grayscale"
          fill
          sizes="470px"
          src="/images/about/our-foundation-1.png"
        />
      </div>
      <div
        aria-hidden
        className="absolute right-8 top-6 hidden items-center gap-3 text-secondary lg:flex"
      >
        {[0, 1, 2].map((index) => (
          <span
            className="block h-8 w-5 skew-x-[-28deg] rounded-sm border border-current/35"
            key={index}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="absolute bottom-5 right-6 hidden items-center gap-1.5 text-secondary lg:flex"
      >
        {[0, 1, 2].map((index) => (
          <span
            className="block h-1.5 w-2.5 skew-x-[-28deg] bg-current"
            key={index}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-5 bg-secondary" />
              <span className="text-[12px] font-black uppercase tracking-[0.08em] text-secondary">
                LET&apos;S BUILD
              </span>
            </div>
            <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.05] text-primary">
              {cta.title}{" "}
              <span className="text-secondary">{cta.highlight}</span>
            </h2>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-6 text-primary-dark">
              Whether it&apos;s a new project, a complex challenge, or a
              long-term partnership, we&apos;re ready to engineer solutions that
              drive <span className="font-black italic text-secondary">real impact.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:pb-1">
            <Button
              className="min-h-[46px] justify-center rounded-md px-5 text-[10px]"
              href={cta.primary.href}
              variant="primary"
            >
              {cta.primary.label}
              <ArrowRight aria-hidden size={15} />
            </Button>
            <Button
              className="min-h-[46px] justify-center rounded-md border-primary/45 bg-white/70 px-5 text-[10px]"
              href={cta.secondary.href}
              variant="outlineNavy"
            >
              <svg
                aria-hidden
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="22" x2="11" y1="2" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {cta.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <WhoWeAreSection />
        <VisionMissionSection />
        <WhyChooseSection />
        <ManufacturingSection />
        <GlobalSection />
        <IndustriesSection />
        <ValuesSection />
        <ImpactSection />
        <CertificationsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
