import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Pithal Machine Pvt. | Crushing & Mining Solutions",
  description:
    "Pithal Machine Pvt. delivers high-performance crushing, screening, mining, and industrial machinery solutions.",
};

import { ContactModal } from "@/components/common/ContactModal";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        {children}
        <ContactModal />
      </body>
    </html>
  );
}
