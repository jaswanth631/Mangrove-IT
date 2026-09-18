import React from "react";
import Preloader from "../components/Preloader";
import PageBackground from "../components/PageBackground";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import AVIntegration from "../components/AVIntegration";
import ITIntegration from "../components/ITIntegration";
import SecuritySurveillance from "../components/SecuritySurveillance";
import InteriorAcoustics from "../components/InteriorAcoustics";
import ElectricalProjects from "../components/ElectricalProjects";
import Metrics from "../components/Metrics";
import Sectors from "../components/Sectors";
import NRIRealEstate from "../components/NRIRealEstate";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-page text-ink-primary overflow-x-hidden">
      <PageBackground />
      <Preloader />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <AVIntegration />
      <ITIntegration />
      <SecuritySurveillance />
      <InteriorAcoustics />
      <ElectricalProjects />
      <Metrics />
      <Sectors />
      <NRIRealEstate />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <ChatBot />
    </main>
  );
}
