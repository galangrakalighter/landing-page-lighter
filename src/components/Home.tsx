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
        <h1
          className="
            text-center
            font-[Arial,Helvetica,sans-serif]
            font-extrabold
            tracking-tight
            leading-tight
            drop-shadow-2xl
            mx-auto

            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            xl:text-5xl

            max-w-[95%]
            sm:max-w-4xl
            lg:max-w-6xl

            whitespace-nowrap
          "
        >
          Hampir 2 Dekade Menemani Bisnis Bertumbuh <br />
          Lewat Ekosistem Digital Terintegrasi
        </h1>

        {/* SUB-HEADLINE */}
        <p
          className="
            mt-4
            md:mt-6
            text-center
            font-[Arial,Helvetica,sans-serif]
            leading-relaxed
            opacity-90
            mx-auto

            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            xl:text-2xl

            max-w-[92%]
            sm:max-w-2xl
            lg:max-w-4xl
            whitespace-nowrap
          "
        >
          Kami mengintegrasikan seluruh pengalaman masa lalu dan teknologi masa kini
          untuk <br /> membantu usaha Anda naik kelas melalui branding dan marketing yang
          terukur
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;