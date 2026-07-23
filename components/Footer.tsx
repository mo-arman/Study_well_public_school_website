import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-navy-ink text-white/80 mt-24">
      <div className="golden-thread" />
      <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="relative h-14 w-14 mb-4">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.schoolName} logo`}
              fill
              className="object-contain"
            />
          </div>
          <p className="font-display text-xl text-white font-semibold mb-1">
            {siteConfig.schoolName}
          </p>
          <p className="text-sm text-gold/80 mb-3">{siteConfig.motto}</p>
          <p className="text-sm leading-relaxed">{siteConfig.tagline}</p>
          <div className="flex gap-3 mt-5">
            {[
              { icon: Facebook, href: siteConfig.social.facebook },
              { icon: Instagram, href: siteConfig.social.instagram },
              { icon: Youtube, href: siteConfig.social.youtube },
              { icon: Twitter, href: siteConfig.social.twitter }
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-ink transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </p>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Resources
          </p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/admissions" className="hover:text-gold transition-colors">Admissions</Link></li>
            {siteConfig.moreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold transition-colors">{item.label}</Link>
              </li>
            ))}
            <li><Link href="/mandatory-disclosure" className="hover:text-gold transition-colors">Mandatory Disclosure</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Contact
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5" /> {siteConfig.address}</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5" /> {siteConfig.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5" /> {siteConfig.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.schoolName}. All rights reserved.
      </div>
    </footer>
  );
}
