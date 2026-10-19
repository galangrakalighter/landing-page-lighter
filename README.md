# Lighter Media Group Website

Website profil dan katalog layanan Lighter Media Group, dibangun sebagai SPA dengan React, TypeScript, Vite, Tailwind CSS, dan React Router.

## Fitur

- Landing page dengan hero, profil perusahaan, cara kerja, proyek, klien, partnership, footer, dan navigasi responsif.
- Mega menu layanan desktop serta drawer menu mobile.
- Loading indicator saat navigasi, tema gelap default, layout responsif, animasi, accordion FAQ, carousel, card, tooltip, dialog, tabs, toast, dan hover state.
- SEO metadata menggunakan `react-helmet-async`, halaman 404, Terms of Service, dan Privacy Policy.
- Tombol WhatsApp, form Hubungi Kami, serta komponen lokasi/Google Maps.

### Layanan

- **Branding Agency** — identitas visual, strategi brand, solusi, proses, portofolio, testimonial, dan FAQ.
- **Digital Marketing Agency** — strategi, trust, suitability, solusi, deliverables, proses, dan FAQ.
- **MCN** — manajemen kreator, talent, monetisasi, kolaborasi brand, dan growth framework.
- **E-Commerce Agency** — marketplace, proposisi nilai, layanan, sistem konversi, dan proses penjualan.
- **Tech Agency** — layanan teknologi, tech stack, integrasi, arsitektur, proses, case study, dan FAQ.
- **Academy** — program edukasi, kurikulum, corporate training, dan metode belajar.
- **Event Organizer** — solusi event, operasional, proses, portofolio, dan FAQ.
- **Multimedia** — produksi multimedia, showcase, tipe konten, dan proses produksi.

## Halaman dan routing

| URL | Halaman | Status |
| --- | --- | --- |
| `/` | Beranda | Aktif |
| `/tentang` | Tentang Kami | Aktif |
| `/branding` | Branding Agency | Aktif |
| `/digital_marketing` | Digital Marketing Agency | Aktif |
| `/ecommerce` | E-Commerce Agency | Aktif |
| `/event_organizer` | Event Organizer | Aktif |
| `/multimedia` | Multimedia | Aktif |
| `/academy` | Academy | Aktif |
| `/tech` | Tech Agency | Aktif |
| `/mcn` | MCN | Aktif |
| `/card` | Card | Aktif |
| `/terms-of-service` | Syarat dan Ketentuan | Aktif |
| `/privacy-policy` | Kebijakan Privasi | Aktif |
| URL lain | Not Found | Fallback aktif |

### Artikel

Komponen artikel sudah tersedia: integrasi WordPress, mapping judul/slug/isi/excerpt/tanggal/featured image/author, hero artikel, latest articles, sidebar, detail artikel, widget YouTube, dan parsing konten WordPress.

Route `/artikel` dan `/artikel/:slug` masih dikomentari di `src/App.tsx`. Navbar menampilkan link Artikel dan Berita, tetapi route keduanya belum didaftarkan sehingga masuk ke Not Found.

## Teknologi

React 18, TypeScript, Vite, React Router DOM, Tailwind CSS, Radix UI, TanStack React Query, React Helmet Async, React Hook Form, Zod, Lucide React, Font Awesome, Motion, OGL, Three.js, React Scroll, React Player, React YouTube, Recharts, Embla Carousel, Sonner, dan Vaul.

## Instalasi

Persyaratan: Node.js yang kompatibel dengan Vite/TypeScript pada `package.json`, npm atau Bun, dan akses internet untuk API WordPress.

```bash
git clone <url-repository>
cd website-lighter
npm install
# atau: bun install
```

## Perintah tersedia

```bash
npm run dev          # Development server
npm run build        # Build production ke dist/
npm run build:dev    # Build mode development
npm run lint         # Pemeriksaan ESLint
npm run preview      # Preview hasil build
```

Development server Vite biasanya tersedia di `http://localhost:5173`.

## Struktur project

```text
public/                  # favicon, robots.txt, placeholder
src/assets/              # gambar, logo, ilustrasi, dan asset halaman
src/components/          # komponen reusable dan section layanan
src/components/ui/       # komponen UI berbasis Radix/shadcn-style
src/components/services/ # integrasi API, termasuk WordPress
src/components/context/  # loading context global
src/pages/               # komposisi halaman dan route-level components
src/hooks/               # custom hooks
src/lib/                 # utility function
src/App.tsx              # provider, router, dan daftar route
src/main.tsx             # entry point React
```

## Integrasi eksternal

### WordPress API

```text
https://article.lightermediagroup.com/wp-json/wp/v2/posts?_embed&per_page=10&page=<nomor>
https://article.lightermediagroup.com/wp-json/mywidget/v1/data
```

Implementasi berada di `src/components/services/wordpress.ts` dan `src/components/artikel/Widget.tsx`.

### Kontak

- WhatsApp navbar: `62882002906686`
- WhatsApp footer: `62882002456108`
- Email legal: `admin@lightermediagroup.com`

## Catatan implementasi

- Belum ada file `.env`; URL API dan kontak masih hard-coded di source code.
- React Query dipasang sebagai provider dan digunakan untuk prefetch artikel; `App.tsx` juga memuat post awal melalui `fetchPosts()`.
- Karena memakai `BrowserRouter`, hosting harus mengarahkan route SPA ke `index.html`.
- Sejumlah testimonial/portfolio tersedia sebagai komponen tetapi pemanggilannya dikomentari pada beberapa halaman.
- `template_2.tsx` dan `template_3.tsx` masih berupa template eksperimen/nonaktif.
- Form kontak footer masih memakai `action="#"` dan belum mengirim data ke backend.
- `dist/` adalah hasil build; `dist.zip` adalah arsip build di repository.

## Build dan deployment

1. Jalankan `npm run lint`.
2. Jalankan `npm run build`.
3. Upload isi `dist/` ke hosting static/web server.
4. Konfigurasikan fallback semua route ke `index.html`.
5. Pastikan API WordPress dan resource eksternal dapat diakses.

Untuk deployment ke subpath, sesuaikan `base` pada `vite.config.ts`.

## Pengembangan

Saat menambah layanan baru, buat page di `src/pages/`, section di `src/components/<nama-layanan>/`, daftarkan route di `src/App.tsx`, tambahkan item ke Navbar/Footer, tambahkan metadata SEO, lalu jalankan lint dan build.

Gunakan alias import `@/` untuk import dari `src` dan manfaatkan komponen UI yang sudah tersedia.

## Lisensi

Lisensi belum ditentukan secara eksplisit. Jangan mendistribusikan asset brand, logo, foto, atau konten bisnis tanpa izin pemiliknya.
