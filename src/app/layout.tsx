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
  title: "MA UI Kit — Early Access Coming Soon",
  description: "A modern web app design system built for consistency and scalability. Preview the roadmap and join the Early Access waitlist.",
  metadataBase: new URL("https://madigitize.com"),
  alternates: {
    canonical: "https://madigitize.com",
  },
  verification: {
    google: "e5GmrfuHgumkKKpizfIuR7vudiwDyYpo5UEzdkeEDWs",
  },
  icons: {
    icon: [
      { url: "https://madigitize.com/favicon.ico", sizes: "any" },
      { url: "https://madigitize.com/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "https://madigitize.com/favicon.ico",
    apple: "https://madigitize.com/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth min-h-full ${inter.variable}`}>
      <body className="antialiased bg-[#F3F4F6] font-inter min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col w-full pt-26 pb-4 bg-[#F3F4F6]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
