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

export default function Home() {
  return (
    <div className="min-h-screen text-purple-700 bg-app-gray">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </header>

      <main className="pt-[115px] px-0 bg-black lg:px-18">
        <HeroSection />
        <AwardsSection />
        <Statsanddetails />
        <Readytoinnovate />
        <NavigateSection />
        <ImageScroller />
        <ROISection />
        <OurTechnologyExpert />
        <FAQ />
        <Offices />
      </main>

      <Footer />
    </div>
  );
}
