import HeroSection from "../components/Sections/HeroSection";
import StatsSection from "../components/Sections/StatsSection";
import TopBar from "../components/Sections/Topbar";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen text-purple-700 bg-app-gray">
      <header>
        <TopBar />
      </header>
      <main className="mx-auto ">
        <StatsSection />
        <p className="text-lg text-gray-700">
          This is the start of our responsive homepage.
        </p>
      </main>
    </div>
  );
}
