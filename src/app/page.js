import Hero from "@/components/Home/Hero";
import BrandIntro from "@/components/Home/BrandIntro";
import ShopByCategory from "@/components/Home/ShopByCategory";
import FlagshipFurniture from "@/components/Home/FlagshipFurniture";
import PopularFurniture from "@/components/Home/PopularFurniture";
import ArtisticFurniture from "@/components/Home/ArtisticFurniture";
import BespokeHighlight from "@/components/Home/BespokeHighlight";
import NewArrival from "@/components/Home/NewArrival";
import SmartInnovation from "@/components/Home/SmartInnovation";
import Showroom from "@/components/Home/Showroom";
import SocialProof from "@/components/Home/SocialProof";
import CTASection from "@/components/Home/CTASection";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <main>
        <Hero />
        <ShopByCategory />
        <FlagshipFurniture />
        <PopularFurniture />
        <ArtisticFurniture />
        <BespokeHighlight />
        <NewArrival />
        <SmartInnovation />
        <Showroom />
        <SocialProof />
        <BrandIntro />
        <CTASection />
      </main>
    </>
  );
}