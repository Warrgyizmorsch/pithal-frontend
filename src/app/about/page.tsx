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
import { Card } from "@/components/common/Card";
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
        "accent-bars text-[10px] font-black uppercase tracking-[0.24em] text-secondary",
        className,
      )}
    >
      {children}
    </p>
  );
}

function SplitHeading({
  title,
  highlight,
  className,
}: {
  title: string;
  highlight: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "headline text-[clamp(2rem,5vw,3.55rem)] text-primary",
        className,
      )}
    >
      {title} <span className="text-secondary">{highlight}</span>
    </h2>
  );
}

function HeroSection() {
  const { hero, stats } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white pb-10 lg:pb-12">
      <div className="relative min-h-[430px] overflow-hidden lg:min-h-[500px]">
        <Image
          alt={hero.image.alt}
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={hero.image.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_25%,rgba(255,255,255,.86)_43%,rgba(255,255,255,.18)_72%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[55%] industrial-grid opacity-60" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent"
        />

        <Container className="relative z-10 flex min-h-[430px] flex-col justify-start py-7 lg:min-h-[500px] lg:py-9">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-3 text-sm font-black text-primary"
          >
            <Link
              className="flex items-center gap-2 transition-colors hover:text-secondary"
              href="/"
            >
              <Home aria-hidden size={16} />
              Home
            </Link>
            <ChevronRight aria-hidden size={16} />
            <span className="text-secondary">About Us</span>
          </nav>

          <div className="max-w-[650px]">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="headline mt-4 text-[clamp(2.35rem,5.2vw,4.35rem)] text-primary">
              {hero.title}
              <span className="block text-secondary">{hero.highlight}</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-text-dark sm:text-base">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button
                className="min-h-[52px] px-6 text-[11px] shadow-[0_10px_22px_rgba(250,89,2,0.24)]"
                href={hero.ctas[0].href}
                variant="primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
                  <Factory size={16} />
                </span>
                {hero.ctas[0].label}
                <ArrowRight aria-hidden size={18} />
              </Button>
              <Button
                className="min-h-[52px] border-secondary/35 bg-white/95 px-6 text-[11px] shadow-[0_10px_22px_rgba(3,27,64,0.08)]"
                href={hero.ctas[1].href}
                variant="outlineNavy"
              >
                <Headphones className="text-secondary" size={17} />
                {hero.ctas[1].label}
                <ArrowRight aria-hidden className="text-secondary" size={18} />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-[url('/images/industries/mining.jpg')] bg-cover bg-center opacity-95"
      >
        <div className="absolute inset-0 bg-primary-dark/50" />
      </div>

      <Container className="relative z-20 -mt-3 lg:-mt-6">
        <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_28px_70px_rgba(3,27,64,0.2)]">
          <div className="grid divide-y divide-border lg:grid-cols-[repeat(5,minmax(0,1fr))_1.65fr] lg:divide-x lg:divide-y-0">
            {stats.map((stat) => (
              <article
                className="flex min-h-[104px] items-center gap-3 px-5 py-4"
                key={stat.label}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Icon name={stat.icon} size={24} />
                </span>
                <div>
                  <p className="headline text-[28px] text-primary">
                    {stat.value}
                  </p>
                  <p className="max-w-[8rem] text-[11px] font-black leading-4 text-primary-dark">
                    {stat.label}
                  </p>
                </div>
              </article>
            ))}
            <article className="relative min-h-[104px] overflow-hidden bg-primary-dark text-white">
              <div className="flex h-full min-h-[104px] items-center gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                  <Play fill="currentColor" size={17} />
                </span>
                <div>
                  <p className="max-w-[8rem] text-xs font-black leading-5">
                    Watch Our {hero.video.label}
                  </p>
                  <ArrowRight
                    aria-hidden
                    className="mt-2 text-secondary"
                    size={16}
                  />
                </div>
                <div className="relative ml-auto hidden h-[62px] w-[112px] overflow-hidden rounded-lg border border-secondary/35 sm:block">
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
    <section className="bg-white py-16 lg:py-20">
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
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary whitespace-nowrap">
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
            <h2 className="headline text-[clamp(2.2rem,5.2vw,4rem)] leading-[0.92] text-primary">
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
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_rgba(3,27,64,0.07)]">
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
    <section className="relative overflow-hidden bg-[#f1f4f8] py-16 lg:py-20">
      {/* Blueprint grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Faint industrial image overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/about/our-foundation-1.png')] bg-cover bg-center opacity-[0.04]"
      />

      <Container className="relative">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow: /// OUR DIRECTION /// */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-secondary"
                />
              ))}
            </span>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              {visionMission.eyebrow}
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
          </div>
          <h2 className="headline text-[clamp(2.2rem,5.6vw,3.8rem)] leading-[0.92] text-primary">
            {visionMission.title}
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-14 bg-secondary"
          />
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-[15px] whitespace-pre-line">
            {visionMission.subtitle}
          </p>
        </div>

        {/* ── Cards Row ── */}
        <div className="relative mx-auto mt-12 flex max-w-5xl flex-col items-stretch gap-0 md:flex-row md:items-center">
          {/* ▌ Vision Card (dark, arrow-shaped) */}
          <div className="relative z-[2] flex-1">
            {/* Arrow/chevron shape via clip-path — desktop only */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-r-none bg-primary-dark text-white md:clip-arrow-right">
              {/* Subtle grid texture inside the dark card */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative flex items-start gap-5 p-8 pr-10 md:min-h-[200px] md:pr-16">
                {/* Icon */}
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-secondary/50 bg-white/[0.06]">
                  <Icon
                    name={vision.icon}
                    className="text-secondary"
                    size={28}
                  />
                </span>
                <div>
                  <h3 className="headline text-[clamp(1.1rem,2.2vw,1.4rem)] tracking-[0.1em] text-white">
                    {vision.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[13.5px] leading-[1.7] text-white/75">
                    {vision.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ▌ Centre hub icon (shared circle between cards) — desktop only */}
          <div className="relative z-[3] hidden md:flex -mx-7 items-center justify-center">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-primary-dark bg-white shadow-[0_8px_24px_rgba(3,27,64,0.16)]">
              <Icon
                name={mission.icon}
                className="text-primary-dark"
                size={28}
              />
            </span>
          </div>

          {/* ▌ Mission Card (white, arrow-shaped) */}
          <div className="relative z-[1] flex-1 mt-4 md:mt-0">
            <div className="relative overflow-hidden rounded-2xl md:rounded-l-none border-l-0 md:border-l-[3px] md:border-l-secondary bg-white shadow-[0_10px_30px_rgba(3,27,64,0.08)]">
              <div className="relative flex items-start gap-5 p-8 md:min-h-[200px] md:pl-12">
                {/* Icon (mobile only — hidden on desktop since the center hub shows it) */}
                <span className="flex md:hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary-dark/20 bg-primary-dark/[0.04]">
                  <Icon
                    name={mission.icon}
                    className="text-primary-dark"
                    size={28}
                  />
                </span>
                <div>
                  <h3 className="headline text-[clamp(1.1rem,2.2vw,1.4rem)] tracking-[0.1em] text-primary">
                    {mission.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[13.5px] leading-[1.7] text-text-muted">
                    {mission.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom orange accent slashes ── */}
        <div className="mt-10 flex items-center justify-center gap-[5px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              aria-hidden
              className="inline-block h-[8px] w-[4px] skew-x-[-28deg] bg-secondary"
            />
          ))}
        </div>
      </Container>

      {/* CSS for the arrow clip-path (desktop only) */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:clip-arrow-right {
            clip-path: polygon(0 0, calc(100% - 36px) 0, 100% 50%, calc(100% - 36px) 100%, 0 100%);
            border-radius: 16px 0 0 16px;
          }
        }
      `}</style>
    </section>
  );
}

function WhyChooseSection() {
  const { whyChoose } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Industrial grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Faint gear watermark top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] opacity-[0.03]"
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
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              {whyChoose.eyebrow}
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

          {/* Headline */}
          <h2 className="headline text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.92] text-primary">
            {whyChoose.title}{" "}
            <span className="text-secondary">{whyChoose.highlight}</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-14 bg-secondary"
          />
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-[15px]">
            {whyChoose.subtitle}
          </p>
        </div>

        {/* ── Cards 3×2 Grid ── */}
        <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.cards.map((card) => (
            <article
              className="group relative flex gap-5 rounded-xl border border-border/80 bg-white p-6 shadow-[0_6px_24px_rgba(3,27,64,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(3,27,64,0.10)]"
              key={card.title}
            >
              {/* Orange top accent bar */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-secondary"
              />

              {/* Icon */}
              <span className="mt-1 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-primary/15 bg-white text-secondary transition-colors duration-300 group-hover:border-secondary/40 group-hover:bg-secondary/[0.04]">
                <Icon name={card.icon} size={26} />
              </span>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="headline text-[13px] tracking-[0.1em] text-primary leading-[1.3]">
                  {card.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-2 block h-[2.5px] w-7 bg-secondary"
                />
                <p className="mt-3 text-[13px] leading-[1.65] text-text-muted">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* ── Bottom Dark Bar ── */}
      <div className="relative mt-14 overflow-hidden bg-primary-dark py-5">
        <Container className="relative flex items-center gap-4">
          {/* Left orange slashes */}
          <span className="flex shrink-0 items-center gap-[5px]">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                aria-hidden
                className="inline-block h-[18px] w-[5px] skew-x-[-22deg] bg-secondary"
              />
            ))}
          </span>
          {/* Text */}
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white sm:text-xs">
            {whyChoose.bottomBar}
          </p>
          {/* Spacer */}
          <span className="flex-1" />
          {/* Right dot pattern */}
          <span
            aria-hidden
            className="hidden shrink-0 sm:grid grid-cols-6 gap-[6px]"
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="inline-block h-[5px] w-[5px] rounded-full bg-secondary"
              />
            ))}
          </span>
        </Container>
      </div>
    </section>
  );
}

function ManufacturingSection() {
  const { manufacturing } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Faint gear watermarks */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] opacity-[0.03]"
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
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-[40%] h-[250px] w-[250px] opacity-[0.025]"
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

      {/* ── Hero Image Header ── */}
      <div className="relative min-h-[420px] sm:min-h-[480px]">
        {/* Background image */}
        <Image
          alt="Pithal Machines manufacturing floor"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={manufacturing.heroImage}
        />
        {/* Dark overlay gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/65 to-primary-dark/80"
        />

        {/* Header content */}
        <div className="relative z-[2] flex flex-col items-center justify-center px-6 pt-14 pb-24 text-center sm:pt-16 sm:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center gap-[4px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  aria-hidden
                  className="inline-block h-[8px] w-[4px] skew-x-[-28deg] bg-secondary"
                />
              ))}
            </span>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              {manufacturing.eyebrow}
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

          {/* Headline */}
          <h2 className="headline text-[clamp(2.4rem,6.5vw,4.5rem)] leading-[0.92] text-white">
            {manufacturing.title}{" "}
            <span className="text-secondary">{manufacturing.highlight}</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-5 block h-[3px] w-14 bg-secondary"
          />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-[15px]">
            {manufacturing.subtitle}
          </p>
        </div>

        {/* ── 5-Icon Steps Strip (overlapping bottom) ── */}
        <div className="absolute inset-x-0 bottom-0 z-[3] translate-y-1/2">
          <Container>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-0">
              {manufacturing.steps.map((step) => (
                <div
                  className="flex flex-col items-center gap-2 rounded-xl bg-white px-3 py-4 text-center shadow-[0_6px_20px_rgba(3,27,64,0.10)] sm:rounded-none sm:first:rounded-l-xl sm:last:rounded-r-xl sm:shadow-none sm:border-r sm:border-border/50 sm:last:border-r-0"
                  key={step.title}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-secondary">
                    <Icon name={step.icon} size={22} />
                  </span>
                  <p className="text-[9px] font-black uppercase tracking-[0.1em] text-primary leading-[1.4] sm:text-[10px]">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* ── 5-Column Image Cards ── */}
      <div className="relative z-[1] px-4 pt-20 pb-16 sm:px-6 lg:pt-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {manufacturing.cards.map((card) => (
              <article className="group" key={card.title}>
                {/* Image */}
                <div className="image-hover relative h-[185px] overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(3,27,64,0.10)] sm:h-[200px]">
                  <Image
                    alt={card.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 20vw"
                    src={card.image}
                  />
                </div>
                {/* Text */}
                <div className="mt-4 pl-1">
                  <span
                    aria-hidden
                    className="block h-[2.5px] w-8 bg-secondary"
                  />
                  <h3 className="headline mt-3 text-[12px] tracking-[0.1em] text-primary leading-[1.3] sm:text-[13px]">
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
      </div>
    </section>
  );
}

function GlobalSection() {
  const { global: globalData } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
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
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
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

          <h2 className="headline text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.92] text-primary">
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
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
          {/* Map image */}
          <div className="relative min-h-[320px] overflow-hidden rounded-xl sm:min-h-[380px]">
            <Image
              alt="World map showing Pithal Machines global presence across continents"
              className="object-contain"
              fill
              sizes="(max-width: 1023px) 100vw, 70vw"
              src={globalData.mapImage}
            />
          </div>

          {/* Right callout card */}
          <div className="rounded-xl border border-border/80 bg-white p-7 shadow-[0_8px_28px_rgba(3,27,64,0.08)]">
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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {globalData.cards.map((card) => (
            <article
              className="group relative flex gap-4 rounded-xl border border-border/80 bg-white p-6 shadow-[0_6px_24px_rgba(3,27,64,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(3,27,64,0.10)]"
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
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 lg:py-20">
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
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
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

          <h2 className="headline text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.92] text-primary">
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {industries.cards.map((industry) => (
            <article
              className="group relative overflow-visible rounded-xl border border-border/80 bg-white shadow-[0_6px_24px_rgba(3,27,64,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(3,27,64,0.10)]"
              key={industry.title}
            >
              {/* Image */}
              <div className="relative h-[160px] overflow-hidden rounded-t-xl">
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
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-16 lg:pt-20">
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

      <Container className="relative z-10 pb-16 lg:pb-20">
        {/* We wrap the whole grid in relative to place the connecting lines absolute on desktop */}
        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <Eyebrow>{values.eyebrow}</Eyebrow>
            <h2 className="headline mt-4 text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
              BUILT ON VALUES.
              <br />
              <span className="text-secondary">DRIVEN BY PURPOSE.</span>
            </h2>
            <span className="mt-6 block h-[1px] w-full bg-slate-200/80" />
            <p className="mt-6 text-sm leading-relaxed text-text-muted max-w-md">
              {values.description}
            </p>

            {/* Circular Image Container */}
            <div className="relative mx-auto lg:mx-0 mt-12 aspect-square w-full max-w-[320px] lg:max-w-[360px] flex items-center justify-center">
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
      <div className="border-t border-white/10 bg-[#031b40] py-8 text-white relative z-10">
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
    <section className="bg-white py-16 lg:py-20">
      {/* ── HTML Header with White Background ── */}
      <Container className="mb-12">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{impact.eyebrow}</Eyebrow>
          <h2 className="headline mt-4 text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
            FROM VISION TO <span className="text-secondary">GLOBAL IMPACT</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-14 bg-secondary"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-text-muted">
            Our journey is a story of passion, perseverance and progress.
            <br className="hidden sm:inline" />
            Each milestone reflects our commitment to engineering excellence and
            the trust of our customers worldwide.
          </p>
        </div>
      </Container>

      {/* ── Timeline Image (Cropped to show only the dark blue/navy cards) ── */}
      <div className="bg-[#08162b] py-12 lg:py-16">
        <Container>
          <div className="w-full overflow-x-auto pb-4 scrollbar-thin select-none">
            <div className="relative min-w-[900px] lg:min-w-0 aspect-[1535/469] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_16px_40px_rgba(3,27,64,0.15)] transition-all duration-300">
              <Image
                alt="Pithal Machines global impact journey timeline milestones"
                className="object-cover object-bottom"
                fill
                sizes="(max-width: 1200px) 100vw, 1535px"
                src="/images/about/global-impact.png"
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function renderCertIcon(iconName: string) {
  switch (iconName.toLowerCase()) {
    case "iso":
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" stroke="#031b40" strokeWidth="1.2" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2.5 7.5h19M2.5 16.5h19" strokeWidth="0.8" opacity="0.6" />
          <rect x="5.5" y="9" width="13" height="6" rx="1.5" fill="#031b40" />
          <text x="12" y="13.5" fontSize="4.8" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="white" letterSpacing="0.2">ISO</text>
        </svg>
      );
    case "award":
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 14l-2 8 6-3 6 8-2-8" stroke="#031b40" strokeWidth="1.5" fill="#ff5a00" />
          <path d="M10 15.5l-1 4.5 3-2 3 2-1-4.5" fill="#031b40" />
          <circle cx="12" cy="9" r="7.5" fill="#031b40" />
          <circle cx="12" cy="9" r="6" stroke="#ff5a00" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="12" cy="9" r="3.5" fill="#ff5a00" />
          <path d="m10.5 9 1 1 2-2" stroke="white" strokeWidth="1.5" />
        </svg>
      );
    case "shield":
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11c0-5 4-8 9-8s9 3 9 8H3z" fill="#ff5a00" stroke="#031b40" strokeWidth="1.5" />
          <path d="M10 3a10 10 0 0 1 4 0v3h-4V3z" fill="white" stroke="#031b40" strokeWidth="1.2" />
          <path d="M12 3v3" stroke="#031b40" strokeWidth="1" />
          <path d="M2 11h20v1.5H2V11z" fill="white" stroke="#031b40" strokeWidth="1.5" />
          <rect x="7" y="13.5" width="10" height="4.5" rx="2" fill="#031b40" stroke="#031b40" strokeWidth="1" />
          <circle cx="9.5" cy="15.5" r="1.2" fill="white" />
          <circle cx="14.5" cy="15.5" r="1.2" fill="white" />
          <path d="M12 15h0" stroke="white" strokeWidth="1.5" />
        </svg>
      );
    case "clipboard":
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="14" r="5" fill="#031b40" />
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d="M10 7.5v2"
              transform={`rotate(${i * 45} 10 14)`}
              stroke="#031b40"
              strokeWidth="2.5"
            />
          ))}
          <circle cx="10" cy="14" r="2" fill="white" />
          <rect x="12" y="4" width="10" height="13" rx="1.5" fill="white" stroke="#031b40" strokeWidth="1.5" />
          <line x1="15" y1="7.5" x2="19" y2="7.5" stroke="#ff5a00" strokeWidth="1.2" />
          <line x1="15" y1="10.5" x2="19" y2="10.5" stroke="#031b40" strokeWidth="1" />
          <line x1="15" y1="13.5" x2="17" y2="13.5" stroke="#ff5a00" strokeWidth="1" />
          <circle cx="20" cy="14" r="2.5" fill="#ff5a00" />
          <path d="m19 14 .7.7 1.3-1.3" stroke="white" strokeWidth="0.8" />
        </svg>
      );
    case "leaf":
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9.5" stroke="#ff5a00" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="8" fill="white" />
          <path d="M8 16c2-1 4-3 5-6 1 3 3 5 5 6" stroke="#031b40" strokeWidth="1.2" />
          <path d="M13 10c-1.5-1.5-3.5-2.5-6-2.5 0 2.5 1 4.5 2.5 6 1.5-1.5 2.5-2.5 3.5-3.5z" fill="#10b981" stroke="#031b40" strokeWidth="1" />
          <path d="M13 10c1.5-1 3-1.5 5-1.5 0 2-1 3.5-2.5 4.5-1-1-1.5-2-2.5-3z" fill="#10b981" stroke="#031b40" strokeWidth="1" />
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
    <section className="relative overflow-hidden bg-white py-16 lg:py-20" id="certifications">
      {/* Decorative background watermarks */}
      <div className="pointer-events-none absolute -left-16 -top-16 hidden opacity-[0.025] text-primary lg:block">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          {[...Array(12)].map((_, i) => (
            <rect key={i} x="47" y="18" width="6" height="10" rx="1.5" fill="currentColor" transform={`rotate(${i * 30} 50 50)`} />
          ))}
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our Standards</Eyebrow>
          <h2 className="headline mt-4 text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
            CERTIFIED. <span className="text-secondary">COMMITTED.</span>
          </h2>
          <span aria-hidden className="mx-auto mt-4 block h-[3px] w-14 bg-secondary" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-text-muted">
            Our processes, materials, and manufacturing systems adhere to globally recognized standards that ensure{" "}
            <span className="font-bold text-slate-800">quality, safety, and reliability</span> in everything we build.
          </p>
        </div>

        {/* Title Badge Block with exact bracket lines */}
        <div className="relative flex justify-center items-center my-14 w-full max-w-4xl mx-auto">
          <div className="absolute inset-x-0 h-[1px] bg-slate-200/80" />
          {/* Left drop line */}
          <div className="absolute left-[8%] right-[50%] top-0 h-[1px] bg-secondary flex items-start">
            <div className="h-4 w-[1px] bg-secondary" />
          </div>
          {/* Right drop line */}
          <div className="absolute left-[50%] right-[8%] top-0 h-[1px] bg-secondary flex items-start justify-end">
            <div className="h-4 w-[1px] bg-secondary" />
          </div>
          {/* Text in center */}
          <div className="relative bg-white px-6">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-primary sm:text-xs">
              OUR COMPLIANCE & STANDARDS
            </span>
          </div>
        </div>

        {/* 5-Column Grid with separators */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative">
          {certifications.map((item, idx) => (
            <div className="relative text-center flex flex-col items-center px-4" key={item.title}>
              {/* Custom SVG Icon Container with 3D Dish Effect */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 shadow-[inset_0_2px_5px_rgba(3,27,64,0.06),0_8px_20px_rgba(3,27,64,0.05)] transition-transform duration-300 hover:scale-105">
                {/* Inner white circle float shadow */}
                <div className="absolute inset-[6px] rounded-full bg-white shadow-[0_4px_12px_rgba(3,27,64,0.08)] flex items-center justify-center">
                  {renderCertIcon(item.icon)}
                </div>

                {/* Orange crescent arc at the top */}
                <svg className="absolute -inset-[2px] h-[100px] w-[100px] -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="#ff5a00"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="60 300"
                  />
                </svg>
              </div>
              
              <h3 className="mt-5 text-sm font-black uppercase tracking-[0.10em] text-primary">
                {item.title}
              </h3>
              
              {/* Small orange accent bar below title */}
              <span className="mx-auto block h-[2.5px] w-8 bg-secondary mt-2 mb-3" />
              
              <p className="mt-1 text-xs leading-relaxed text-text-muted">
                {item.text}
              </p>

              {/* Dotted Vertical Connector Dot for desktop */}
              {idx < 4 && (
                <div className="absolute right-[-16px] top-[40px] hidden lg:flex flex-col items-center h-[80px] pointer-events-none z-0">
                  <div className="w-[1px] flex-1 border-r border-dashed border-slate-200" />
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary my-1" />
                  <div className="w-[1px] flex-1 border-r border-dashed border-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCtaSection() {
  const { cta } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Industrial plant watermark background */}
      <div className="pointer-events-none absolute right-0 bottom-0 hidden lg:block h-[90%] w-[450px] opacity-[0.07] z-0 select-none">
        <Image
          src="/images/about/our-foundation-1.png"
          alt="Industrial plant sketch decoration"
          fill
          className="object-contain object-bottom grayscale"
        />
      </div>

      {/* 3 orange slanted bars in bottom-right */}
      <div className="absolute bottom-4 right-4 hidden lg:flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-5 w-2.5 skew-x-[-28deg] bg-secondary" />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left Column Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-6 bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                LET'S BUILD
              </span>
            </div>
            <h2 className="headline text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
              Let's Build Industrial Solutions <span className="text-secondary">Together.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-text-muted">
              Whether it's a new project, a complex challenge, or a long-term partnership, we're ready to engineer solutions that drive <span className="text-secondary font-black">real impact</span>.
            </p>
          </div>

          {/* Right Column Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-start lg:justify-end">
            <Button
              href="#contact"
              variant="primary"
              className="flex items-center justify-center gap-2 group text-xs font-black uppercase tracking-[0.14em] px-6 py-4"
            >
              LET'S WORK TOGETHER
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href="/global-presence"
              variant="outlineNavy"
              className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.14em] px-6 py-4"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              GET IN TOUCH
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
