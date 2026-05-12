import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Experts - Web Development Agency",
  description:
    "Premium web development agency specialising in Shopify, WordPress, custom web apps, SaaS UI/UX design, maintenance & optimisation. We build digital products that perform.",
  keywords: [
    "web development agency",
    "Shopify development",
    "WordPress agency",
    "custom web apps",
    "SaaS design",
    "UI UX design",
    "website maintenance",
  ],
  openGraph: {
    title: "Digital Experts - Web Development Agency",
    description:
      "Premium web development agency specialising in Shopify, WordPress, custom web apps, SaaS UI/UX design, and more.",
    url: "https://digitalexperts.dev",
    siteName: "Digital Experts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Experts - Web Development Agency",
    description:
      "Premium web development agency specialising in Shopify, WordPress, custom web apps, and SaaS UI/UX design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
