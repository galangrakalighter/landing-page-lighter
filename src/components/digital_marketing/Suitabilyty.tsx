import React from 'react';

interface SuitabilityItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const suitabilityData: SuitabilityItem[] = [
  {
    id: 1,
    title: "Punya produk tapi belum punya sistem digital",
    desc: "Memiliki produk hebat adalah modal besar, kini saatnya kita membangun infrastruktur digital yang matang agar operasional bisnis Anda berjalan otomatis.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v6a2 2 0 012-2m14-0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Mau scale tapi bingung mulai dari mana",
    desc: "Keinginan untuk bertumbuh sering kali terhambat oleh arah strategi yang buram, dan hal ini sangat wajar diselesaikan dengan pemetaan data funnel yang terukur.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Udah coba iklan sendiri tapi ga ada hasilnya",
    desc: "Sudah berani mengalokasikan budget untuk iklan mandiri adalah langkah maju yang luar biasa, sekarang kita tinggal mengoptimasi penargetannya berbasis data komprehensif.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Mau masuk e-commerce tapi ga ada tim",
    desc: "Keterbatasan tim internal untuk mengelola toko digital bukan lagi hambatan besar, karena seluruh manajemen marketplace Anda bisa kami handle secara profesional.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export const SuitabilitySection: React.FC = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`relative py-24 overflow-hidden bg-[#020066] ${arialStack}`}>
      {/* Background Overlay Matching Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-black via-[#010033] to-[#020066] opacity-95"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#F96300] text-xs font-black tracking-[0.25em] uppercase bg-[#F96300]/10 px-4 py-2 border border-[#F96300]/20 rounded-full">
            TARGET AUDIENS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mt-6 leading-none tracking-tight">
            KAMI COCOK UNTUK <span className="text-[#F96300]">KAMU YANG...</span>
          </h2>
          <p className="text-white/60 text-lg font-bold mt-4 tracking-normal">
            Jika salah satu kondisi di bawah ini menggambarkan posisi bisnis Anda saat ini, Anda berada di tempat yang tepat.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {suitabilityData.map((item) => (
            <div 
              key={item.id}
              className="relative overflow-hidden flex flex-col p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F96300]/40 transition-all duration-300 group"
            >
              {/* Decorative Subtle Light Effect on Hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#F96300]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              <div className="flex items-start gap-5 relative z-10">
                {/* ICON CONTAINER */}
                <div className="flex-shrink-0 p-3.5 bg-[#F96300]/10 border border-[#F96300]/20 rounded-2xl text-[#F96300] group-hover:bg-[#F96300] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                
                {/* TEXT CONTAINER */}
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white leading-snug uppercase tracking-tight group-hover:text-[#F96300] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* TONE EMPATIK (1 KALIMAT) */}
                  <p className="text-white/70 text-sm font-medium mt-3 leading-relaxed tracking-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* FOOTER CALL-TO-ACTION TRIGER */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm font-bold uppercase tracking-wider">
            Mari ubah tantangan di atas menjadi pertumbuhan grafik penjualan terstruktur.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SuitabilitySection;