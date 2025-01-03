import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BLOG } from "@/constants";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: BLOG.TITLE,
  description: BLOG.DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col bg-emerald-50 min-h-screen antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
