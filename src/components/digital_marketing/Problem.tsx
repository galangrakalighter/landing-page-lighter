import React from 'react';

interface ProblemItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ProblemSection = () => {
  const problems: ProblemItem[] = [
    { 
      title: "Iklan jalan tapi ga convert", 
      desc: "Mendatangkan traffic tinggi ke website sudah menjadi langkah awal yang hebat, kini kita hanya perlu menyelaraskan corong (funnel) agar pengunjung tersebut berubah menjadi pembeli.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      title: "Budget bocor ga ketahuan", 
      desc: "Menghadapi biaya akuisisi yang membengkak di tengah algoritma dinamis memang penuh tantangan, namun fase ini sangat wajar dilalui sebelum kita mengoptimasinya berbasis data.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    { 
      title: "Konten banyak, sales nol", 
      desc: "Dedikasi Anda dalam membuat konten masif sudah luar biasa, dan tantangan penjualan ini biasanya selesai begitu arah strategi branding dihubungkan ke sistem konversi.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
        </svg>
      )
    },
    { 
      title: "Buta data ROI kampanye", 
      desc: "Sangat wajar jika Anda merasa kesulitan menghitung perputaran modal dari campaign yang rumit, dan hal ini bisa diurai secara transparan dengan membangun infrastruktur tracking yang rapi.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      )
    },
  ];

  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-[#020066] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          {/* Subtitle - Arial Black */}
          <h2 className={`text-[#F96300] font-black tracking-widest uppercase text-xs mb-4 leading-none ${arialStack}`}>
            The Challenge
          </h2>
          {/* Main Title - Arial Black, Tracking Normal */}
          <h3 className={`text-4xl md:text-6xl font-black text-white uppercase tracking-normal leading-tight ${arialStack}`}>
            Hentikan Kebocoran Budget
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="p-10 bg-[#010033] border border-[#F96300]/10 rounded-3xl transition-all duration-500 hover:border-[#F96300]/40 hover:scale-105 hover:shadow-[0_10px_30px_rgba(249,99,0,0.1)] group">
              <div className="w-14 h-14 bg-[#F96300]/10 rounded-2xl flex items-center justify-center mb-8 text-[#F96300] group-hover:bg-[#F96300] group-hover:text-[#020066] transition-all">
                {p.icon}
              </div>
              
              {/* Card Title - Arial Black */}
              <h4 className={`text-xl font-black text-white mb-4 group-hover:text-[#F96300] transition-colors uppercase tracking-normal leading-tight ${arialStack}`}>
                {p.title}
              </h4>
              
              {/* Card Desc - Arial Bold */}
              <p className={`text-white/60 text-sm leading-relaxed font-bold tracking-normal ${arialStack}`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;