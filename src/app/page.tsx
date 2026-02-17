import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CurrentWork } from "@/components/sections/CurrentWork";
import { Projects } from "@/components/sections/Projects";
import { MyApproach } from "@/components/sections/MyApproach";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LaserFlowBackground } from "@/components/LaserFlowBackground";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #0d1321 50%, #0a0f1e 100%)" }}>
      <LaserFlowBackground />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <CurrentWork />
        <Projects />
        <Testimonials />
        <WorkExperience />
        <MyApproach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
