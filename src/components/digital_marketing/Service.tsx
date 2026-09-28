import React from 'react';

interface ServiceItem {
  title: string;
}

const services: ServiceItem[] = [
  { title: "Performance Ads" },
  { title: "Content Strategy & Production" },
  { title: "Brand Strategy & Identity" },
  { title: "Social Media Management" },
  { title: "E-commerce Setup" },
  { title: "Campaign Activation & KOL" },
  { title: "Full-stack End-to-End" },
];

export const ServicesScopeSection = () => {
  const interStack = "font-['Inter',_sans-serif]";

  return (
    <section className={`py-24 bg-[#010033] border-y border-white/5 ${interStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-[#F96300] font-extrabold tracking-[0.3em] uppercase text-xs mb-4 leading-none">
            Full Spectrum
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-none">
            Cakupan Layanan
          </h3>
        </div>

        {/* FLEX LAYOUT FOR STAGGERED EFFECT */}
        {/* Menggunakan flex-wrap dan justify-center agar baris kedua otomatis di tengah/sela-sela */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-[#020066] p-8 h-48 rounded-[28px] border border-white/5 transition-all duration-500 hover:border-[#F96300]/40 group relative overflow-hidden flex flex-col justify-between
                w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
            >
              {/* Top Border Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 group-hover:bg-[#F96300] transition-colors duration-300"></div>
              
              {/* Service Title */}
              <div className="relative z-10">
                <h4 className="text-2xl font-extrabold text-white uppercase tracking-tight leading-snug group-hover:text-[#F96300] transition-colors duration-300 text-center">
                  {s.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServicesScopeSection;