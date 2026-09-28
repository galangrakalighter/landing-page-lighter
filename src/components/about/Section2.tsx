import React, {useState, useEffect} from "react";
import About_sec1 from "@/assets/About/About-sec1.png"
import Garis from "@/assets/garis.png"
import Garis_Hitam from "@/assets/garis_hitam.png"
const Counter = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;
    let isMounted = true;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * end);

      if (isMounted) {
        setCount(currentVal);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      isMounted = false;
      cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return <>{count}{suffix}</>;
};
const Section2 = () => {
    return (
        <>
            {/* Ditambahkan overflow-hidden agar Garis 210% tidak menyebabkan scroll horizontal di HP */}
            <section id="about_us" className="text-white py-12 md:py-16 bg-[#161616] overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-6 md:px-4 z-20">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">

                        {/* IMAGE SECTION - Diperbesar dengan mengubah w-1/2 menjadi w-[55%] pada desktop */}
                        <div className="w-full md:w-[55%] mb-6 sm:mb-[-5%] md:mb-0 flex items-center">
                            <div className="w-full flex justify-center md:justify-start">
                                {/* Image diperbesar dengan meningkatkan max-w-[500px] menjadi max-w-[700px] */}
                                <img 
                                    src={About_sec1} 
                                    alt="Visual Marketing Digital Desktop" 
                                    className="w-full max-w-[600px] md:max-w-full lg:scale-110 h-auto md:block mr-[1%] md:mr-0 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* TEXT SECTION - Disesuaikan menjadi w-[45%] agar gambar memiliki ruang lebih besar */}
                        <div className="w-full md:w-[45%] text-left md:text-left lg:pl-8">
                            <p className="xs:mt-0 xs:text-2xl text-white text-base sm:text-3xl md:text-2xl lg:text-3xl xl:4xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto md:mx-0 font-[Arial,Helvetica,sans-serif] textChange">
                                Lighter Media Group (LMG) adalah ekosistem media digital terintegrasi berbasis di Bandung yang berkembang sejak 2006. Berawal dari studio kecil, LMG terus berevolusi dari desain grafis, multimedia, digital marketing, hingga menjadi integrated digital media ecosystem. Kami menghadirkan berbagai layanan digital yang saling terhubung untuk membantu bisnis membangun branding, pemasaran, teknologi, dan penjualan secara strategis. Setiap layanan dirancang dalam satu ekosistem terpadu untuk menciptakan pertumbuhan bisnis dan peningkatan omset secara berkelanjutan
                            </p>
                        </div>

                    </div>

                    {/* STATISTICS SECTION */}
                    <div className="grid grid-cols-3 text-center mt-10">

                    {/* CLIENT */}
                    <div className="p-6">
                        <p className="text-xl md:text-4xl lg:text-4xl font-extrabold text-white textChange md:ml-[5%]"><Counter end={100} suffix=" +" /></p>
                        <p className="mt-2 text-gray-400 text-xl md:text-2xl lg:text-2xl text-white textChange font-medium md:mr-[3%]">Klien</p>
                    </div>

                    {/* PARTNERSHIP */}
                    <div className="p-6">
                        <p className="text-xl md:text-4xl lg:text-4xl font-extrabold text-white textChange md:ml-[4%]"><Counter end={50} suffix=" +" /></p>
                        <p className="mt-2 text-gray-400 text-xl md:text-2xl lg:text-2xl text-white textChange font-medium md:ml-[4%]">Kemitraan</p>
                    </div>

                    {/* BUSINESS */}
                    <div className="p-6">
                        <div className="text-xl md:text-4xl lg:text-4xl text-white textChange md:ml-[4%]">
                            {/* Angka 8 menjadi Bold */}
                            <span className="font-extrabold">
                                <Counter end={20} />
                            </span>
                            
                            {/* Teks Huruf tidak Bold (font-normal) */}
                            <span className="font-normal ml-2">Tahun</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-xl md:text-2xl lg:text-2xl text-white textChange font-medium md:ml-[4%]">Bisnis</p>
                    </div>

                    <div className="w-[210%] ml-[45%]">
                        <img src={Garis} className="w-full" id="garisPutih"/>
                        <img src={Garis_Hitam} className="w-full" id="garisHitam" style={{ display: "none"}}/>
                    </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2;