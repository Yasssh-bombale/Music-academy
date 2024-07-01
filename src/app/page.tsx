import Animatedtooltip from "@/components/Animatedtooltip";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicTestimonials from "@/components/MusicTestimonials";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection />
      <FeaturedCourses />
      <MusicTestimonials />
      <Animatedtooltip />
    </main>
  );
}
