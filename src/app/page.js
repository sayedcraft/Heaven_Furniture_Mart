import Hero from "@/components/Home/Hero";
import CategoryShowcase from "@/components/Home/CategoryShowcase";
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
import CTASection from "@/components/Home/CTASection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BeforeAfter from "@/components/Home/BeforeAfter";

export const metadata = {
  title: "Heaven Furniture Mart | Premium Bespoke Furniture in Chattogram",
  description:
    "Discover premium bespoke furniture, custom interiors, and thoughtful craftsmanship at Heaven Furniture Mart — Chattogram's leading furniture studio.",
};

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* Hero — full-screen image slider */}
      <Hero />

      {/* Category Showcase — premium 4-card strip below hero */}
      <CategoryShowcase />

      {/* Shop by Category — editorial 12-column category grid */}
      <ShopByCategory />

      {/* Flagship Furniture — large featured + supporting asymmetric grid */}
      <FlagshipFurniture />

      {/* Popular Furniture — editorial product layout */}
      <PopularFurniture />

      {/* Artistic Furniture — statement split composition */}
      <ArtisticFurniture />

      {/* Bespoke Highlight — "Your space. Your vision. Your piece." */}
      <BespokeHighlight />

      {/* New Arrivals — "Fresh pieces." + "More new arrivals" */}
      <NewArrival />

      {/* Video Showcase — cinematic brand video */}
      {/* <VideoShowcase /> */}
      <BeforeAfter></BeforeAfter>

      {/* Smart Innovation — "Intelligent furniture." + "The innovation system" */}
      <SmartInnovation />

      {/* Showroom — "Chattogram showroom" + "See it. Feel it." */}
      {/* <Showroom /> */}

      {/* Social Proof — "A note from our founder" */}
      <SocialProof />

      {/* Brand Intro — stats + brand story */}
      <BrandIntro />

      {/* CTA — final call to action */}
      <CTASection />
    </>
  );
}
