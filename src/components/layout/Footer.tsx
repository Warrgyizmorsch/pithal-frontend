import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { footerColumns } from "@/data/homeData";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white" id="global">
      <Container className="grid gap-10 border-b border-white/12 py-14 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
        <div id="brochure">
          <p className="headline text-3xl text-secondary">PM <span className="text-white">Pithal</span></p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
            Engineering world-class crushing, screening and material handling solutions for mining and infrastructure.
          </p>
          <address className="mt-6 space-y-2 not-italic text-xs text-white/70">
            <span className="flex items-start gap-2"><MapPin aria-hidden className="mt-0.5 shrink-0 text-secondary" size={14} /> Rajsamand, Rajasthan - 313324, India</span>
            <span className="flex items-center gap-2"><Phone aria-hidden className="shrink-0 text-secondary" size={14} /> +91 98875 37129</span>
            <span className="flex items-center gap-2"><Mail aria-hidden className="shrink-0 text-secondary" size={14} /> info@pithalmachines.com</span>
          </address>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">{column.title}</h3>
            <ul className="mt-5 space-y-3 text-xs text-white/65">
              {column.links.map((link) => (
                <li key={link}><a className="hover:text-white" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="grid items-center gap-7 border-b border-white/12 py-7 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Global Presence</p>
          <p className="mt-2 text-xs text-white/65">India | Middle East | Africa | Southeast Asia | Europe</p>
        </div>
        <div className="flex gap-3" aria-label="Social links">
          {socialLinks.map(({ label, icon: Icon }) => (
            <a aria-label={label} className="flex h-9 w-9 items-center justify-center border border-white/20 text-xs uppercase hover:border-secondary hover:text-secondary" href="#" key={label}>
              <Icon aria-hidden size={15} />
            </a>
          ))}
        </div>
        <Button className="min-h-11 primary-btn" href="#contact">Contact Us <ArrowRight aria-hidden size={14} /></Button>
      </Container>
      <div className="bg-[#021531] py-5 text-center text-[11px] text-white/55">
        Copyright &copy; 2026 Pithal Machine Pvt. All rights reserved.
      </div>
    </footer>
  );
}
