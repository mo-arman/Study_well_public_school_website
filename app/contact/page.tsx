import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in Touch" />
      <div className="container-custom py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-5 mb-10">
            <div className="flex gap-3">
              <MapPin className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">{siteConfig.address}</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">{siteConfig.phone}</p>
            </div>
            <div className="flex gap-3">
              <Mail className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">{siteConfig.email}</p>
            </div>
            <div className="flex gap-3">
              <Clock className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">Mon – Sat, 8:00 AM – 3:00 PM</p>
            </div>
          </div>
          <div className="aspect-video rounded-2xl bg-mist flex items-center justify-center text-navy-ink/40 text-sm">
            [ Google Maps embed goes here — paste embed URL in siteConfig.mapEmbedUrl ]
          </div>
        </div>

        <form className="space-y-4">
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Your Name" />
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Email" type="email" />
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Phone" />
          <textarea
            className="w-full border border-mist rounded-lg px-4 py-3 text-sm h-32"
            placeholder="Message"
          />
          <button type="button" className="bg-navy text-white font-semibold px-6 py-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
