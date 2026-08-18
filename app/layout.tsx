import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/company";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lasoadoandjasmine.com"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Indianapolis-based OTR trucking covering all 48 states. Bonded carrier with tractors, power-only, Sprinters, cargo vans, and 16ft/26ft box trucks. 24/7 pickup and delivery.",
  keywords: [
    "trucking Indianapolis",
    "OTR carrier",
    "48 state trucking",
    "box truck liftgate",
    "power only",
    "bonded carrier",
    "Lasoado and Jasmine",
  ],
  openGraph: {
    title: `${company.name} | Nationwide Trucking`,
    description:
      "Over-the-road trucking and logistics across all 48 states. Clean equipment, punctual drivers, 24/7 service.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/mark.png",
    apple: "/mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
