import Header from "@/components/block/header";
import Footer from "@/components/block/footer";
import UniversityHero from "@/components/sections/university-hero";
import UniversityStats from "@/components/sections/university-stats";
import CoreValues from "@/components/sections/core-values";
import VideoIntroduction from "@/components/sections/video-introduction";
import UniversityLeadership from "@/components/sections/university-leadership";
import PartnerLogos from "@/components/sections/partner-logos";
import NewsSection from "@/components/sections/news-section";
import ScrollSyncSection from "@/components/sections/scroll-sync-section";
import UnitsSection from "@/components/sections/units-section";
import HeaderSpacer from "@/components/ui/header-spacer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeaderSpacer />
      <UniversityHero />
      <UniversityStats />
      <CoreValues />
      <VideoIntroduction />
      <UniversityLeadership />
      <UnitsSection />
      <PartnerLogos />
      <NewsSection />
      <ScrollSyncSection />
      <Footer />
    </div>
  );
}
