import { Heart } from "lucide-react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const clients = [
      { name: "Branding Agency", url: "/branding"},
      { name: "Digital Marketing Agency", url: "/digital_marketing"},
      { name: "MCN", url: "/mcn"},
      { name: "E-Commerce Agency", url: "/ecommerce"},
      { name: "Tech Agency", url: "/tech"},
      { name: "Academy", url: "/academy"},
      { name: "Event Organizer", url: "/event_organizer"},
      { name: "Multimedia", url: "/multimedia"},
    ];

  return (
    <Element name="contact-section">
      <section id="contact" className="py-20 bg-[#161616] divChange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* MAPS — KIRI */}
          <div className="w-full flex justify-center md:mt-[10%]">
            <div className="w-full max-w-4xl rounded-xl overflow-hidden">
              <div className="relative w-full pt-[40%] md:pt-[100%] lg:pt-[140%] rounded-xl overflow-hidden">
                
                {/* grid-cols-2 dikunci untuk semua ukuran layar */}
                <div className="absolute top-0 left-0 w-full h-full overflow-y-auto no-scrollbar grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl shadow-2xl">
                  
                  {clients.map((client, index) => (
                    <Link 
                      key={index} 
                      to={client.url}
                      className="group relative bg-[#0a0a0a] p-6 md:p-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.02] cursor-pointer text-center"
                    >
                      {/* Area Teks Nama Client */}
                      <div className="relative z-10 transition-all duration-500 group-hover:scale-105">
                        {/* Mengganti font-[Arial,...] menjadi font-['Inter',sans-serif] */}
                        <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors uppercase font-['Inter',sans-serif]">
                          {client.name}
                        </h3>
                      </div>
                      
                      {/* Efek Hover Background Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.07] to-transparent"></div>
                      </div>
                    </Link>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>


          {/* FORM GET IN TOUCH — KANAN */}
          <div className="bg-[#161616] p-8 rounded-xl divChange">
            <h2 className="text-3xl font-bold text-white mb-6 textChange font-[Arial,Helvetica,sans-serif]">
              HUBUNGI KAMI
            </h2>

            <form action="#" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white textChange font-[Arial,Helvetica,sans-serif]">
                  Nama
                </label>
                <input type="text" id="name" name="name" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact"/>
              </div>

              <div>
                <label className="block text-sm font-medium text-white textChange">
                  Email
                </label>
                <input type="email" id="email" name="email" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact"/>
              </div>

              <div>
                <label className="block text-sm font-medium text-white textChange">
                  Tujuan Kontak
                </label>
                <select id="purpose" name="purpose" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact">
                  <option>Klien</option>
                  <option>Masukan</option>
                  <option>Pertanyaan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white textChange">
                  Pesan
                </label>
                <textarea id="message" name="message" rows={4} 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact"></textarea>
              </div>

              <button type="submit" 
                className="w-full px-4 py-3 bg-[#161616] text-white font-semibold textChange divChange">
                Kirim
              </button>
            </form>
            <div className="bg-[#161616] p-8 rounded-xl divChange">
              <h3 className="text-2xl font-bold text-white mb-6 border-b pb-3 textChange font-[Arial,Helvetica,sans-serif]">
                KONTAK KAMI
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">wegrow@lightermediagroup.com</span>
                </li>
                <li className="flex items-center space-x-3">
                 <div className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-white text-2xl"
                    />
                  </div>
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">
                    <a href="https://wa.me/62882002456108" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                      +62882002456108
                    </a>
                  </span>
                </li>

                {/* Instagram */}
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">
                    <a href="https://www.instagram.com/lightermediagroup/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                      @lightermediagroup
                    </a>
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">LIGHTER MULTIMEDIA</span>
                </li> */}
              </ul>
            </div>
          </div>

        </div>
    </section>

    <footer className="bg-[#161616] xs:mt-[-10%] md:mt-0 lg:mt-0 xl:mt-0 text-white py-8 text-center textChange divChange">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2024 Lighter Media Group. WIN THE MARKET FOR YOU.</p>
      </div>
    </footer>
    </Element>
  );
};

export default Footer;
