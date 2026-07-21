"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { label: "Overview", href: "#waitlist" },
  { label: "Inside the kit", href: "#whats-inside" },
  { label: "Features", href: "#features" },
  { label: "Release plan", href: "#timeline" },
  { label: "FAQs", href: "#faq" },
] as const;

const SCROLL_OFFSET = 100;
const DRAWER_TRANSITION_MS = 300;

const ICON_BUTTON_CLASS =
  "flex items-center justify-center size-9 rounded-lg bg-white cursor-pointer transition-colors hover:bg-[#F3F4F6] focus:outline-none focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#0043C0]";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsMenuVisible(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuVisible(false);
    window.setTimeout(() => setIsMenuOpen(false), DRAWER_TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  const scrollToSection = useCallback((hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleJoinNow = () => {
    closeMenu();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/") {
      event.preventDefault();
      closeMenu();
      window.setTimeout(() => scrollToSection(href), isMenuOpen ? 50 : 0);
    } else {
      closeMenu();
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-22 backdrop-blur-md px-4 md:px-6 pt-4">
        <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] p-4 md:px-6">
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-between items-center gap-8">
              <Link href="/" className="flex gap-2 shrink-0">
                <div className="relative w-[105px] h-8">
                  <Image
                    src="/logo.svg"
                    alt="MA Digitize Logo"
                    fill
                    priority
                    fetchPriority="high"
                    className="object-contain"
                  />
                </div>
              </Link>
              <nav
                className="hidden lg:flex items-center gap-4.5 flex-1 ml-2 h-full"
                aria-label="Primary"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="text-[16px] font-medium leading-[24px] tracking-[0%] text-[#364153] hover:text-[#0043C0] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden lg:block shrink-0">
              <Button onClick={handleJoinNow} classNames="px-5 h-10 w-auto">
                <span className="text-[#FFFFFFFA] text-[14px] font-bold leading-[20px] tracking-[0%]">
                  Join Now
                </span>
              </Button>
            </div>

            <button
              type="button"
              onClick={openMenu}
              className={`lg:hidden ${ICON_BUTTON_CLASS}`}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <Image
                src="/icons/menu.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          
          <button
            type="button"
            className={`absolute inset-0 bg-[#00000066] backdrop-blur-[16px] transition-opacity duration-300 ease-in-out cursor-default ${
              isMenuVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <aside
            className={`absolute top-0 right-0 bottom-0 flex w-[316px] p-4 flex-col bg-[#F3F4F6] shadow-[-8px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out ${
              isMenuVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
          <div className="flex flex-col w-full h-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
              <div className="flex items-center justify-between p-5">
                <Link href="/" className="flex gap-2" onClick={closeMenu}>
                  <div className="relative w-[105px] h-8">
                    <Image
                      src="/logo.svg"
                      alt="MA Digitize Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  className={ICON_BUTTON_CLASS}
                  aria-label="Close menu"
                >
                  <Image
                    src="/icons/x.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 mt-5" aria-label="Mobile">
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href} className="border-b border-[#E5E7EB] mb-2">
                      <Link
                        href={`/${link.href}`}
                        onClick={(event) => handleNavClick(event, link.href)}
                        className="block px-2 pt-[6px] pb-[14px] text-[16px] font-medium leading-[24px] tracking-[0%] text-[#364153] hover:text-[#0043C0] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="px-4 pt-4 pb-5">
                <Button onClick={handleJoinNow} classNames="h-10 w-full">
                  <span className="text-[#FFFFFF] text-[16px] font-bold leading-[20px] tracking-[0%]">
                    Join Now
                  </span>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
