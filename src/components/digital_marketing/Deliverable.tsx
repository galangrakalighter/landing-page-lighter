import React from 'react';

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  { 
    title: "Performance Ads",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  { 
    title: "Content Strategy & Production",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    title: "Brand Strategy & Identity",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V9a5 5 0 00-10 0v1c0 .538.214 1.055.596 1.436L4 16m5-5a3 3 0 011.59-2.683M12 11a3 3 0 11-6 0m6 0c0 3.517 1.009 6.799 2.753 9.571m3.44-2.04l-.054-.09A13.916 13.916 0 0015 11V9a5 5 0 0010 0v1c0 .538-.214 1.055-.596 1.436L20 16m-5-5a3 3 0 01-1.59-2.683" />
      </svg>
    )
  },
  { 
    title: "Social Media Management",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    )
  },
  { 
    title: "E-commerce Setup",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  { 
    title: "Campaign Activation & KOL",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  { 
    title: "Full-stack End-to-End",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
];

export const ServicesScopeSection = () => {
  const interStack = "font-['Inter',_sans-serif]";

  return (
    <section className={`py-24 bg-[#020066] ${interStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-[#F96300] font-extrabold tracking-widest uppercase text-xs mb-4 leading-none">
            Full Spectrum
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-none">
            Cakupan Layanan
          </h3>
        </div>

        {/* STAGGERED FLEX LAYOUT (4 Atas, 3 Bawah Rata Tengah) */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="p-10 bg-[#010033] border border-[#F96300]/10 rounded-3xl transition-all duration-500 
                hover:border-[#F96300]/40 hover:scale-105 hover:shadow-[0_10px_30px_rgba(249,99,0,0.1)] group flex flex-col justify-between
                w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-h-[240px]"
            >
              <div>
                {/* Icon Box Container */}
                <div className="w-14 h-14 bg-[#F96300]/10 rounded-2xl flex items-center justify-center mb-8 text-[#F96300] group-hover:bg-[#F96300] group-hover:text-[#020066] transition-all duration-300">
                  {s.icon}
                </div>
                
                {/* Service Title - Inter Extrabold text-2xl */}
                <h4 className="text-2xl font-extrabold text-white group-hover:text-[#F96300] transition-colors uppercase tracking-tight leading-snug">
                  {s.title}
                </h4>
              </div>

              {/* Watermark Angka Indikator di Pojok Kanan Bawah */}
              <div className="text-right select-none pointer-events-none leading-none mt-4">
                <span className="text-4xl font-extrabold text-white/[0.03] group-hover:text-[#F96300]/10 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServicesScopeSection;