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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
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
