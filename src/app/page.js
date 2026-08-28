import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Collections from "@/components/sections/Collections";
import FeaturedPieces from "@/components/sections/FeaturedPieces";
import BespokeHighlight from "@/components/sections/BespokeHighlight";
import DesignProcess from "@/components/sections/DesignProcess";
import Showroom from "@/components/sections/Showroom";
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
        <FeaturedPieces />
        <BespokeHighlight />
        <DesignProcess />
        <Showroom />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
