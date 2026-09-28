import Home from "@/components/home/Home";
import WhyDigital from "@/components/home/WhyDigital";
import WhoAreWe from "@/components/home/WhoAreWe";
import Jelajah from "@/components/home/Jelajah";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import CaraKerja from "@/components/home/CaraKerja";
import Client from "@/components/home/Client";
import Projects from "@/components/home/Projects";
import SEO from "@/components/Seo";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Intregated Digital Media Ecosystem" 
        description="Lighter Media Group membantu brand Anda tumbuh melalui strategi branding, digital marketing, dan produksi multimedia profesional."
        path="/"
      />
      <Navbar />
      <Home />
      <WhyDigital />
      <WhoAreWe />
      <Jelajah />
      <CaraKerja />
      <Client />
      {/* <Projects /> */}
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default Index;
