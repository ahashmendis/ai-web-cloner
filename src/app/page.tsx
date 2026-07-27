import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import WhoWeAre from "@/components/WhoWeAre";
import CaseStudies from "@/components/CaseStudies";
import ProcessSteps from "@/components/ProcessSteps";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <WhoWeAre />
        <CaseStudies />
        <ProcessSteps />
        <Gallery />
        <Packages />
        <Testimonials />
        <FAQ />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
