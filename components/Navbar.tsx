"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface/95 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-width flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <p className="font-heading text-xl font-extrabold text-primary">TeachLink</p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-text-muted transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-text-primary transition hover:border-primary hover:text-primary">
            Login
          </Link>
          <Link href="#cta" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark active:scale-[0.98]">
            Get a Tutor
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition hover:border-primary hover:text-primary md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-border/60 bg-surface transition-all duration-300 md:hidden ${isOpen ? "max-h-96 shadow-card" : "max-h-0 border-transparent"}`}>
        <div className="container-width flex flex-col gap-4 py-5">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="rounded-2xl px-3 py-2 text-sm font-medium text-text-primary transition hover:bg-primary/5 hover:text-primary">
              {link.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-3">
            <Link href="/login" className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-text-primary transition hover:border-primary hover:text-primary">
              Login
            </Link>
            <Link href="#cta" onClick={() => setIsOpen(false)} className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-dark active:scale-[0.98]">
              Get a Tutor
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
