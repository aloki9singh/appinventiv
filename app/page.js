import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/Sections/Topbar";
import ImageScroller from "../components/Sections/ImageScroll";
import { Statsanddetails } from "../components/Statsanddetails/statsanddetails";
import "../styles/globals.css";
import HeroSection from "../components/Sections/HeroSection";
import AwardsSection from "../components/Sections/AwardsSection";
import { Readytoinnovate } from "../components/Sections/Readytoinnovate";
import ROISection from "../components/Sections/ROIintelligence";
import { Offices } from "../components/Sections/Offices";
import OurTechnologyExpert from "../components/Sections/OurTechnologyExperts";
import FAQ from "../components/Sections/FAQ";

import NavigateSection from "../components/Sections/NavigateSection";
import CaseStudy from "../components/Sections/CaseStudy";
// import CaseStudy2 from "../components/Sections/CaseStudy2";
import TestimonialSection from "../components/Sections/TestimonialSection";
import FeatureSection from "../components/Sections/FeatureSection";

import AITalkSection from "../components/Sections/Aitalksection";
import Partnerships from "../components/Sections/Partnerships";
import AwardsCarousel from "../components/Sections/AwardCarousel";
import TestimonialCarousel from "../components/Sections/TestimonialCrousel";
import { UnifiedVision } from "../components/Sections/UnifiedVision";
import IndustryCards from "../components/Sections/Industrycards";
import TechCapabilities from "../components/Sections/TechCapabilities";
import Solving from "../components/Sections/Solving";
import PartnershipsSection from "../components/Sections/PartnershipsSection";

export default function Home() {
  return (
    <div className="min-h-screen text-purple-700 bg-app-gray">
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </header>

      <main className="lg:pt-[115px] pt-[100px] px-0 bg-black lg:px-18">
        <HeroSection />
        <AwardsSection />
        <Statsanddetails />
        <Readytoinnovate />
        <CaseStudy />
        {/* <CaseStudy2/> */}
        <TestimonialSection />
        <NavigateSection />
        <ROISection />
        <FeatureSection />
        <AITalkSection />

        <Partnerships />
        <AwardsCarousel />
        <TestimonialCarousel />
        <UnifiedVision />
        <IndustryCards />
        <TechCapabilities />

        <PartnershipsSection />
        <Solving />
        <OurTechnologyExpert />
        <FAQ />
        <Offices />
      </main>

      <Footer />
    </div>
  );
}
