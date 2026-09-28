import React, { useState, useEffect } from 'react';

interface ClientData {
  id: number;
  name: string;
  logoUrl: string;
  percentage: number; 
  testimonial: string;
  clientName: string;
  role: string;
}

const clientsData: ClientData[] = [
  {
    id: 1,
    name: 'Acme Corp',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    percentage: 98.4,
    testimonial: "Sistem pertumbuhan berbasis data dari agensi ini benar-benar membalikkan keadaan pasar kami. Revenue growth naik drastis dalam 3 bulan pertama!",
    clientName: "Budi Santoso",
    role: "CTO, Acme Corp"
  },
  {
    id: 2,
    name: 'Tuple',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    percentage: 95.2,
    testimonial: "Skala campaign dikelola secara agresif dan terukur. Kami berhasil menguasai dominasi pasar digital tanpa membakar budget sia-sia.",
    clientName: "Amalia Putri",
    role: "Head of Product, Tuple"
  },
  {
    id: 3,
    name: 'SavvyCal',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg',
    percentage: 91.7,
    testimonial: "Eksekusi strategi iklannya sangat tajam. Data analitik yang disajikan transparan, membuat setiap keputusan scale-up bisnis menjadi sangat mudah.",
    clientName: "Rian Perkasa",
    role: "Lead DevOps, SavvyCal"
  },
  {
    id: 4,
    name: 'Reform',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    percentage: 94.0,
    testimonial: "Bukan sekadar agensi yang melempar janji manis, mereka membuktikannya langsung lewat pertumbuhan konversi grafik penjualan kami.",
    clientName: "Siti Rahma",
    role: "CISO, Reform"
  },
  {
    id: 5,
    name: 'Statamic',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    percentage: 96.8,
    testimonial: "Arsitektur funnel marketing yang mereka bangun sangat kokoh. Retensi konsumen kami meningkat hingga titik tertinggi tahun ini.",
    clientName: "Dedi Wijaya",
    role: "Senior Engineer, Statamic"
  },
  {
    id: 6,
    name: 'Flash Tech',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg',
    percentage: 92.5,
    testimonial: "Tim yang sangat solid dan agresif dalam mengejar target ROI. Kerja sama terbaik untuk urusan digital growth market.",
    clientName: "Kevin Utama",
    role: "IT Director, Flash Tech"
  },
];

export const ClientTrustSection: React.FC = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  const [activeClient, setActiveClient] = useState<ClientData>(clientsData[0]);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(0);
    const timer = setTimeout(() => {
      setAnimatedProgress(activeClient.percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeClient]);

  const radius = 70;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const gaugeAngleRange = 270; 
  const strokeDashoffset = circumference - (animatedProgress / 100) * (gaugeAngleRange / 360) * circumference;

  return (
    <section className={`relative py-24 overflow-hidden bg-[#020066] ${arialStack}`}>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#020066] via-[#010033] to-black opacity-95"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="text-left mb-16">
          <h2 className={`text-4xl md:text-5xl font-black text-white leading-none mb-4 uppercase ${arialStack}`}>
            BUKTI NYATA <span className="text-[#F96300]">PERTUMBUHAN PASAR</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[32px] shadow-2xl mb-12 group">
          
          <div className="absolute -inset-1 bg-[#F96300]/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col items-center justify-center lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8 relative z-10">
            <div className="relative w-52 h-52 flex items-center justify-center">
              
              <svg className="w-full h-full transform -rotate-[225deg]" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-white/10"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (gaugeAngleRange / 360) * circumference}
                  strokeLinecap="round"
                />
                
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="url(#orangeTrustGradient)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />

                <defs>
                  <linearGradient id="orangeTrustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F96300" />
                    <stop offset="100%" stopColor="#ff8533" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Angka Persen Tengah yang Diperkecil & Lebih Proporsional */}
              <div className="absolute inset-0 flex flex-col items-center justify-center mt-[-4px]">
                <div className="w-full text-center flex justify-center items-baseline h-10 md:h-11">
                  <span className={`text-3xl md:text-4xl font-black text-white tabular-nums tracking-normal ${arialStack}`}>
                    {animatedProgress.toFixed(1)}
                  </span>
                  <span className={`text-xl md:text-2xl font-black text-white ml-0.5 ${arialStack}`}>%</span>
                </div>
                <span className={`text-[9px] text-white/40 uppercase font-black tracking-[0.2em] mt-2 ${arialStack}`}>
                  MARKET SUCCESS
                </span>
              </div>
            </div>

            <div className={`mt-4 px-4 py-1.5 bg-[#F96300]/20 border border-[#F96300]/30 rounded-full text-xs font-black text-[#F96300] uppercase tracking-wider ${arialStack}`}>
              DATA VERIFIED
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center min-h-[160px] relative z-10">
            <span className="absolute -top-10 -left-4 text-8xl text-[#F96300]/20 font-serif pointer-events-none">“</span>
            
            <blockquote className={`text-xl md:text-2xl text-white/90 leading-relaxed font-bold tracking-normal italic relative z-10 ${arialStack}`}>
              "{activeClient.testimonial}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col">
              <span className={`text-lg font-black text-[#F96300] uppercase ${arialStack}`}>
                {activeClient.clientName}
              </span>
              <span className={`text-sm text-white/50 font-bold ${arialStack}`}>
                {activeClient.role}
              </span>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {clientsData.map((client) => {
            const isSelected = activeClient.id === client.id;
            return (
              <button
                key={client.id}
                onClick={() => setActiveClient(client)}
                className={`flex justify-center items-center p-6 rounded-2xl border transition-all duration-300 h-24 bg-white/5 backdrop-blur-sm cursor-pointer
                  ${isSelected 
                    ? 'border-[#F96300] shadow-[0_0_25px_rgba(249,99,0,0.3)] opacity-100 scale-105' 
                    : 'border-white/10 opacity-30 grayscale invert brightness-200 hover:opacity-70 hover:border-white/30 hover:scale-102'
                  }`}
              >
                <img
                  className="max-h-7 w-full object-contain"
                  src={client.logoUrl}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ClientTrustSection;