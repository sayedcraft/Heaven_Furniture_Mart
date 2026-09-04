import Hero from "@/components/Home/Hero";
import ShopByCategory from "@/components/Home/ShopByCategory";
import FlagshipFurniture from "@/components/Home/FlagshipFurniture";
import PopularFurniture from "@/components/Home/PopularFurniture";
import ArtisticFurniture from "@/components/Home/ArtisticFurniture";
import BespokeHighlight from "@/components/Home/BespokeHighlight";
import NewArrival from "@/components/Home/NewArrival";
import VideoShowcase from "@/components/Home/VideoShowcase";
import SmartInnovation from "@/components/Home/SmartInnovation";
import Showroom from "@/components/Home/Showroom";
import SocialProof from "@/components/Home/SocialProof";
import BrandIntro from "@/components/Home/BrandIntro";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BeforeAfter from "@/components/Home/BeforeAfter";
import MapSection from "@/components/Home/MapSection";
import IntroSplash from "@/components/ui/IntroSplash";

export const metadata = {
  title: "Heaven Furniture Mart | Premium Bespoke Furniture in Chattogram",
  description:
    "Discover premium bespoke furniture, custom interiors, and thoughtful craftsmanship at Heaven Furniture Mart — Chattogram's leading furniture studio.",
};

export default function Home() {
  return (
    <>
      <IntroSplash />
      <ScrollProgress />

      <Hero />

      <ShopByCategory /><hr />

      <FlagshipFurniture /> <hr />

      <ArtisticFurniture /> <hr />

      <PopularFurniture /> <hr />

      <BespokeHighlight /> <hr />

      <NewArrival /> <hr />

      <VideoShowcase /> <hr />

      <BeforeAfter></BeforeAfter> <hr />

      <SmartInnovation /> <hr />

      <Showroom /> <hr />

      <BrandIntro /> <hr />

      <SocialProof /> <hr />

      <MapSection></MapSection>
    </>
  );
}
