// pages/index.js or app/page.js
import MissionStatement from "@/components/home/MissionStatement";
import WelcomeBanner from "@/components/home/WelcomeBanner";
import NextGathering from "@/components/home/NextGathering";
import HeartSpeaksToHeart from "@/components/home/HeartSpeaksToHeart";
import CorFAQ from "@/components/home/CorFAQ";
import Hero from "@/components/home/Hero"
import VideoSection from "@/components/home/VideoSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <MissionStatement />
      <WelcomeBanner />
      <NextGathering />
      <HeartSpeaksToHeart />
      <CorFAQ />
      <VideoSection videoId="sqdaJFw07-s" />
    </div>
  );
}