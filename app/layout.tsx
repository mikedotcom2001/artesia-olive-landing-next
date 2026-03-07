import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "@/components/Providers";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Artesia Bookkeeping | Professional Bookkeeping for Small Business",
    template: "%s | Artesia Bookkeeping",
  },
  description:
    "Artesia Bookkeeping gives small business owners clarity, confidence, and more time to focus on what matters — running your business. QuickBooks Online ProAdvisor serving clients nationwide.",
  keywords: [
    "bookkeeping",
    "small business bookkeeping",
    "QuickBooks Online",
    "bookkeeper",
    "accounting",
    "Southern California",
    "catch-up bookkeeping",
    "financial reporting",
  ],
  authors: [{ name: "Mike Wu" }],
  creator: "Mike Wu",
  metadataBase: new URL("https://artesiabookkeeping.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Artesia Bookkeeping | Professional Bookkeeping for Small Business",
    description:
      "Expert bookkeeping for small business owners. Get clarity on your numbers and focus on growing your business.",
    url: "https://artesiabookkeeping.com",
    siteName: "Artesia Bookkeeping",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artesia Bookkeeping | Professional Bookkeeping for Small Business",
    description:
      "Expert bookkeeping for small business owners. Get clarity on your numbers.",
    creator: "@artesiabookkeeping",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Toaster />
          <Sonner />
          {children}
        </Providers>
      </body>
    </html>
  );
}
