import HeroSection from "@/components/digital_marketing/Hero"; 
import PortfolioSection from "@/components/digital_marketing/Portofolio";
import ProblemSection from "@/components/digital_marketing/Problem";
import ProcessSection from "@/components/digital_marketing/Process";
import ServicesScopeSection from "@/components/digital_marketing/Service";
import SolutionSection from "@/components/digital_marketing/Solution";
import TestimonialSection from "@/components/digital_marketing/Testimonial";
import AboutLGTRSection from "@/components/digital_marketing/About";
import StrategySection from "@/components/digital_marketing/Strategy";
import FAQSection from "@/components/digital_marketing/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Client from "@/components/home/Client";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import TrustBar from "@/components/digital_marketing/Trust";
import React, { useState } from "react";
import SuitabilitySection from "@/components/digital_marketing/Suitabilyty";
import DeliverablesSection from "@/components/digital_marketing/Deliverable";
const DigitalMarketing: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <AboutLGTRSection />
      <SuitabilitySection />
      <SolutionSection />
      <ServicesScopeSection />
      <DeliverablesSection />
      <StrategySection />
      <ProcessSection />
      {/* <PortfolioSection /> */}
      <Client />
      {/* <TestimonialSection /> */}
      <FAQSection />
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default DigitalMarketing;
