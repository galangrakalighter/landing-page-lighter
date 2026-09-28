import WordPressSidebarWidget from "@/components/artikel/Widget";
export default function Sidebar() {
  return (
    <aside>
      <div className="sticky top-28 space-y-8">

        <WordPressSidebarWidget />

        {/* ADS */}
        <div className="w-full aspect-square bg-[#0f1115] border border-white/10 flex items-center justify-center relative rounded-xl overflow-hidden">
          <span className="absolute top-2 right-2 text-[9px] bg-white/10 text-white px-2 py-1 uppercase tracking-wider">
            Ads
          </span>

          <span className="text-gray-500 text-sm tracking-widest uppercase">
            Ads Space
          </span>
        </div>

        {/* NEWSLETTER */}
        <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 text-white shadow-2xl border border-white/10 rounded-xl">
          
          <h4 className="font-black text-2xl mb-3 uppercase italic tracking-tight">
            Join Us
          </h4>

          <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest leading-relaxed">
            Stay updated with the ecosystem
          </p>

          <form className="space-y-4">

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/10 focus:border-red-500 p-3 text-xs uppercase tracking-widest placeholder:text-gray-600 focus:outline-none transition"
            />

            <button
              type="submit"
              className="w-full bg-red-600 py-3 text-xs font-black uppercase tracking-widest 
                         hover:bg-white hover:text-black 
                         transition-all duration-300 rounded-lg"
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>
    </aside>
  );
}