import Navbar from "@/components/Shared/Navbar";
import Hero from "@/components/Home/Hero";
import BrandIntro from "@/components/Home/BrandIntro";
import ShopByCategory from "@/components/Home/ShopByCategory";
import FlagshipFurniture from "@/components/Home/FlagshipFurniture";
import PopularFurniture from "@/components/Home/PopularFurniture";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import BespokeHighlight from "@/components/Home/BespokeHighlight";
import ArtisticFurniture from "@/components/Home/ArtisticFurniture";
import NewArrival from "@/components/Home/NewArrival";
import SmartInnovation from "@/components/Home/SmartInnovation";
import DesignProcess from "@/components/Home/DesignProcess";
import Showroom from "@/components/Home/Showroom";
import SocialProof from "@/components/Home/SocialProof";
import CTASection from "@/components/Home/CTASection";
import Footer from "@/components/Shared/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <ShopByCategory />
        <FlagshipFurniture />
        <PopularFurniture />
        <WhyChooseUs />
        <BespokeHighlight />
        <ArtisticFurniture />
        <NewArrival />
        <SmartInnovation />
        <DesignProcess />
        <Showroom />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
