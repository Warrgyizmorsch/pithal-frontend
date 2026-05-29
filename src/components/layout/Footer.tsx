import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { footerColumns } from "@/data/homeData";

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { label: "Facebook", icon: FaFacebookF, href: "#" },
  { label: "YouTube", icon: FaYoutube, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "WhatsApp", icon: FaWhatsapp, href: "#" },
];

const certifications = [
  { code: "ISO 9001:2015", label: "Quality Management", icon: "/images/certifications/iso-seal.svg" },
  { code: "CE Certified", label: "European Conformity", icon: "/images/certifications/ce-seal.svg" },
  { code: "ISO 14001:2015", label: "Environmental Management", icon: "/images/certifications/iso-seal.svg" },
  { code: "ISO 45001:2018", label: "Occupational Health & Safety", icon: "/images/certifications/iso-seal.svg" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-[1.05rem] font-bold uppercase text-primary">{children}</h3>
      <span aria-hidden className="mt-4 block h-[3px] w-9 bg-secondary" />
    </div>
  );
}

function FooterLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <li>
      <Link
        className="group flex items-center gap-3 text-[0.95rem] text-text-dark transition-colors hover:text-secondary"
        href={href}
      >
        <ChevronRight
          aria-hidden
          className="shrink-0 text-secondary transition-transform group-hover:translate-x-0.5"
          size={15}
          strokeWidth={2.8}
        />
        {children}
      </Link>
    </li>
  );
}

function BrandMark() {
  return (
    <Link aria-label="Pithal Machines Ltd. home" className="block w-full max-w-[20.5rem]" href="/">
      <Image
        alt="Pithal Machines Ltd. - Solutions That Drive Growth"
        className="h-auto w-full"
        height={140}
        src="/images/brand/pithal-footer-logo.svg"
        width={394}
      />
    </Link>
  );
}

export function Footer() {
  const navColumns = footerColumns.filter(
    (column) => column.title.toLowerCase() !== "certifications",
  );

  return (
    <footer className="border-t border-primary/20 bg-white" id="global">
      <Container className="max-w-[1585px] py-10 sm:py-12 xl:py-[4.25rem]">
        <div className="grid gap-x-8 gap-y-10 border-b border-primary/20 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.7fr_1.02fr_1.25fr_1fr_1.18fr_1.42fr] xl:gap-y-12 xl:pb-[3.7rem]">
          <div className="md:col-span-2 lg:col-span-1">
            <BrandMark />
            <p className="mt-7 max-w-[18rem] text-[0.95rem] leading-[1.72] text-text-dark sm:mt-10 sm:text-[1rem]">
              Engineering world-class crushing solutions and equipment that power
              industries, build infrastructure and shape a stronger tomorrow.
            </p>
            <span aria-hidden className="mt-7 block h-[3px] w-[7.1rem] bg-gradient-to-r from-primary to-secondary" />
            <address className="mt-8 space-y-4 not-italic text-[0.97rem] leading-[1.62] text-text-dark">
              <span className="flex items-start gap-4">
                <MapPin aria-hidden className="mt-1 shrink-0 text-primary" size={23} />
                <span>
                  <strong className="font-bold">Pithal Machines Ltd.</strong>
                  <br />
                  GIDC, Mehsana - 384002,
                  <br />
                  Gujarat, India.
                </span>
              </span>
              <a className="flex items-center gap-4 hover:text-secondary" href="tel:+919879716000">
                <Phone aria-hidden className="shrink-0 text-primary" size={21} />
                +91 98797 16000
              </a>
              <a className="flex items-center gap-4 break-all hover:text-secondary" href="mailto:info@pithalmachines.com">
                <Mail aria-hidden className="shrink-0 text-primary" size={22} />
                info@pithalmachines.com
              </a>
              <a className="flex items-center gap-4 break-all hover:text-secondary" href="https://www.pithalmachines.com">
                <Globe aria-hidden className="shrink-0 text-primary" size={22} />
                www.pithalmachines.com
              </a>
            </address>
          </div>

          {navColumns.map((column) => {
            const linkMap: Record<string, Record<string, string>> = {
              "Products": {
                "Jaw Crushers": "/products/crushers",
                "Cone Crushers": "/products/crushers",
                "Impact Crushers": "/products/crushers",
                "Vibrating Feeders": "/products/feeders",
                "Vibrating Screens": "/products/screening-solutions",
                "Mobile Crushing Plants": "/products/complete-plants",
                "Spare Parts": "/products",
                "Wear Parts": "/products",
              },
              "Solutions": {
                "Aggregate Production": "/solutions",
                "Mining & Quarrying": "/solutions",
                "Construction & Demolition": "/solutions",
                "Sand & Gravel": "/solutions",
                "Metallurgy": "/solutions",
                "Recycling Solutions": "/solutions",
                "Custom Solutions": "/solutions",
                "Turnkey Projects": "/solutions",
              },
              "Quick Links": {
                "About Us": "/about",
                "Our Process": "/",
                "Projects": "/projects",
                "Blog": "/blog",
                "Careers": "/careers",
                "News & Events": "/blog",
                "Sustainability": "/about",
                "Contact Us": "#contact",
              },
            };

            return (
              <div key={column.title}>
                <FooterHeading>{column.title}</FooterHeading>
                <ul className="space-y-[1.3rem]">
                  {column.links.map((link) => (
                    <FooterLink key={link} href={linkMap[column.title]?.[link] || "#"}>
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            );
          })}

          <div>
            <FooterHeading>Certifications</FooterHeading>
            <div className="divide-y divide-primary/15">
              {certifications.map((certification) => (
                <div className="flex items-center gap-4 py-[0.86rem] first:pt-0" key={certification.code}>
                  <Image
                    alt=""
                    aria-hidden
                    className="h-[3.85rem] w-[3.85rem] shrink-0"
                    height={72}
                    src={certification.icon}
                    width={72}
                  />
                  <span className="text-[0.9rem] leading-[1.6] text-text-dark">
                    <strong className="block font-bold">{certification.code}</strong>
                    {certification.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 pt-8 xl:grid-cols-[1fr_2.08fr_1.23fr] xl:divide-x xl:divide-primary/20">
          <div className="xl:pr-10">
            <FooterHeading>Follow Us</FooterHeading>
            <div aria-label="Social links" className="flex flex-wrap gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  aria-label={label}
                  className="flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-secondary text-primary transition-colors hover:bg-secondary hover:text-white"
                  href={href}
                  key={label}
                >
                  <Icon aria-hidden size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid items-center gap-7 md:grid-cols-[0.85fr_1.35fr] xl:px-14">
            <div>
              <FooterHeading>Global Presence</FooterHeading>
              <p className="text-[1rem] leading-[1.65] text-text-dark">
                Delivering solutions in 50+ countries across 6 continents.
              </p>
            </div>
            <Image
              alt="Map showing Pithal Machines global presence"
              className="h-auto w-full object-contain"
              height={872}
              src="/images/projects/world-map.jpg"
              width={1804}
            />
          </div>

          <div className="xl:pl-14">
            <FooterHeading>Get In Touch</FooterHeading>
            <p className="mb-4 text-[1rem] leading-[1.65] text-text-dark">
              Have a project in mind?
              <br />
              Our experts are ready to help.
            </p>
            <Button className="w-full max-w-[16.2rem] justify-between text-sm" href="#contact">
              Contact Us
              <ArrowRight aria-hidden size={19} />
            </Button>
          </div>
        </div>
      </Container>

      <div className="bg-gradient-to-r from-primary via-[#294385] to-secondary text-white">
        <Container className="flex max-w-[1585px] flex-col items-center justify-between gap-4 py-4 text-center text-sm sm:flex-row sm:text-left">
          <p className="text-white/90">&copy; 2026 Pithal Machines Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 sm:justify-end">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, index) => (
              <span className="flex items-center gap-5" key={item}>
                <Link className="transition-colors hover:text-white/70" href="#">
                  {item}
                </Link>
                {index < 2 && <span aria-hidden className="text-white/65">|</span>}
              </span>
            ))}
            <ScrollToTopButton />
          </div>
        </Container>
      </div>
    </footer>
  );
}
