const HeroSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020066] ${arialStack}`}>
      {/* Dynamic Background Overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#020066] via-[#010033] to-black opacity-90"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          {/* Main Title - Arial Black, Tracking Normal */}
          <h1 className={`text-6xl md:text-[90px] font-black text-white leading-[0.95] mb-8 tracking-normal uppercase ${arialStack}`}>
            WIN THE <span className={`text-[#F96300] ${arialStack}`}>MARKET</span> FOR YOU
          </h1>
          
          {/* Description - Arial Bold */}
          <p className={`text-white/70 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-bold tracking-normal ${arialStack}`}>
            Bukan sekadar agensi iklan. Kami membangun sistem pertumbuhan digital berbasis data untuk membantu bisnis Anda scale secara agresif dan menguasai pasar
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Button - Arial Black */}
            <button className={`px-10 py-5 bg-[#F96300] hover:bg-[#ff7b24] text-white font-black rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#F96300] uppercase tracking-[0.15em] text-sm leading-none ${arialStack}`}>
             Konsultasi Gratis
            </button>
            <button className={`px-10 py-5 bg-[#F96300] hover:bg-[#ff7b24] text-white font-black rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#F96300] uppercase tracking-[0.15em] text-sm leading-none ${arialStack}`}>
              Lihat Case Study
            </button>
          </div>
        </div>
        
        {/* Interactive Dashboard Visual */}
        <div className="relative group hidden lg:block">
          <div className="absolute -inset-4 bg-[#F96300]/10 blur-[100px] rounded-full group-hover:bg-[#F96300]/20 transition-all duration-700"></div>
          <div className="relative aspect-video bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="space-y-6">
              <div className="h-6 w-3/4 bg-white/10 rounded-lg"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-32 bg-[#F96300]/20 border border-[#F96300]/30 rounded-2xl flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Stats - Arial Black, Removed Italic */}
                  <span className={`text-[#F96300] text-4xl font-black tracking-normal ${arialStack}`}>+320%</span>
                  {/* Label - Arial Black Extra Small */}
                  <span className={`text-white/40 text-[8px] uppercase font-black tracking-[0.2em] mt-1 ${arialStack}`}>
                    Revenue Growth
                  </span>
                </div>
                <div className="h-32 bg-white/5 border border-white/10 rounded-2xl"></div>
                <div className="h-32 bg-white/5 border border-white/10 rounded-2xl"></div>
              </div>
              <div className="h-20 w-full bg-white/5 rounded-2xl overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F96300]/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;