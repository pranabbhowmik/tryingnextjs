import HeroSection from "@/components/HeroSection";
import FeatyredCourses from "@/components/FeatyredCourses";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import Macnook from "@/components/Macnook";
import TestomonialCards from "@/components/TestomonialCards";
import HoverWebinor from "@/components/HoverWebinor";
import InstractedWave from "@/components/InstractedWave";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.2]">
        <HeroSection />
        <FeatyredCourses />
        <StickyScrollRevealDemo />
        {/* <Macnook /> */}
        <TestomonialCards />
        <HoverWebinor />
        <InstractedWave />
        <Footer />
      </main>
    </>
  );
}
