import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/Sections/Topbar";
import ImageScroller from "../components/Sections/ImageScroll";
import { Statsanddetails } from "../components/Statsanddetails/statsanddetails";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen text-purple-700 bg-app-gray">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </header>

      <main className="pt-[160px] px-0 bg-black lg:px-18">
        <ImageScroller />
        <Statsanddetails />
      </main>

      <Footer />
    </div>
  );
}
