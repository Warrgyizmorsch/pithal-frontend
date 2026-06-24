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
    <Link
      aria-label="Pithal Machines Ltd. home"
      className="relative block h-[5.7rem] w-full max-w-[20.5rem] overflow-hidden"
      href="/"
    >
      <Image
        alt="Pithal Machines Ltd. - Solutions That Drive Growth"
        className="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 scale-[1.08]"
        height={140}
        src="/images/brand/pithal-logo.png"
        width={354}
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
      <div className="pt-8 pb-0 sm:pt-10 xl:pt-12 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-x-8 gap-y-8 border-b border-primary/20 pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2.8fr_1.02fr_1.25fr_1fr] xl:gap-y-10 xl:pb-[2rem]">
          <div className="md:col-span-2 lg:col-span-1">
            {/* Inner 2-col: brand left, contact right */}
            <div className="grid gap-8 sm:grid-cols-2">
              {/* Brand + tagline */}
              <div>
                <BrandMark />
                <p className="mt-4 max-w-[18rem] text-[0.95rem] leading-[1.72] text-text-dark sm:mt-6 sm:text-[1rem]">
                  Engineering world-class crushing solutions and equipment that power
                  industries, build infrastructure and shape a stronger tomorrow.
                </p>
                <span aria-hidden className="mt-7 block h-[3px] w-[7.1rem] bg-gradient-to-r from-primary to-secondary" />


                {/* QR Section inside the same contact column */}
                <div className="mt-6 flex flex-col gap-3">
                  {/* <div className="flex items-center gap-2">
                    <span className="text-[0.9rem] font-bold uppercase tracking-wider text-primary">Factory Location</span>
                    <span aria-hidden className="h-[2px] w-6 bg-secondary" />
                  </div>
                  <p className="text-xs text-text-dark/80 -mt-2">Scan to Open Google Maps</p> */}

                  <a
                    href="https://www.google.com/maps/dir//TASS,+National+Highway+27,+Sukher+Rd,+Rajasthan+313011/@24.6412473,73.7172356,18z/data=!4m16!1m7!3m6!1s0x3967e44236e80ead:0xbce661d60cd0cf9c!2sTASS!8m2!3d24.6412473!4d73.7172356!16s%2Fg%2F11bt_j7kgp!4m7!1m0!1m5!1m1!1s0x3967e44236e80ead:0xbce661d60cd0cf9c!2m2!1d73.7172679!2d24.641242?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open factory location in Google Maps"
                    className="w-fit"
                  >
                    <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] xl:w-[120px] xl:h-[120px] bg-white p-2 rounded-xl hover:scale-[1.05] transition-all duration-300 ease-in-out flex items-center justify-center border border-gray-100">
                      <Image
                        src="/images/location-qr.png"
                        alt="Pithal Machines Ltd. Factory Location QR Code"
                        width={104}
                        height={104}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  {/* <p className="text-xs font-bold text-secondary uppercase tracking-wider">Scan for Directions</p> */}
                  <p className="text-xs font-semibold text-secondary pl-3">Scan QR to Navigate</p>
                </div>
              </div>
              {/* Contact info */}
              <div>
                <address className="mt-2 space-y-4 not-italic text-[0.95rem] leading-[1.62] text-text-dark sm:mt-0">
                  <span className="flex items-start gap-4">
                    <MapPin aria-hidden className="mt-1 shrink-0 text-primary" size={22} />
                    <span>
                      <strong className="font-bold">Pithal Machines Ltd.</strong>
                      <br />
                      Building No. 1, First Floor,
                      <br />
                      National Highway 27, Sukher Road,
                      <br />
                      Village Sukher, Tehsil Badgaon,
                      <br />
                      District Udaipur, Rajasthan – 313011, India
                    </span>
                  </span>
                  <a className="flex items-center gap-4 hover:text-secondary" href="tel:+919887537129">
                    <Phone aria-hidden className="shrink-0 text-primary" size={21} />
                    +91 98875 37129
                  </a>
                  <a className="flex items-center gap-4 break-all hover:text-secondary" href="mailto:info@pithalmachine.com">
                    <Mail aria-hidden className="shrink-0 text-primary" size={22} />
                    info@pithalmachine.com
                  </a>
                  <a className="flex items-center gap-4 break-all hover:text-secondary" href="https://www.pithalmachine.com">
                    <Globe aria-hidden className="shrink-0 text-primary" size={22} />
                    www.pithalmachine.com
                  </a>
                </address>

              </div>
            </div>
          </div>

          {navColumns.map((column) => {
            const linkMap: Record<string, Record<string, string>> = {
              "Products": {
                "Prime Jaw Crushers": "/products/jaw-crushers",
                "Prime Cone Crushers": "/products/cone-crushers",
                "Prime VSI Crushers": "/products/vsi-crushers",
                "Prime Vibrating Feeders": "/products/feeders",
                "Prime Vibrating Screens": "/products/screening-solutions",
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
                "Become a Dealer": "/become-a-dealer",
                "News & Events": "/blog",
                "Sustainability": "/about",
                "Contact Us": "/contact",
              },
            };

            return (
              <div key={column.title}>
                <FooterHeading>{column.title}</FooterHeading>
                <ul className="space-y-[1.3rem]">
                  {column.links
                    .filter((link) => link !== "Projects")
                    .map((link) => (
                    <FooterLink key={link} href={linkMap[column.title]?.[link] || "#"}>
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            );
          })}


        </div>

        <div className="grid gap-8 pt-6 xl:grid-cols-[1fr_2.08fr_1.23fr] xl:divide-x xl:divide-primary/20">
          <div className="xl:pr-10">
            <FooterHeading>Follow Us</FooterHeading>
            <div aria-label="Social links" className="flex flex-wrap gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  aria-label={label}
                  className="flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-secondary text-primary transition-all duration-500 hover:rotate-[360deg] hover:bg-secondary hover:text-white"
                  href={href}
                  key={label}
                >
                  <Icon aria-hidden size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="xl:px-10 relative overflow-hidden ">
            <Image
              alt="Plant Design Layout"
              className="h-[200px] w-full object-cover object-right opacity-40"
              height={200}
              src="/blogpageimg/plantdesignlayout.jpg"
              width={600}
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
              }}
            />

            {/* Content on top of image */}
            <div className="absolute inset-0 flex flex-col justify-start pr-5">
              <FooterHeading>Get In Touch</FooterHeading>
              <div className="flex items-end justify-between gap-4">
                <p className="text-[1rem] leading-[1.65] text-primary font-medium">
                  Have a project in mind?
                  <br />
                  Our experts are ready to help.
                </p>
                <Button className="shrink-0 justify-between text-sm px-5" href="/contact">
                  Contact Us
                  <ArrowRight aria-hidden size={19} />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start xl:pl-4">
            <h2 className="text-[2rem] sm:text-[2.2rem] font-black leading-[1.15] text-primary uppercase tracking-tight font-sans">
              Crushing Strength,
              <br />
              <span className="text-secondary block mt-1 ml-12">
                Delivering Results.
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* Full width gradient bottom bar */}

        <div className="bg-gradient-to-r from-primary via-[#294385] to-secondary flex flex-col items-center justify-between gap-4 py-4 text-sm text-white sm:flex-row px-5 sm:px-8 lg:px-10">
          <p className="order-2 mt-2 text-white/90 sm:order-1 sm:mt-0">&copy; 2026 Pithal Machines Ltd. All Rights Reserved.</p>

          <div className="order-1 flex items-center gap-4 sm:order-2">
            <div className="hidden flex-wrap items-center gap-3 sm:flex">
              {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, index) => (
                <span className="flex items-center gap-3 text-white/95" key={item}>
                  <Link className="transition-colors hover:text-white/80" href="#">
                    {item}
                  </Link>
                  {index < 2 && <span aria-hidden className="text-white/60">|</span>}
                </span>
              ))}
            </div>

            <ScrollToTopButton />
          </div>
        </div>


    </footer>
  );
}
