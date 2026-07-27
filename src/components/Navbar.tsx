"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuIcon, CloseIcon } from "@/components/icons";

/* ── Constants ── */

const NAV_LINKS = [
  { label: "Who We Are", href: "#who" },
  { label: "Our Work", href: "#work" },
  { label: "How We Work", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const SCROLL_THRESHOLD = 60;

/* ── Component ── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Scroll-driven CSS custom properties */
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / SCROLL_THRESHOLD, 1);

    const root = document.documentElement;

    root.style.setProperty(
      "--hero-nav-bg-alpha",
      String(lerp(0.02, 0.85, progress)),
    );
    root.style.setProperty(
      "--hero-nav-border-alpha",
      String(lerp(0.0, 0.1, progress)),
    );
    root.style.setProperty(
      "--hero-nav-shadow-alpha",
      String(lerp(0.0, 0.4, progress)),
    );
    root.style.setProperty(
      "--hero-nav-sheen-opacity",
      String(lerp(0.0, 0.08, progress)),
    );
    root.style.setProperty(
      "--hero-nav-y",
      `${lerp(-3, 0, progress)}px`,
    );
    root.style.setProperty(
      "--hero-nav-scale",
      String(lerp(0.985, 1, progress)),
    );
  }, []);

  useEffect(() => {
    /* Set initial values */
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Main navbar ── */}
      <div
        className="nav-bar fixed top-0 left-0 right-0 z-50 px-5 py-5 md:px-10"
        data-hero-nav-active=""
      >
        <div className="nav-pill mx-auto flex max-w-[1200px] items-center justify-between rounded-full px-4 py-2.5 md:px-6">
          {/* Logo */}
          <a
            href="/"
            className="brand-mark relative z-10 flex-shrink-0"
            aria-label="Growthscape Home"
          >
            <Image
              src="/images/GROW/LONG WHITE.png"
              alt="Growthscape"
              width={120}
              height={32}
              className="h-6 w-auto scale-[5] origin-left"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[16px] leading-6 font-normal text-[#f7f7f2] no-underline opacity-[0.78] transition-opacity duration-200 hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn-3d pointer-events-auto relative z-10 hidden items-center justify-center whitespace-nowrap rounded-[15px] border-none bg-gradient-to-b from-white from-[38%] via-[#f7f7f2] via-[68%] to-[#ececec] px-[21px] text-[12.16px] font-[780] leading-[18.24px] text-black shadow-[rgb(255,255,255)_0px_1px_2px_inset,rgba(0,0,0,0.055)_0px_-7px_12px_inset,rgba(0,0,0,0.16)_0px_-1px_0px_inset,rgb(211,211,206)_0px_2px_0px,rgb(159,159,153)_0px_4px_0px,rgba(0,0,0,0.22)_0px_5px_0px] transition-[transform,box-shadow,background,filter] duration-[170ms] hover:-translate-y-px md:inline-flex"
            style={{ height: 40 }}
          >
            Start Your Growth System
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="relative z-10 flex items-center justify-center text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile nav overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#111] transition-transform duration-300 ease-in-out md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-2xl font-normal text-[#f7f7f2] no-underline opacity-78 transition-opacity duration-200 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={closeMobile}
          className="btn-3d mt-10 inline-flex items-center justify-center whitespace-nowrap rounded-[15px] border-none bg-gradient-to-b from-white from-[38%] via-[#f7f7f2] via-[68%] to-[#ececec] px-[21px] text-[12.16px] font-[780] leading-[18.24px] text-black shadow-[rgb(255,255,255)_0px_1px_2px_inset,rgba(0,0,0,0.055)_0px_-7px_12px_inset,rgba(0,0,0,0.16)_0px_-1px_0px_inset,rgb(211,211,206)_0px_2px_0px,rgb(159,159,153)_0px_4px_0px,rgba(0,0,0,0.22)_0px_5px_0px] transition-[transform,box-shadow,background,filter] duration-[170ms] hover:-translate-y-px"
          style={{ height: 40 }}
        >
          Start Your Growth System
        </a>
      </div>
    </>
  );
}

/* ── Utilities ── */

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
