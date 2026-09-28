import { usePosts } from "@/components/hooks/usePorts";
import HeroSection from "@/components/artikel/HeroSection";
import LatestSection from "@/components/artikel/LatestSection";
import Sidebar from "@/components/artikel/Sidebar";
import Navbar from "@/components/home/Navbar";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function Artikel() {
  const { posts, loading } = usePosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 1. Spacing: Menggunakan padding-top (pt) alih-alih margin-top persen agar lebih konsisten.
          2. Container: px-4 untuk mobile, px-6 untuk tablet agar konten tidak menempel ke pinggir.
      */}
      <main className="flex-grow max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12">
        
        {/* Hero Section biasanya sudah lebar penuh, beri margin bawah yang cukup */}
        <section className="mb-12 md:mb-20">
          <HeroSection posts={posts} />
        </section>

        {/* Grid System:
            - Default (Mobile): Stack vertikal (1 kolom).
            - Large Screen: Split 8/4.
            - Gap: Diperkecil di mobile, diperlebar di desktop.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 order-1">
            <LatestSection posts={posts} />
          </div>

          {/* Sidebar: 
              Bisa diletakkan di bawah konten pada mobile (order-2) 
              atau disembunyikan jika memang diinginkan. 
          */}
          <aside className="lg:col-span-4 order-2">
            <Sidebar />
          </aside>
          
        </div>
      </main>

      <Partnership />
      <Footer />
    </div>
  );
}