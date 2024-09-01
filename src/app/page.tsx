import Image from "next/image";
import HeroSection from "@/components/heroSection";
import FeaturesCards from "@/components/FeaturedCards";
import WhyChooseUs from "@/components/whyChooseUs";
import MovingCards from "@/components/movingCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/instructors";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
     <div>
      <HeroSection/>
      <FeaturesCards/>
      <WhyChooseUs/>
      <MovingCards/>
      <UpcomingWebinar />
      <Instructors/>
      <Footer />
     </div>
    </main>
  );
}
