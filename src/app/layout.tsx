import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital Experts | Premium Web Development Agency",
    template: "%s | Digital Experts",
  },
  description: site.description,
  applicationName: site.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Digital Experts | Premium Web Development Agency",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/brand/og-image.svg", width: 1200, height: 630, alt: "Digital Experts" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Experts | Premium Web Development Agency",
    description: site.description,
    images: ["/brand/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060B14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
