import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MA Digitize - Modern UI Kit",
  description: "A professional design system for modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased bg-[#F1F2F3] font-inter">
        <Header />
        <main className="w-full pt-26 pb-4 bg-[#F1F2F3]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
