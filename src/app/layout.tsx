import type { Metadata } from "next";
import { DM_Sans, Rubik, Amiri } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

// Define fonts with specific weights and subsets
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin", "arabic"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Islamic Da'wa Academy | Akode Islamic Centre",
  description: "Higher Educational Institution for Huffaz with integrated dual degree studies in both Islamic studies and secular education from UGC Approved universities.",
  keywords: ["Islamic Education", "Huffaz Education", "Dual Degree", "Islamic Studies", "Quran Memorization", "Media Training", "IT Education"],
  authors: [{ name: "Akode Islamic Centre" }],
  creator: "Akode Islamic Centre",
  openGraph: {
    title: "Islamic Da'wa Academy | Akode Islamic Centre",
    description: "Higher Educational Institution for Huffaz with integrated dual degree studies",
    url: "https://islamicdawaacademy.org",
    siteName: "Islamic Da'wa Academy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${rubik.variable} ${amiri.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}