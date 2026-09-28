import heroImage from "@/assets/Home/Home.png";
import icon from "@/assets/Home/Logo Web LMG.png";

const Home = () => {
  return (
    <>
      {/* h-screen agar pas satu layar di semua perangkat */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
  
      {/* BACKGROUND LAYER */}
      <picture>
        {/* Gambar Desktop (Layar > 768px) */}
        <source media="(min-width: 768px)" srcSet={heroImage} />
        
        {/* Gambar Mobile */}
        <img
          src={heroImage} 
          alt="Background Lighter Media Group"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-center z-0 xs:mt-[12vh] sm:mt-0"
        />
      </picture>

      {/* OVERLAY: Agar teks lebih mudah dibaca jika background terang */}

      {/* CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-white xs:mt-[-34vh] lg:mt-[-40vh]">
        
        {/* ICON / LOGO */}
        <img
          src={icon}
          alt="Icon LMG"
          className="w-[30%] xs:w-[40%] sm:w-[20%] md:w-[15%] lg:w-[30%] max-w-[180px] h-auto object-contain drop-shadow-2xl mb-6 md:mb-8 transition-all duration-500 xs:mb-[-1%]"
        />

        {/* HEADLINE */}
        <h1 className="text-2xl text-center xs:text-[10.5vw] sm:text-4xl md:text-5xl lg:text-[2.88vw] font-extrabold leading-tight md:leading-[1.1] tracking-tight drop-shadow-2xl font-[Arial,Helvetica,sans-serif] max-w-[95%] md:max-w-none mx-auto whitespace-normal md:whitespace-nowrap">
          Integrated Digital Media Ecosystem
        </h1>

        {/* SUB-HEADLINE */}
        <p className="mt-4 md:mt-6 text-sm xs:text-xl xs:text-center sm:text-center sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-[90%] sm:max-w-2xl lg:max-w-4xl font-[Arial,Helvetica,sans-serif] opacity-90">
          Kami membantu usaha berkembang dari branding, marketing, 
          <span className="hidden md:inline"> <br /> </span> 
          hingga omset dalam satu ekosistem digital
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;