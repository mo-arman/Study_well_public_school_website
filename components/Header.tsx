"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Search, ChevronDown, Bell } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

declare global {
  interface Window {
    OneSignal?: {
      Notifications: { requestPermission: () => Promise<void> };
    };
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [erpOpen, setErpOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enableNotifications = () => {
    window.OneSignal?.Notifications.requestPermission();
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass py-2" : "bg-paper py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-4">
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.schoolName} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-semibold text-navy text-base sm:text-lg">
              {siteConfig.schoolName}
            </p>
            <p className="text-[11px] tracking-wide text-navy/60 uppercase hidden sm:block">
              {siteConfig.affiliation}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-ink/80 hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-navy-ink/80 hover:text-navy transition-colors">
              More <ChevronDown size={14} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full pt-2 w-48">
                <div className="bg-white rounded-lg shadow-card border border-mist py-2">
                  {siteConfig.moreLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-navy-ink/80 hover:bg-sky-light hover:text-navy"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setErpOpen(true)}
            onMouseLeave={() => setErpOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-navy-ink/80 hover:text-navy transition-colors">
              ERP Login <ChevronDown size={14} />
            </button>
            {erpOpen && (
              <div className="absolute right-0 top-full pt-2 w-44">
                <div className="bg-white rounded-lg shadow-card border border-mist py-2">
                  {siteConfig.erpLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-navy-ink/80 hover:bg-sky-light hover:text-navy"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={enableNotifications}
            aria-label="Enable notifications for circulars and events"
            title="Get notified about circulars & events"
            className="h-9 w-9 rounded-full flex items-center justify-center text-navy hover:bg-sky-light transition-colors"
          >
            <Bell size={16} />
          </button>
          <button
            aria-label="Search"
            className="h-9 w-9 rounded-full flex items-center justify-center text-navy hover:bg-sky-light transition-colors"
          >
            <Search size={17} />
          </button>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="h-9 w-9 rounded-full flex items-center justify-center text-navy hover:bg-sky-light transition-colors"
            aria-label="Call the school"
          >
            <Phone size={16} />
          </a>
          <Link
            href="/admissions"
            className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-mist mt-3 bg-paper">
          <div className="container-custom py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-navy-ink font-medium border-b border-mist"
              >
                {item.label}
              </Link>
            ))}
            {siteConfig.moreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-navy-ink font-medium border-b border-mist"
              >
                {item.label}
              </Link>
            ))}
            {siteConfig.erpLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-navy-ink/70 text-sm border-b border-mist"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={enableNotifications}
              className="py-3 text-navy-ink/70 text-sm border-b border-mist text-left flex items-center gap-2"
            >
              <Bell size={15} /> Enable Notifications
            </button>
            <Link
              href="/admissions"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-navy text-white text-center font-semibold px-5 py-3 rounded-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

