import type React from "react";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deno Web Studio | Small Business Web Designer",
  description:
    "100% hand-coded websites with superior results. No page builders, no WordPress. $0 down payment, $150/month. SEO optimized.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
