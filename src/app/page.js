import Image from "next/image";
import HeroSection from "./Components/Home/HeroSection";
import VisionMissionValues from "./Components/Home/VisionMissionValues";
import Achievement from "./Components/Home/Achievement";
import NewsFeed from "./Components/Home/NewsFeed";
import Partners from "./Components/Home/Partners";

export default function Home() {
  return (
    <div className="text-[20px]">
      <HeroSection />
      <VisionMissionValues />
      <Achievement />
      <NewsFeed />
      <Partners />
    </div>
  );
}
