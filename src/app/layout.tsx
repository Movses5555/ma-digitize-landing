import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Open_Sans, Montserrat, } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased bg-[#F1F2F3] font-sans">
        <Header />
        <main className="w-full pt-26 pb-4 bg-[#F1F2F3]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
