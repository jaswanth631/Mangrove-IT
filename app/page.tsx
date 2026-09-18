import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AVIntegration from "@/components/AVIntegration";
import ITIntegration from "@/components/ITIntegration";
import InteriorAcoustics from "@/components/InteriorAcoustics";
import ElectricalProjects from "@/components/ElectricalProjects";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <AVIntegration />
      <ITIntegration />
      <InteriorAcoustics />
      <ElectricalProjects />
      <Industries />
      <Projects />
      <Metrics />
      <Process />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
}
