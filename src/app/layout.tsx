import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
