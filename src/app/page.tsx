import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Expertises } from "@/components/sections/expertises";
import { FinalCTA } from "@/components/sections/final-cta";
import { Partnerships } from "@/components/sections/partnerships";
import { WhyStrivehawk } from "@/components/sections/why-strivehawk";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyStrivehawk />
      <Expertises />
      <Partnerships />
      <FinalCTA />
      <Footer />
    </>
  );
}
