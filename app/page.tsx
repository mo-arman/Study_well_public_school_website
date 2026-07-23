import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AcademicsPreview from "@/components/sections/AcademicsPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <AboutPreview />
      <WhyChooseUs />
      <AcademicsPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
