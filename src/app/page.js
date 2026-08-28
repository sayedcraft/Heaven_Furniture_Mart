import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Collections from "@/components/sections/Collections";
import BespokeHighlight from "@/components/sections/BespokeHighlight";
import SocialProof from "@/components/sections/SocialProof";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <WhyChooseUs />
        <Collections />
        <BespokeHighlight />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
