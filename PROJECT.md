# OSIS WEBSITE PROJECT 

## STRUCTURE:

./content
./content/articles
./content/articles/artikel-fitur-baru.md
./content/articles/belajar-javascript.md
./content/articles-manifest.json
./content/osis-data.json
./css
./css/style.css
./img
./img/covers
./img/covers/news1.jpg
./img/covers/news2.jpg
./img/covers/news3.jpg
./img/icon.png
./img/slide1.jpg
./img/slide2.jpg
./img/slide3.jpg
./index.html
./js
./js/app.js
./js/articles.js
./js/components.js
./js/home.js
./js/md-parser.js
./js/struktur.js
./PROJECT.md
./README.md
./static
./static/about.html
./static/articles
./static/articles/artikel-fitur-baru.html
./static/articles/belajar-javascript.html
./static/articles.html
./static/contacts.html
./static/proker.html
./static/struktur.html
./tools
./tools/build-manifest.py

`content/articles/artikel-fitur-baru.md`
```md
---
title: Peluncuran Fitur Terbaru Website Kami
category: Teknologi & Fitur
author: Ikram Rahmani
date: 22 Mei 2026
readtime: 4 menit
cover: https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80
cover_caption: Pembaruan antarmuka untuk pengalaman pengguna yang lebih mulus dan responsif.
---

Selamat datang di platform digital kami yang telah diperbarui! Kami dengan bangga mengumumkan peluncuran serangkaian fitur interaktif baru yang dirancang khusus untuk meningkatkan kenyamanan akses informasi Anda.

## Apa saja yang Baru di Pembaruan Ini?

Setelah mengumpulkan berbagai masukan dari anggota komunitas, tim pengembang kami berfokus pada kecepatan pemuatan halaman dan kemudahan navigasi, khususnya bagi pengguna perangkat seluler (*mobile-first*).

![Kode Pemrograman|Penulisan ulang sistem menggunakan struktur HTML statis dan Vanilla JS.](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

### Rincian Perubahan Inti

- **Multi-Page Architecture:** Pergantian dari sistem satu halaman ke multi-halaman penuh yang cepat. URL kini jauh lebih rapi.
- **Sistem Artikel Markdown:** Siapapun kini bisa menulis artikel cukup dengan mengetik teks biasa — tidak perlu coding sama sekali.
- **Bagan Organisasi Fleksibel:** Desain responsif bertingkat yang otomatis menyesuaikan tata letak jika dibuka dari ponsel pintar.

> "Inovasi berkelanjutan adalah komitmen utama kami dalam menghadirkan informasi yang transparan, mudah dijangkau, dan aman bagi seluruh anggota."

Kami sangat menantikan masukan dari Anda! Jika Anda memiliki saran tambahan atau mengalami kendala teknis saat mengakses portal, jangan ragu untuk menghubungi tim dukungan kami melalui halaman menu kontak resmi.
```

`content/articles/articles-manifest.json`
```json
[
  {
    "id": "artikel-fitur-baru",
    "file": "content/articles/artikel-fitur-baru.md",
    "category": "teknologi",
    "featured": true,
    "cover": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "excerpt": "Kami baru saja memperbarui sistem navigasi dan menambahkan tampilan visual yang lebih interaktif.",
    "date": "2026-05-22",
    "title": "Peluncuran Fitur Terbaru Website Kami",
    "author": "Ikram Rahmani",
    "date_display": "22 Mei 2026",
    "readtime": "4 menit",
    "cover_caption": "Pembaruan antarmuka untuk pengalaman pengguna yang lebih mulus dan responsif.",
    "category_display": "Teknologi & Fitur",
    "body": "Selamat datang di platform digital kami yang telah diperbarui! Kami dengan bangga mengumumkan peluncuran serangkaian fitur interaktif baru yang dirancang khusus untuk meningkatkan kenyamanan akses informasi Anda.\n\n## Apa saja yang Baru di Pembaruan Ini?\n\nSetelah mengumpulkan berbagai masukan dari anggota komunitas, tim pengembang kami berfokus pada kecepatan pemuatan halaman dan kemudahan navigasi, khususnya bagi pengguna perangkat seluler (*mobile-first*).\n\n![Kode Pemrograman|Penulisan ulang sistem menggunakan struktur HTML statis dan Vanilla JS.](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)\n\n### Rincian Perubahan Inti\n\n- **Multi-Page Architecture:** Pergantian dari sistem satu halaman ke multi-halaman penuh yang cepat. URL kini jauh lebih rapi.\n- **Sistem Artikel Markdown:** Siapapun kini bisa menulis artikel cukup dengan mengetik teks biasa — tidak perlu coding sama sekali.\n- **Bagan Organisasi Fleksibel:** Desain responsif bertingkat yang otomatis menyesuaikan tata letak jika dibuka dari ponsel pintar.\n\n> \"Inovasi berkelanjutan adalah komitmen utama kami dalam menghadirkan informasi yang transparan, mudah dijangkau, dan aman bagi seluruh anggota.\"\n\nKami sangat menantikan masukan dari Anda! Jika Anda memiliki saran tambahan atau mengalami kendala teknis saat mengakses portal, jangan ragu untuk menghubungi tim dukungan kami melalui halaman menu kontak resmi."
  },
  {
    "id": "belajar-javascript",
    "file": "content/articles/belajar-javascript.md",
    "category": "edukasi",
    "featured": false,
    "cover": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "excerpt": "Mengenal dasar DOM manipulation sangatlah penting sebelum berpindah menggunakan framework modern.",
    "date": "2026-05-20",
    "title": "Tips Belajar Vanilla Javascript Bagi Pemula",
    "author": "Tim OSIS",
    "date_display": "20 Mei 2026",
    "readtime": "5 menit",
    "cover_caption": "Belajar bersama adalah kunci sukses memahami pemrograman web.",
    "category_display": "Edukasi",
    "body": "Banyak yang langsung lompat ke React atau Vue tanpa memahami dasar-dasarnya. Padahal, memahami Vanilla JS adalah fondasi terkuat untuk menjadi web developer yang handal.\n\n## Mengapa Vanilla JS?\n\nVanilla JS adalah JavaScript murni — tanpa library, tanpa framework. Belajar dari dasar membuat kamu benar-benar paham bagaimana browser bekerja, bukan cuma hafal sintaks framework.\n\n## Langkah Belajar yang Tepat\n\n### 1. Kuasai DOM Manipulation\n\nDOM (Document Object Model) adalah cara JavaScript berkomunikasi dengan HTML. Mulai dari sini:\n\n- `document.getElementById()` — ambil elemen berdasarkan ID\n- `element.addEventListener()` — dengarkan event seperti klik dan ketikan\n- `element.innerHTML` — ubah konten HTML secara dinamis\n\n### 2. Pelajari Fetch API\n\nSetelah DOM, pelajari cara mengambil data dari internet menggunakan `fetch()`. Ini adalah skill paling penting di web modern.\n\n### 3. Latihan Membuat Project Kecil\n\nTeori tanpa praktik tidak akan kemana-mana. Coba buat:\n\n- To-do list sederhana\n- Kalkulator\n- Filter gambar/artikel seperti di website ini!\n\n> \"Seorang programmer hebat tidak lahir dari membaca buku, tapi dari menulis kode setiap hari.\"\n\nSemangat terus belajarnya! OSIS SMKN 68 selalu mendukung perkembangan digital literacy anggotanya."
  }
]
```

`content/articles/osis-data.json`

```json
{
  "pimpinanAtas": [
    { "nama": "Marlinah M.Pd", "jabatan": "Kepala Sekolah" },
    { "nama": "Etty Soelistyowati Wulandari", "jabatan": "Wakil Kepala Bidang Kesiswaan" },
    { "nama": "Muhammad Bintang Nugraha, S.Pd", "jabatan": "Pembina OSIS" },
    { "nama": "Wahid Ramdani", "jabatan": "Ketua OSIS" },
    { "nama": "Maqdis G. Al Adzani", "jabatan": "Wakil Ketua OSIS" }
  ],
  "sekretaris": [
    { "nama": "Dascha Anandita", "jabatan": "Sekretaris I" },
    { "nama": "Azzaleya May Faeza", "jabatan": "Sekretaris II" }
  ],
  "bendahara": [
    { "nama": "Federikho Prayoga", "jabatan": "Bendahara I" },
    { "nama": "Nauval Abiyu S.", "jabatan": "Bendahara II" }
  ],
  "koordinator": { "nama": "Anita Solehah", "jabatan": "Koordinator Sekbid" },
  "sekbid": [
    {
      "nama": "Kerohanian",
      "ketua": "Fajar Faiz Basri",
      "departemen": [
        { "nama": "Dept. Keagamaan", "anggota": ["Christian Timbul S.", "M. Adi Yuna"] },
        { "nama": "Dept. Kerukunan & Toleransi", "anggota": ["Dinar Rifa A."] }
      ]
    },
    {
      "nama": "Kedisiplinan",
      "ketua": "Fearbly A. Hafidzh",
      "departemen": [
        { "nama": "Dept. Tata Tertib", "anggota": ["Gautama A. Setyandi"] },
        { "nama": "Dept. Budi Pekerti", "anggota": ["Dimas Maulana", "Jenyka Suliestia"] }
      ]
    },
    {
      "nama": "Dana Usaha",
      "ketua": "Fakhri Ghozi",
      "departemen": [
        { "nama": "Dept. Sponsorship", "anggota": ["Rasya Eka Putra"] },
        { "nama": "Dept. Dana Usaha", "anggota": ["Achmad Kafi", "Satria P Prakasa"] }
      ]
    },
    {
      "nama": "Humas IT",
      "ketua": "Mutia Dewi",
      "departemen": [
        { "nama": "Dept. Humas", "anggota": ["Samuel Tamba"] },
        { "nama": "Dept. IT", "anggota": ["Ikram Rahmani"] }
      ]
    },
    {
      "nama": "Jasmani & Kreativitas",
      "ketua": "Hilal Jamaludin",
      "departemen": [
        { "nama": "Dept. Kreativitas", "anggota": ["Anita Yuliasari", "Maylaffayzza S."] },
        { "nama": "Dept. Jasmani", "anggota": ["Abbiel Azka A.", "Ahmad Azri"] },
        { "nama": "Dept. Sastra Bahasa", "anggota": ["Elisa Ramadhani", "Nadya Ablyah Dwi N"] }
      ]
    }
  ]
}

```

`css/style.css`

```css
/* ==========================================================================
   1. GLOBAL SYSTEM SETTINGS & VARIABLES
   ========================================================================== */
   :root {
    --primary: #007bff;
    --primary-hover: #0056b3;
    --bg-main: #f8fafc;
    --bg-card: #ffffff;
    --text-dark: #1e293b;
    --text-muted: #64748b;
    --text-light: #f1f5f9;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.03);
    --radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --line-color: #cbd5e1;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-dark);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1.6;
}

/* ==========================================================================
   2. NAVIGATION & FOOTER (shared components)
   ========================================================================== */
.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-card);
    padding: 18px 40px;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo a {
    font-size: 22px;
    font-weight: 800;
    color: var(--text-dark);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    gap: 8px;
}

.nav-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    border-radius: 8px;
    transition: var(--transition);
    text-decoration: none;
    display: inline-block;
}

.nav-btn:hover {
    background-color: #f1f5f9;
    color: var(--text-dark);
}

.nav-btn.active {
    background-color: var(--primary);
    color: #ffffff;
}

.site-footer {
    background-color: #0f172a;
    color: var(--text-light);
    padding: 60px 40px 30px;
    margin-top: auto;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
}

.footer-section h4 {
    margin-bottom: 16px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
}

.footer-section p {
    margin-bottom: 8px;
    font-size: 14px;
    color: #94a3b8;
    line-height: 1.6;
}

.footer-section.socials {
    display: flex;
    flex-direction: column;
}

.footer-section.socials a {
    color: #94a3b8;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 14px;
    transition: var(--transition);
}

.footer-section.socials a:hover {
    color: var(--primary);
    transform: translateX(4px);
}

.footer-bottom {
    text-align: center;
    margin-top: 50px;
    padding-top: 25px;
    border-top: 1px solid #334155;
    font-size: 14px;
    color: #64748b;
}

/* ==========================================================================
   3. SUBPAGE BANNER
   ========================================================================== */
.subpage-banner {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #ffffff;
    padding: 60px 40px;
    text-align: center;
}

.subpage-banner h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 10px;
}

.subpage-banner p {
    color: #94a3b8;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
}

/* ==========================================================================
   4. HOME PAGE
   ========================================================================== */
.hero-container {
    position: relative;
    width: 100%;
    height: 65vh;
    min-height: 450px;
    overflow: hidden;
    display: flex;
    align-items: center;        /* vertical center */
    justify-content: flex-start; /* horizontal left */
}

.hero-slide {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.2s ease-in-out;
    z-index: 1;
}

.hero-slide.active { opacity: 1; }

.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.6);
    z-index: 2;
}

.hero-content {
    position: relative;
    z-index: 3;
    color: #ffffff;
    max-width: 800px;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    /* children align left */
}

.hero-logo {
    width: 90px;
    height: 90px;
    object-fit: contain;
    margin-bottom: 20px;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
    align-items: flex-end;
    padding: 0 60px 0 0;
}

.hero-title { font-size: 52px; font-weight: 800; margin-bottom: 15px; line-height: 1.15; }
.hero-subtitle { font-size: 20px; color: #cbd5e1; }

.quote-section {
    max-width: 1000px;
    width: calc(100% - 40px);
    margin: 80px auto 40px auto;
    text-align: center;
}

.quote-tagline {
    display: block;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.quote-text {
    font-size: 32px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.4;
    font-style: italic;
}

.about-section {
    background-color: var(--bg-card);
    width: 100%;
    padding: 70px 40px;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 60px;
}

.about-container { max-width: 900px; margin: 0 auto; text-align: center; }
.about-container h2 { font-size: 32px; margin-bottom: 20px; font-weight: 800; }
.about-container p { font-size: 17px; color: var(--text-muted); line-height: 1.8; }

.news-section { max-width: 1200px; width: calc(100% - 40px); margin: 0 auto 80px auto; }

.section-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 30px;
    position: relative;
    padding-bottom: 12px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 60px; height: 4px;
    background-color: var(--primary);
    border-radius: 2px;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.news-card {
    background-color: var(--bg-card);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    border: 1px solid #e2e8f0;
}

.news-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.news-image-wrapper { width: 100%; height: 200px; overflow: hidden; background-color: #e2e8f0; }
.news-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.news-card:hover .news-image { transform: scale(1.05); }
.news-body { padding: 25px; display: flex; flex-direction: column; flex-grow: 1; }
.news-date { font-size: 12px; color: var(--text-muted); margin-bottom: 10px; font-weight: 700; text-transform: uppercase; }
.news-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; line-height: 1.4; }
.news-excerpt { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; }
.news-link { font-size: 14px; color: var(--primary); text-decoration: none; font-weight: 700; margin-top: auto; }
.news-link:hover { text-decoration: underline; }

/* ==========================================================================
   5. ABOUT PAGE
   ========================================================================== */
.about-grid {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 60px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-graphics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.graphic-box {
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    height: 200px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-weight: 600;
    box-shadow: var(--shadow-sm);
}

.graphic-box.tall { grid-row: span 2; height: 420px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: #ffffff; font-size: 24px; }
.about-text-content h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; line-height: 1.2; }
.about-text-content p { color: var(--text-muted); margin-bottom: 20px; font-size: 16px; }

.stats-bar {
    background-color: var(--bg-card);
    padding: 40px;
    box-shadow: var(--shadow-sm);
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
}

.stats-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    text-align: center;
}

.stat-item h3 { font-size: 42px; font-weight: 800; color: var(--primary); margin-bottom: 5px; }
.stat-item p { font-size: 14px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }

.pillars-section { max-width: 1200px; width: calc(100% - 40px); margin: 60px auto; }
.pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 30px; }
.pillar-card { background: var(--bg-card); padding: 35px; border-radius: var(--radius); box-shadow: var(--shadow-md); transition: var(--transition); }
.pillar-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.pillar-icon { width: 50px; height: 50px; background: #eff6ff; border-radius: 10px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: var(--primary); font-weight: 800; font-size: 20px; }
.pillar-card h3 { font-size: 20px; margin-bottom: 12px; font-weight: 700; }
.pillar-card p { color: var(--text-muted); font-size: 15px; }

/* ==========================================================================
   6. PROGRAM KERJA
   ========================================================================== */
.proker-container { max-width: 900px; width: calc(100% - 40px); margin: 60px auto; }
.sekbid-accordion { background: var(--bg-card); border-radius: var(--radius); box-shadow: var(--shadow-md); margin-bottom: 20px; overflow: hidden; border: 1px solid #e2e8f0; }

.accordion-toggle { display: none; }
.accordion-header {
    padding: 24px 30px;
    background: var(--bg-card);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    transition: var(--transition);
    user-select: none;
}

.accordion-header:hover { background-color: #f8fafc; }
.accordion-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-muted); transition: transform 0.3s ease; }
.accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0, 1, 0, 1); background-color: #f8fafc; padding: 0 30px; }
.accordion-toggle:checked ~ .accordion-content { max-height: 2000px; padding: 30px; border-top: 1px solid #e2e8f0; }
.accordion-toggle:checked ~ .accordion-header .accordion-icon { transform: rotate(135deg); color: var(--primary); }

.proker-item-card {
    background: var(--bg-card);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
    border-left: 4px solid var(--primary);
}

.proker-item-card:last-child { margin-bottom: 0; }
.proker-meta { display: flex; gap: 15px; margin-bottom: 10px; flex-wrap: wrap; }
.badge { background: #f1f5f9; color: var(--text-dark); padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
.badge.status-running { background: #dcfce7; color: #15803d; }
.proker-item-card h4 { font-size: 18px; margin-bottom: 10px; font-weight: 700; }
.proker-item-card p { color: var(--text-muted); font-size: 14px; }

/* ==========================================================================
   7. STRUKTUR ORGANISASI — Clean data-driven org chart
   ========================================================================== */
.structure-wrapper {
    max-width: 1400px;
    width: calc(100% - 40px);
    margin: 60px auto;
    overflow-x: auto;
}

.org-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    min-width: 900px;
}

/* Shared node appearance */
.org-node {
    background: var(--bg-card);
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px 24px;
    text-align: center;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    min-width: 200px;
}

.org-node:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}

.org-node__name {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 4px;
}

.org-node__role {
    font-size: 12px;
    color: var(--text-muted);
}

/* Main nodes (spine) — slightly accented */
.org-node--main {
    border-top: 3px solid var(--primary);
    min-width: 240px;
}

/* Wing nodes (sekretaris / bendahara) */
.org-node--wing {
    background: #f0f7ff;
    border-color: #bfdbfe;
    min-width: 180px;
}

/* Sekbid leader nodes */
.org-node--sekbid {
    border-top: 3px solid #10b981;
    min-width: 170px;
    font-size: 13px;
}

/* Vertical spine column */
.org-col--spine {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Connector line between nodes */
.org-connector {
    width: 2px;
    height: 30px;
    background: var(--line-color);
    margin: 0 auto;
}

/* Three-column mid row */
.org-row--mid {
    display: grid;
    grid-template-columns: 220px 1fr 220px;
    gap: 0 40px;
    align-items: start;
    width: 100%;
    position: relative;
    margin-top: 0;
}

/* Horizontal connector above mid-row (line from spine to wings) */
.org-row--mid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0; right: 0;
    height: 2px;
    background: var(--line-color);
    display: none; /* Handled via padding top of each col */
}

.org-col--wing {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 30px;
}

.org-col--center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Sekbid row — horizontal strip of columns */
.org-row--sekbid {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

.org-col--sekbid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 150px;
    max-width: 200px;
}

/* Department card */
.org-dept {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 14px;
    text-align: center;
    width: 100%;
    font-size: 12px;
}

.org-dept__name {
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 6px;
    font-size: 12px;
}

.org-dept__members {
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.6;
}

/* ==========================================================================
   8. CONTACTS PAGE
   ========================================================================== */
.contact-grid {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 60px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.contact-info-panel { display: flex; flex-direction: column; gap: 30px; }
.info-card-modern { background: var(--bg-card); padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid #e2e8f0; }
.info-card-modern h3 { font-size: 20px; margin-bottom: 20px; font-weight: 800; }
.info-row { display: flex; gap: 15px; margin-bottom: 15px; font-size: 15px; }
.info-row:last-child { margin-bottom: 0; }
.info-label { font-weight: 700; color: var(--text-dark); min-width: 100px; }
.info-val { color: var(--text-muted); }

.map-embed-container { background-color: #cbd5e1; height: 300px; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-md); }
.map-embed-container iframe { width: 100%; height: 100%; border: 0; }

.contact-form-panel { background: var(--bg-card); padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid #e2e8f0; }
.contact-form-panel h3 { font-size: 22px; font-weight: 800; margin-bottom: 25px; }
.form-group { margin-bottom: 20px; }
.form-label { display: block; font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 8px; }
.form-input { width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 15px; color: var(--text-dark); background-color: #f8fafc; transition: var(--transition); }
.form-input:focus { outline: none; border-color: var(--primary); background-color: #ffffff; box-shadow: 0 0 0 3px rgba(0,123,255,0.15); }
textarea.form-input { resize: vertical; min-height: 120px; }

.submit-btn { width: 100%; background-color: var(--primary); color: #ffffff; border: none; padding: 14px; font-size: 16px; font-weight: 700; border-radius: 8px; cursor: pointer; transition: var(--transition); }
.submit-btn:hover { background-color: var(--primary-hover); transform: translateY(-1px); box-shadow: var(--shadow-md); }

/* ==========================================================================
   9. ARTICLES LIST PAGE
   ========================================================================== */
.news-portal-layout {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
}

.news-main-feed { display: flex; flex-direction: column; gap: 40px; }

.feed-subtitle {
    font-size: 22px;
    font-weight: 800;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 10px;
    color: var(--text-dark);
}

.featured-news-hero-card {
    background-color: var(--bg-card);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    border: 1px solid #e2e8f0;
    transition: var(--transition);
}

.featured-news-hero-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }

.featured-hero-img-box { width: 100%; height: 100%; min-height: 280px; overflow: hidden; }
.featured-hero-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.featured-news-hero-card:hover .featured-hero-img-box img { transform: scale(1.04); }

.featured-hero-body { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
.featured-hero-body h2 { font-size: 26px; font-weight: 800; margin: 12px 0; line-height: 1.3; color: var(--text-dark); }
.featured-hero-body p { color: var(--text-muted); font-size: 15px; margin-bottom: 25px; }

.featured-read-btn {
    background-color: var(--primary);
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
    font-weight: 700;
    border-radius: 6px;
    display: inline-block;
    transition: var(--transition);
    text-align: center;
    align-self: flex-start;
}
.featured-read-btn:hover { background-color: var(--primary-hover); }

/* Sidebar */
.news-sidebar { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 25px; }
.sidebar-widget { background: var(--bg-card); padding: 22px; border-radius: var(--radius); box-shadow: var(--shadow-sm); border: 1px solid #e2e8f0; }
.sidebar-widget h3 { font-size: 16px; font-weight: 800; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #f1f5f9; }
.widget-list { list-style: none; }
.widget-list li { margin-bottom: 8px; }
.widget-list li:last-child { margin-bottom: 0; }
.widget-list li a { text-decoration: none; color: var(--text-muted); font-size: 14px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-radius: 6px; transition: var(--transition); }
.widget-list li a:hover, .widget-list li a.active { background-color: #eff6ff; color: var(--primary); }
.widget-list li a span { background-color: #e2e8f0; padding: 2px 8px; border-radius: 12px; font-size: 11px; color: #333; }

/* ==========================================================================
   10. SINGLE ARTICLE READER
   ========================================================================== */
.single-reading-view { max-width: 860px; width: calc(100% - 40px); margin: 50px auto 80px; }
.reading-content-wrapper { background-color: var(--bg-card); padding: 60px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid #e2e8f0; }

.back-to-feed-link { color: var(--primary); font-size: 15px; font-weight: 700; text-decoration: none; display: inline-block; margin-bottom: 40px; transition: var(--transition); }
.back-to-feed-link:hover { transform: translateX(-4px); }

.article-header { margin-bottom: 40px; text-align: center; }
.article-category { display: inline-block; background-color: #e0f2fe; color: #0284c7; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
.article-header h1 { font-size: 40px; font-weight: 800; line-height: 1.25; margin-bottom: 25px; color: var(--text-dark); }
.article-meta { display: flex; align-items: center; justify-content: center; gap: 15px; }
.author-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.meta-details { display: flex; flex-direction: column; text-align: left; }
.author-name { font-weight: 700; font-size: 15px; color: var(--text-dark); }
.publish-date { font-size: 13px; color: var(--text-muted); }

.article-featured-image { margin: 0 0 40px 0; }
.article-featured-image img { width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius); }
.article-featured-image figcaption, .article-inline-image figcaption { text-align: center; font-size: 13px; color: #64748b; margin-top: 10px; font-style: italic; }

.article-inline-image { margin: 36px 0; }
.article-inline-image img { width: 100%; height: auto; border-radius: var(--radius); display: block; }

/* Article body typography */
.article-content { max-width: 700px; margin: 0 auto; }
.article-content p:first-child { font-size: 19px; color: #334155; line-height: 1.8; font-weight: 500; }
.article-content h2 { font-size: 26px; font-weight: 800; margin: 40px 0 18px; color: var(--text-dark); line-height: 1.3; }
.article-content h3 { font-size: 20px; font-weight: 700; margin: 32px 0 14px; color: var(--text-dark); }
.article-content p { font-size: 17px; color: #334155; line-height: 1.85; margin-bottom: 22px; }
.article-content ul, .article-content ol { margin: 0 0 24px 28px; color: #334155; font-size: 17px; line-height: 1.85; }
.article-content li { margin-bottom: 10px; }
.article-content li strong { color: var(--text-dark); }
.article-content blockquote { border-left: 4px solid var(--primary); background-color: #f0f7ff; padding: 22px 28px; font-size: 19px; font-style: italic; color: #475569; margin: 36px 0; border-radius: 0 8px 8px 0; line-height: 1.6; }
.article-content hr { border: none; border-top: 2px solid #e2e8f0; margin: 40px 0; }
.article-content code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 14px; font-family: 'Courier New', monospace; }

/* ==========================================================================
   11. RESPONSIVE
   ========================================================================== */
@media (max-width: 1024px) {
    .org-row--mid {
        grid-template-columns: 1fr;
    }
    .org-col--wing {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 0;
    }
    .org-row--sekbid {
        flex-wrap: wrap;
    }
}

@media (max-width: 968px) {
    .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 40px; }
    .about-graphics { order: 2; }
    .featured-news-hero-card { grid-template-columns: 1fr; }
    .featured-hero-img-box { min-height: 220px; }
    .news-portal-layout { grid-template-columns: 1fr; }
    .news-sidebar { position: static; }
}

@media (max-width: 768px) {
    .topbar { flex-direction: column; align-items: flex-start; padding: 15px 20px; gap: 12px; }
    .nav-links {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        width: 100%;
        padding-bottom: 6px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .nav-links::-webkit-scrollbar { display: none; }
    .nav-btn { white-space: nowrap; flex-shrink: 0; padding: 8px 14px; font-size: 14px; }

    .hero-container { height: 50vh; min-height: 300px; }
    .hero-content { padding: 0 24px; }
    .hero-title { font-size: 32px; }
    .hero-subtitle { font-size: 16px; }
    .quote-text { font-size: 24px; }

    .structure-wrapper { padding: 10px; }
    .org-chart { min-width: auto; }
    .org-row--mid { grid-template-columns: 1fr; gap: 20px; }
    .org-row--sekbid { gap: 12px; }
    .org-col--sekbid { min-width: 130px; }

    .reading-content-wrapper { padding: 30px 20px; }
    .article-header h1 { font-size: 28px; }
    .article-content p:first-child { font-size: 17px; }
}

```

`js/app.js`

```javascript
/**
 * app.js — Main entry point for OSIS SMKN 68 Jakarta website.
 *
 * Each page imports only what it needs.
 * Shared functionality (nav, footer) is injected automatically by components.js.
 */

import { injectComponents } from './components.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initHomeSlider } from './home.js';

document.addEventListener('DOMContentLoaded', async () => {

    // 1. Always inject shared nav + footer
    injectComponents();

    // 2. Page-specific logic based on filename
    const page = window.location.pathname.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '') {
        initHomeSlider();
    }

    if (page === 'struktur.html') {
        await renderOsisTree();
    }

    if (page === 'articles.html') {
        await initArticleListPage();
    }

    // Single article pages live in /static/articles/[id].html
    if (document.getElementById('article-render-target')) {
        await initArticlePage();
    }

});

```

`js/articles.js`

```javascript
/**
 * articles.js
 * Handles everything related to articles:
 *   - Loading the manifest (content/articles-manifest.json)
 *   - Rendering article cards on articles.html
 *   - Rendering a full article page from a .md file
 *   - Category filtering with correct counts
 */

import { parseMarkdown } from './md-parser.js';

/** Site root — same logic as components.js */
function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

const ROOT = getSiteRoot();

/** Resolve path to content/ folder using absolute ROOT */
function contentPath(rel) {
    return ROOT + 'content/' + rel;
}

/** Format ISO date to human-readable Indonesian */
function formatDate(isoDate) {
    const months = ['Januari','Februari','Maret','April','Mei','Juni',
                    'Juli','Agustus','September','Oktober','November','Desember'];
    const [y, m, d] = isoDate.split('-').map(Number);
    return `${d} ${months[m - 1]} ${y}`;
}

/** Build URL to a single article page using absolute ROOT */
function articleUrl(id) {
    return ROOT + 'static/articles/' + id + '.html';
}

/** Load the articles manifest JSON */
async function loadManifest() {
    const res = await fetch(contentPath('articles-manifest.json'));
    if (!res.ok) throw new Error('Could not load articles manifest');
    return res.json();
}

// ─────────────────────────────────────────────────────────────
// ARTICLES LIST PAGE (articles.html)
// ─────────────────────────────────────────────────────────────

function renderFeaturedCard(article) {
    return `
    <div class="featured-news-hero-card" data-category="${article.category}">
        <div class="featured-hero-img-box">
            <img src="${article.cover}" alt="${article.title}" loading="lazy">
        </div>
        <div class="featured-hero-body">
            <span class="news-date">SOROTAN UTAMA • ${formatDate(article.date)}</span>
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="featured-read-btn">Baca Artikel Utama</a>
        </div>
    </div>`;
}

function renderArticleCard(article) {
    return `
    <article class="news-card" data-category="${article.category}">
        <div class="news-image-wrapper">
            <img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">
        </div>
        <div class="news-body">
            <span class="news-date">${formatDate(article.date)}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

function buildCategorySidebar(articles, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Count articles per category
    const counts = {};
    articles.forEach(a => {
        counts[a.category] = (counts[a.category] || 0) + 1;
    });

    const total = articles.length;
    let html = `
        <li><a href="#" class="category-btn active" data-filter="all">
            Semua Kategori <span>${total}</span>
        </a></li>`;

    Object.entries(counts).forEach(([cat, count]) => {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        html += `
        <li><a href="#" class="category-btn" data-filter="${cat}">
            ${label} <span>${count}</span>
        </a></li>`;
    });

    container.innerHTML = html;
    initCategoryFilter(articles);
}

function initCategoryFilter(articles) {
    const buttons = document.querySelectorAll('.category-btn');
    const feedTitle = document.getElementById('feed-title-text');

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            document.querySelectorAll('[data-category]').forEach(el => {
                const match = filter === 'all' || el.dataset.category === filter;
                el.style.display = match
                    ? (el.classList.contains('featured-news-hero-card') ? 'grid' : '')
                    : 'none';
            });

            if (feedTitle) {
                feedTitle.textContent = filter === 'all'
                    ? 'Berita Terkini'
                    : `Kategori: ${btn.childNodes[0].textContent.trim()}`;
            }
        });
    });
}

export async function initArticleListPage() {
    const featuredContainer = document.getElementById('featured-article-container');
    const gridContainer     = document.getElementById('articles-grid-container');
    const categoryListId    = 'category-list';

    if (!gridContainer) return; // not on articles.html

    try {
        const manifest = await loadManifest();

        const featured = manifest.filter(a => a.featured);
        const regular  = manifest.filter(a => !a.featured);

        if (featuredContainer) {
            featuredContainer.innerHTML = featured.map(renderFeaturedCard).join('');
        }
        gridContainer.innerHTML = regular.map(renderArticleCard).join('');

        buildCategorySidebar(manifest, categoryListId);

    } catch (err) {
        console.error('Articles failed to load:', err);
        if (gridContainer) {
            gridContainer.innerHTML = '<p style="color:red">Gagal memuat artikel. Pastikan server berjalan (jangan buka file:// langsung).</p>';
        }
    }
}

// ─────────────────────────────────────────────────────────────
// SINGLE ARTICLE PAGE (static/articles/[id].html)
// ─────────────────────────────────────────────────────────────

export async function initArticlePage() {
    const container = document.getElementById('article-render-target');
    if (!container) return;

    // Get article ID from data attribute or URL
    const articleId = container.dataset.articleId
        || window.location.pathname.split('/').pop().replace('.html', '');

    try {
        const manifest = await loadManifest();
        const meta = manifest.find(a => a.id === articleId);

        if (!meta) throw new Error(`Article "${articleId}" not found in manifest`);

        // Article body is embedded directly in the manifest — no extra fetch needed.
        // This avoids GitHub Pages blocking .md file requests.
        const bodyHtml = parseMarkdown(meta.body || '');

        // Update page title
        document.title = `${meta.title} — OSIS SMKN 68 Jakarta`;

        // Render article
        container.innerHTML = `
            <div class="reading-content-wrapper">
                <a href="${ROOT}static/articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
                <article>
                    <header class="article-header">
                        <span class="article-category">${meta.category_display || meta.category}</span>
                        <h1>${meta.title}</h1>
                        <div class="article-meta">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(meta.author)}&background=007bff&color=fff"
                                 alt="${meta.author}" class="author-avatar">
                            <div class="meta-details">
                                <span class="author-name">Ditulis oleh ${meta.author}</span>
                                <span class="publish-date">${meta.date_display || formatDate(meta.date)}${meta.readtime ? ` • Waktu baca: ${meta.readtime}` : ''}</span>
                            </div>
                        </div>
                    </header>

                    ${meta.cover ? `
                    <figure class="article-featured-image">
                        <img src="${meta.cover}" alt="${meta.title}" loading="lazy">
                        ${meta.cover_caption ? `<figcaption>${meta.cover_caption}</figcaption>` : ''}
                    </figure>` : ''}

                    <div class="article-content">
                        ${bodyHtml}
                    </div>
                </article>
            </div>`;

    } catch (err) {
        console.error('Article render failed:', err);
        container.innerHTML = `
            <div class="reading-content-wrapper">
                <a href="../articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
                <p style="color:red; margin-top: 2rem;">Gagal memuat artikel: ${err.message}</p>
            </div>`;
    }
}

```

`js/components.js`

```javascript
/**
 * components.js
 * Injects shared navigation and footer into every page.
 *
 * Uses absolute URLs based on the detected site root so it works
 * correctly on GitHub Pages (https://user.github.io/repo-name/),
 * local dev servers, and any other host — no matter the repo name.
 */

/**
 * Detects the root URL of the site.
 * - GitHub Pages: https://user.github.io/repo-name/  → root = origin/repo-name/
 * - localhost:8000 with files at root                 → root = origin/
 * - localhost:8000/subfolder/                         → root = origin/subfolder/
 *
 * The trick: index.html always lives at the repo root, which is the
 * first path segment on GitHub Pages. We detect this by checking if
 * the first path part contains a dot (meaning it's a file, not a folder).
 */
function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);

    // True root (e.g. localhost with index.html at /)
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }

    // GitHub Pages or subfolder: first segment is the repo/folder name
    return origin + '/' + parts[0] + '/';
}

const ROOT = getSiteRoot();

const NAV_LINKS = [
    { href: 'static/about.html',    label: 'Tentang Kami' },
    { href: 'static/proker.html',   label: 'Program Kerja' },
    { href: 'static/struktur.html', label: 'Struktur' },
    { href: 'static/articles.html', label: 'Artikel' },
    { href: 'static/contacts.html', label: 'Contact' },
];

function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

export function renderNav() {
    const current = getCurrentPage();

    const linksHtml = NAV_LINKS.map(link => {
        const pageFile = link.href.split('/').pop(); // e.g. "about.html"
        const isActive = current === pageFile ? 'active' : '';
        return `<a href="${ROOT}${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    }).join('');

    return `
    <nav class="topbar">
        <div class="logo">
            <a href="${ROOT}index.html">OSIS SMKN 68 Jakarta</a>
        </div>
        <div class="nav-links">
            ${linksHtml}
        </div>
    </nav>`;
}

export function renderFooter() {
    return `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>OSIS SMKN 68 Jakarta</h4>
                <p>Jl. Penganten Ali RT 09 RW 06,<br>Jakarta Timur, DKI Jakarta</p>
            </div>
            <div class="footer-section">
                <h4>Kontak</h4>
                <p>Email: osissmkn68jakarta@gmail.com</p>
                <p>Telepon: +62 896-1672-7118 (Mutia)</p>
                <p>Jam Kerja: Senin–Jumat, 09.00–17.00 WIB</p>
            </div>
            <div class="footer-section socials">
                <h4>Ikuti Kami</h4>
                <a href="https://www.instagram.com/osissmkn68.jkt/" target="_blank" rel="noopener">Instagram</a>
                <a href="https://www.youtube.com/@OSISSMKN68" target="_blank" rel="noopener">Youtube</a>
                <a href="https://www.tiktok.com/@osissmkn68" target="_blank" rel="noopener">TikTok</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 OSIS SMKN 68 Jakarta. All rights reserved.</p>
        </div>
    </footer>`;
}

export function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
}

```

`js/home.js`

```javascript
/**
 * home.js
 * Hero image slider for the index.html home page.
 */

export function initHomeSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let current = 0;
    slides[0].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

```

`js/md-parser.js`

```javascript
/**
 * md-parser.js
 * Lightweight Markdown parser for OSIS article system.
 * Supports: frontmatter, headings, paragraphs, bold, italic,
 * blockquote, unordered lists, ordered lists, inline images with captions,
 * and horizontal rules.
 *
 * HOW TO WRITE AN ARTICLE:
 * ─────────────────────────
 * Start the file with a "frontmatter" block (between --- lines).
 * Supported frontmatter keys:
 *   title, category, author, date, readtime, cover, cover_caption
 *
 * Then write your article body using simple Markdown:
 *   ## Heading 2         →  large section heading
 *   ### Heading 3        →  sub-section heading
 *   **bold text**        →  bold
 *   *italic text*        →  italic
 *   - item               →  bullet list item
 *   1. item              →  numbered list item
 *   > quote text         →  blockquote / pull quote
 *   ![alt|caption](url) →  image with optional caption (use | to split alt from caption)
 *   ---                  →  horizontal divider
 */

export function parseFrontmatter(raw) {
    const fm = {};
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    let body = raw;
    if (fmMatch) {
        body = raw.slice(fmMatch[0].length).trim();
        fmMatch[1].split('\n').forEach(line => {
            const colon = line.indexOf(':');
            if (colon === -1) return;
            const key = line.slice(0, colon).trim();
            const val = line.slice(colon + 1).trim();
            fm[key] = val;
        });
    }
    return { fm, body };
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function inlineFormat(text) {
    // Bold + Italic combined
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    return text;
}

export function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const html = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // ── Headings ──────────────────────────────────
        if (line.startsWith('### ')) {
            html.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
            i++; continue;
        }
        if (line.startsWith('## ')) {
            html.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
            i++; continue;
        }
        if (line.startsWith('# ')) {
            html.push(`<h1>${inlineFormat(line.slice(2))}</h1>`);
            i++; continue;
        }

        // ── Horizontal Rule ───────────────────────────
        if (line.trim() === '---') {
            html.push('<hr>');
            i++; continue;
        }

        // ── Blockquote ────────────────────────────────
        if (line.startsWith('> ')) {
            html.push(`<blockquote>${inlineFormat(line.slice(2))}</blockquote>`);
            i++; continue;
        }

        // ── Unordered list ────────────────────────────
        if (line.startsWith('- ')) {
            html.push('<ul>');
            while (i < lines.length && lines[i].startsWith('- ')) {
                html.push(`<li>${inlineFormat(lines[i].slice(2))}</li>`);
                i++;
            }
            html.push('</ul>');
            continue;
        }

        // ── Ordered list ──────────────────────────────
        if (/^\d+\. /.test(line)) {
            html.push('<ol>');
            while (i < lines.length && /^\d+\. /.test(lines[i])) {
                html.push(`<li>${inlineFormat(lines[i].replace(/^\d+\. /, ''))}</li>`);
                i++;
            }
            html.push('</ol>');
            continue;
        }

        // ── Image with optional caption ───────────────
        // Syntax: ![alt text|Caption text here](url)
        const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
            const [altRaw, url] = [imgMatch[1], imgMatch[2]];
            const [alt, caption] = altRaw.includes('|')
                ? altRaw.split('|').map(s => s.trim())
                : [altRaw, ''];
            if (caption) {
                html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy"><figcaption>${escapeHtml(caption)}</figcaption></figure>`);
            } else {
                html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy"></figure>`);
            }
            i++; continue;
        }

        // ── Empty line ────────────────────────────────
        if (line.trim() === '') {
            i++; continue;
        }

        // ── Paragraph ─────────────────────────────────
        // Collect consecutive non-empty, non-special lines as one paragraph
        const paraLines = [];
        while (
            i < lines.length &&
            lines[i].trim() !== '' &&
            !lines[i].startsWith('#') &&
            !lines[i].startsWith('> ') &&
            !lines[i].startsWith('- ') &&
            !/^\d+\. /.test(lines[i]) &&
            !lines[i].startsWith('!') &&
            lines[i].trim() !== '---'
        ) {
            paraLines.push(lines[i]);
            i++;
        }
        if (paraLines.length > 0) {
            html.push(`<p>${inlineFormat(paraLines.join(' '))}</p>`);
        }
    }

    return html.join('\n');
}

```

`js/struktur.js`

```javascript
/**
 * struktur.js
 * Renders the OSIS organizational chart from content/osis-data.json.
 * Data is fully separated from logic — edit osis-data.json to update org structure.
 */

function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

function dataPath() {
    return getSiteRoot() + 'content/osis-data.json';
}

function node(nama, jabatan, level = 'main') {
    return `
    <div class="org-node org-node--${level}">
        <div class="org-node__name">${nama}</div>
        <div class="org-node__role">${jabatan}</div>
    </div>`;
}

function connector() {
    return `<div class="org-connector"></div>`;
}

export async function renderOsisTree() {
    const container = document.getElementById('osis-tree-container');
    if (!container) return;

    try {
        const res  = await fetch(dataPath());
        if (!res.ok) throw new Error('Cannot load osis-data.json');
        const data = await res.json();

        let html = '<div class="org-chart">';

        // ── Top chain (Kepsek → Waket) ──────────────────
        html += '<div class="org-col org-col--spine">';
        data.pimpinanAtas.forEach((p, idx) => {
            html += node(p.nama, p.jabatan, 'main');
            if (idx < data.pimpinanAtas.length - 1) html += connector();
        });
        html += '</div>';

        // ── Three-column row: Sekretaris | Koordinator | Bendahara ──
        html += '<div class="org-row org-row--mid">';

        // Left wing
        html += '<div class="org-col org-col--wing">';
        data.sekretaris.forEach(s => html += node(s.nama, s.jabatan, 'wing'));
        html += '</div>';

        // Center: Koordinator + Sekbid branches
        html += '<div class="org-col org-col--center">';
        html += node(data.koordinator.nama, data.koordinator.jabatan, 'main');
        html += connector();

        // Sekbid row
        html += '<div class="org-row org-row--sekbid">';
        data.sekbid.forEach(sek => {
            html += '<div class="org-col org-col--sekbid">';
            html += node(sek.ketua, `Ketua Sekbid ${sek.nama}`, 'sekbid');
            sek.departemen.forEach(dept => {
                html += `
                <div class="org-dept">
                    <div class="org-dept__name">${dept.nama}</div>
                    <div class="org-dept__members">${dept.anggota.join('<br>')}</div>
                </div>`;
            });
            html += '</div>';
        });
        html += '</div>'; // .org-row--sekbid

        html += '</div>'; // .org-col--center

        // Right wing
        html += '<div class="org-col org-col--wing">';
        data.bendahara.forEach(b => html += node(b.nama, b.jabatan, 'wing'));
        html += '</div>';

        html += '</div>'; // .org-row--mid
        html += '</div>'; // .org-chart

        container.innerHTML = html;

    } catch (err) {
        console.error('Org tree failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat data struktur: ${err.message}</p>`;
    }
}

```

`static/artikel-fitur-baru.html`
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artikel - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../../img/icon.png">
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <main class="single-reading-view">
        <!--
            data-article-id must match the "id" field in content/articles-manifest.json.
            To add a new article:
              1. Add an entry to content/articles-manifest.json
              2. Create content/articles/your-id.md
              3. Copy this file and rename it to your-id.html
              4. Change data-article-id below to your-id
              That's it. No other HTML changes needed.
        -->
        <div id="article-render-target" data-article-id="artikel-fitur-baru">
            <div class="reading-content-wrapper">
                <p style="color: var(--text-muted); padding: 2rem 0">Memuat artikel...</p>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../../js/app.js"></script>
</body>
</html>

```

`static/about.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tentang Kami - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Tentang Kami</h1>
        <p>Mengenal lebih dekat visi, misi, serta komitmen pergerakan organisasi kami.</p>
    </header>

    <section class="about-grid">
        <div class="about-graphics">
            <div class="graphic-box tall">OSIS</div>
            <div class="graphic-box">Kreativitas</div>
            <div class="graphic-box">Inovasi</div>
        </div>
        <div class="about-text-content">
            <h2>Membangun Solusi Kreatif & Berdampak Jangka Panjang</h2>
            <p>Didirikan berlandaskan semangat kolaborasi inovatif, organisasi kami terus bergerak aktif menyelaraskan perkembangan IPTEK modern dengan fungsionalitas harian masyarakat luas. Kami percaya bahwa perbaikan berkelanjutan adalah kunci utama menuju kemajuan yang stabil.</p>
            <p>Setiap langkah koordinasi seksi bidang dirancang secara terukur demi mewujudkan program kerja transparan, akuntabel, dan berorientasi penuh pada solusi nyata.</p>
        </div>
    </section>

    <section class="stats-bar">
        <div class="stats-grid">
            <div class="stat-item">
                <h3>15+</h3>
                <p>Program Sukses</p>
            </div>
            <div class="stat-item">
                <h3>40+</h3>
                <p>Anggota Aktif</p>
            </div>
            <div class="stat-item">
                <h3>5K+</h3>
                <p>Penerima Manfaat</p>
            </div>
        </div>
    </section>

    <section class="pillars-section">
        <h2 class="section-title">Pilar Pergerakan Kami</h2>
        <div class="pillars-grid">
            <div class="pillar-card">
                <div class="pillar-icon">01</div>
                <h3>Inovasi Terbuka</h3>
                <p>Mengembangkan ide kreatif tanpa batas dan mengadaptasi teknologi modern untuk memecahkan masalah struktural komunitas.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-icon">02</div>
                <h3>Sinergitas Tim</h3>
                <p>Menyelaraskan komunikasi antar seksi bidang agar roda program kerja dapat berputar cepat secara harmonis dan efisien.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-icon">03</div>
                <h3>Integritas Nyata</h3>
                <p>Menjalankan roda kepengurusan secara profesional, transparan, serta mengutamakan akuntabilitas penuh pada publik.</p>
            </div>
        </div>
    </section>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/articles.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artikel & Berita - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Artikel & Berita</h1>
        <p>Jelajahi bacaan edukasi, info rilis fitur terbaru, dan dokumentasi kegiatan kami.</p>
    </header>

    <main class="news-portal-layout">
        <div class="news-main-feed">

            <!-- Featured articles injected here by articles.js -->
            <div id="featured-article-container"></div>

            <h2 class="feed-subtitle" id="feed-title-text">Berita Terkini</h2>

            <!-- Article cards injected here by articles.js -->
            <div class="news-grid" id="articles-grid-container">
                <p style="color: var(--text-muted)">Memuat artikel...</p>
            </div>

        </div>

        <aside class="news-sidebar">
            <div class="sidebar-widget">
                <h3>Kategori Berita</h3>
                <ul class="widget-list" id="category-list">
                    <!-- Injected by articles.js with correct counts -->
                    <li><a href="#" class="category-btn active" data-filter="all">Semua Kategori</a></li>
                </ul>
            </div>
        </aside>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/contacts.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hubungi Kami - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Hubungi Kami</h1>
        <p>Punya pertanyaan atau rencana kolaborasi kreatif? Kirimkan pesan langsung kepada kami.</p>
    </header>

    <main class="contact-grid">

        <div class="contact-info-panel">
            <div class="info-card-modern">
                <h3>Informasi Kontak</h3>
                <div class="info-row">
                    <span class="info-label">Alamat:</span>
                    <span class="info-val">Jl. Penganten Ali RT 09 RW 06, Jakarta Timur, DKI Jakarta</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-val">osissmkn68jakarta@gmail.com</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Telepon:</span>
                    <span class="info-val">+62 896-1672-7118 (Mutia)</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Jam Kerja:</span>
                    <span class="info-val">Senin – Jumat | 09.00 – 17.00 WIB</span>
                </div>
            </div>

            <div class="map-embed-container">
                <iframe
                    src="https://maps.google.com/maps?q=SMKN+68+Jakarta,+Jl.+Pengantin+Ali,+Jakarta+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

        <div class="contact-form-panel">
            <h3>Kirim Pesan Langsung</h3>
            <form action="https://formspree.io/f/maqkorrn" method="POST">

                <div class="form-group">
                    <label for="input-name" class="form-label">Nama Lengkap</label>
                    <input type="text" name="name" id="input-name" class="form-input" placeholder="Masukkan nama Anda..." required>
                </div>

                <div class="form-group">
                    <label for="input-email" class="form-label">Alamat Email</label>
                    <input type="email" name="_replyto" id="input-email" class="form-input" placeholder="nama@email.com" required>
                </div>

                <div class="form-group">
                    <label for="input-subject" class="form-label">Subjek Pesan</label>
                    <input type="text" name="subject" id="input-subject" class="form-input" placeholder="Perihal pesan..." required>
                </div>

                <div class="form-group">
                    <label for="input-message" class="form-label">Isi Pesan</label>
                    <textarea name="message" id="input-message" class="form-input" placeholder="Tuliskan detail pesan Anda di sini..." required></textarea>
                </div>

                <input type="text" name="_gotcha" style="display:none">
                <button type="submit" class="submit-btn">Kirim Sekarang</button>
            </form>
        </div>

    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/proker.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program Kerja - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Program Kerja</h1>
        <p>Daftar agenda kerja prioritas serta cetak biru pergerakan strategis di setiap seksi bidang.</p>
    </header>

    <main class="proker-container">

        <div class="sekbid-accordion">
            <input type="checkbox" id="sec-humas-it" class="accordion-toggle" checked>
            <label for="sec-humas-it" class="accordion-header">
                Seksi Bidang Humas dan IT
                <span class="accordion-icon">+</span>
            </label>
            <div class="accordion-content">
                <div class="proker-item-card">
                    <div class="proker-meta">
                        <span class="badge">Q1 - Q2</span>
                        <span class="badge status-running">Sedang Berjalan</span>
                    </div>
                    <h4>Pengembangan Website & Portal Informasi Internal</h4>
                    <p>Membangun arsitektur website multi-page modern dengan sistem artikel Markdown agar penyebaran berita seputar proker berjalan transparan dan real-time.</p>
                </div>
                <div class="proker-item-card">
                    <div class="proker-meta">
                        <span class="badge">Q3</span>
                        <span class="badge">Tahap Perencanaan</span>
                    </div>
                    <h4>Digital Literacy Campaign & Podcast Publik</h4>
                    <p>Mengedukasi masyarakat luas mengenai pemanfaatan media digital secara bijak lewat perilisan serial konten audio-visual edukatif bulanan.</p>
                </div>
            </div>
        </div>

        <div class="sekbid-accordion">
            <input type="checkbox" id="sec-kreativitas" class="accordion-toggle">
            <label for="sec-kreativitas" class="accordion-header">
                Seksi Bidang Kreativitas dan Inovasi
                <span class="accordion-icon">+</span>
            </label>
            <div class="accordion-content">
                <div class="proker-item-card">
                    <div class="proker-meta">
                        <span class="badge">Q2</span>
                        <span class="badge status-running">Sedang Berjalan</span>
                    </div>
                    <h4>Workshop Inkubasi Ide & Desain Kreatif</h4>
                    <p>Pelatihan intensif mengenai teknik UI/UX design, manajemen aset kreatif, serta pemanfaatan tools open-source untuk produksi media cetak.</p>
                </div>
                <div class="proker-item-card">
                    <div class="proker-meta">
                        <span class="badge">Q4</span>
                        <span class="badge">Tahap Perencanaan</span>
                    </div>
                    <h4>Pameran Karya Seni & Expo Solusi Digital</h4>
                    <p>Menyelenggarakan ruang unjuk karya interaktif tahunan untuk mengapresiasi output inovasi digital terbaik anggota komunitas.</p>
                </div>
            </div>
        </div>

        <div class="sekbid-accordion">
            <input type="checkbox" id="sec-kerohanian" class="accordion-toggle">
            <label for="sec-kerohanian" class="accordion-header">
                Seksi Bidang Kerohanian
                <span class="accordion-icon">+</span>
            </label>
            <div class="accordion-content">
                <div class="proker-item-card">
                    <div class="proker-meta">
                        <span class="badge">Q1</span>
                        <span class="badge status-running">Sedang Berjalan</span>
                    </div>
                    <h4>Kajian Rutin & Kegiatan Keagamaan</h4>
                    <p>Menyelenggarakan kajian mingguan dan peringatan hari besar keagamaan untuk seluruh warga sekolah.</p>
                </div>
            </div>
        </div>

        <div class="sekbid-accordion">
            <input type="checkbox" id="sec-kedisiplinan" class="accordion-toggle">
            <label for="sec-kedisiplinan" class="accordion-header">
                Seksi Bidang Kedisiplinan
                <span class="accordion-icon">+</span>
            </label>
            <div class="accordion-content">
                <div class="proker-item-card">
                    <div class="proker-meta">
                        <span class="badge">Berkelanjutan</span>
                        <span class="badge status-running">Aktif</span>
                    </div>
                    <h4>Patroli Tata Tertib & Budi Pekerti</h4>
                    <p>Memantau dan mendampingi pelaksanaan tata tertib sekolah serta menanamkan nilai budi pekerti melalui kegiatan harian.</p>
                </div>
            </div>
        </div>

    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/struktur.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur Organisasi - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Struktur Organisasi</h1>
        <p>Bagan hierarki wewenang, tanggung jawab, dan koordinasi internal kepengurusan OSIS SMKN 68 Jakarta.</p>
    </header>

    <div class="structure-wrapper">
        <div id="osis-tree-container"></div>
    </div>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`tools/build-manifest.py`

```python
"""
tools/build-manifest.py
=======================
Run this script whenever you add or edit an article .md file.
It reads all .md files in content/articles/ and updates
content/articles-manifest.json with the embedded body content.

Usage:
    python3 tools/build-manifest.py

Requirements: Python 3 (no extra packages needed)
"""

import json, re, os, sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
ARTICLES_DIR = ROOT / 'content' / 'articles'
MANIFEST_PATH = ROOT / 'content' / 'articles-manifest.json'


def parse_md(raw):
    fm = {}
    body = raw
    m = re.match(r'^---\n([\s\S]*?)\n---\n', raw)
    if m:
        body = raw[m.end():].strip()
        for line in m.group(1).split('\n'):
            colon = line.find(':')
            if colon == -1:
                continue
            k = line[:colon].strip()
            v = line[colon + 1:].strip()
            fm[k] = v
    return fm, body


def main():
    if not MANIFEST_PATH.exists():
        print(f"ERROR: {MANIFEST_PATH} not found. Create it first.")
        sys.exit(1)

    with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    updated = 0
    for entry in manifest:
        md_path = ROOT / entry.get('file', '')
        if not md_path.exists():
            print(f"  SKIP {entry['id']}: file not found at {md_path}")
            continue

        raw = md_path.read_text(encoding='utf-8')
        fm, body = parse_md(raw)

        # Update fields from frontmatter
        entry['title']            = fm.get('title', entry.get('title', entry['id']))
        entry['author']           = fm.get('author', entry.get('author', 'Tim OSIS'))
        entry['date_display']     = fm.get('date', '')
        entry['readtime']         = fm.get('readtime', '')
        entry['cover']            = fm.get('cover', entry.get('cover', ''))
        entry['cover_caption']    = fm.get('cover_caption', '')
        entry['category_display'] = fm.get('category', entry.get('category', ''))

        # Embed the markdown body
        entry['body'] = body
        updated += 1
        print(f"  OK  {entry['id']} ({len(body)} chars)")

    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    print(f"\nDone. Updated {updated}/{len(manifest)} articles in {MANIFEST_PATH.name}")
    print("Commit and push content/articles-manifest.json to GitHub.")


if __name__ == '__main__':
    main()

```

`index.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="img/icon.png">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <div class="hero-container">
        <div class="hero-slide active" style="background-image: url('img/slide1.jpg')"></div>
        <div class="hero-slide" style="background-image: url('img/slide2.jpg')"></div>
        <div class="hero-slide" style="background-image: url('img/slide3.jpg')"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <img src="img/icon.png" alt="Logo OSIS SMKN 68 Jakarta" class="hero-logo">
            <h1 class="hero-title">OSIS SMKN 68 Jakarta</h1>
            <p class="hero-subtitle">Bergerak bersama, berinovasi untuk masa depan.</p>
        </div>
    </div>

    <section class="quote-section">
        <span class="quote-tagline">Motto Kami</span>
        <p class="quote-text">"Satu langkah bersama lebih berarti dari seribu langkah sendiri."</p>
    </section>

    <section class="about-section">
        <div class="about-container">
            <h2>Tentang OSIS SMKN 68 Jakarta</h2>
            <p>Organisasi Siswa Intra Sekolah SMKN 68 Jakarta adalah wadah pengembangan diri, kreativitas, dan kepemimpinan bagi seluruh siswa. Kami berkomitmen untuk menjalankan program kerja yang transparan, inovatif, dan berdampak nyata bagi komunitas sekolah.</p>
        </div>
    </section>

    <section class="news-section">
        <h2 class="section-title">Berita Terkini</h2>
        <div class="news-grid">
            <article class="news-card">
                <div class="news-image-wrapper">
                    <img src="img/covers/news1.jpg" alt="Berita 1" class="news-image">
                </div>
                <div class="news-body">
                    <span class="news-date">22 Mei 2026</span>
                    <h3 class="news-title">Peluncuran Fitur Terbaru Website OSIS</h3>
                    <p class="news-excerpt">Sistem artikel baru berbasis Markdown memudahkan penulisan konten tanpa keahlian coding.</p>
                    <a href="static/articles/artikel-fitur-baru.html" class="news-link">Baca Selengkapnya →</a>
                </div>
            </article>
            <article class="news-card">
                <div class="news-image-wrapper">
                    <img src="img/covers/news2.jpg" alt="Berita 2" class="news-image">
                </div>
                <div class="news-body">
                    <span class="news-date">20 Mei 2026</span>
                    <h3 class="news-title">Tips Belajar Vanilla JavaScript</h3>
                    <p class="news-excerpt">Mengenal dasar DOM manipulation adalah langkah pertama menuju web developer handal.</p>
                    <a href="static/articles/belajar-javascript.html" class="news-link">Baca Selengkapnya →</a>
                </div>
            </article>
            <article class="news-card">
                <div class="news-image-wrapper">
                    <img src="img/covers/news3.jpg" alt="Berita 3" class="news-image">
                </div>
                <div class="news-body">
                    <span class="news-date">15 Mei 2026</span>
                    <h3 class="news-title">Workshop Desain Kreatif Bersama Sekbid</h3>
                    <p class="news-excerpt">Pelatihan UI/UX design dan manajemen aset kreatif untuk anggota aktif OSIS.</p>
                    <a href="static/articles.html" class="news-link">Baca Selengkapnya →</a>
                </div>
            </article>
        </div>
    </section>

    <div id="footer-placeholder"></div>

    <script type="module" src="js/app.js"></script>
</body>
</html>

```

`README.md`

```markdown
# OSIS SMKN 68 Jakarta — Website

## 🗂️ Struktur Proyek

```
osis-site/
├── index.html                   ← Halaman utama
├── css/
│   └── style.css                ← Semua styling (jangan ubah kecuali perlu)
├── js/
│   ├── app.js                   ← Entry point utama
│   ├── articles.js              ← Engine artikel
│   ├── components.js            ← Nav & footer otomatis (tidak perlu copy-paste lagi)
│   ├── home.js                  ← Slider hero
│   ├── md-parser.js             ← Parser Markdown
│   └── struktur.js              ← Render bagan organisasi
├── content/
│   ├── articles-manifest.json   ← ⭐ Daftar semua artikel
│   ├── osis-data.json           ← ⭐ Data anggota & struktur organisasi
│   └── articles/
│       ├── artikel-fitur-baru.md
│       └── belajar-javascript.md
├── static/
│   ├── about.html
│   ├── articles.html
│   ├── contacts.html
│   ├── proker.html
│   ├── struktur.html
│   └── articles/
│       ├── artikel-fitur-baru.html
│       └── belajar-javascript.html
└── img/
    ├── icon.png
    ├── slide1.jpg, slide2.jpg, slide3.jpg
    └── covers/
        └── news1.jpg, news2.jpg, news3.jpg
```

---

## ✍️ Cara Menulis Artikel Baru (tanpa coding!)

### Langkah 1 — Buat file Markdown

Buat file baru di `content/articles/` dengan nama `nama-artikel-kamu.md`.

Isi dengan format ini:

```
---
title: Judul Artikel Kamu
category: Teknologi
author: Nama Penulis
date: 24 Mei 2026
readtime: 3 menit
cover: https://link-gambar-sampul.jpg
cover_caption: Keterangan gambar sampul (opsional)
---

Paragraf pembuka artikel kamu di sini. Paragraf pertama akan ditampilkan lebih besar.

## Heading Besar

Isi paragraf biasa di sini. Bisa sepanjang apapun.

### Sub-heading

- Poin pertama
- Poin kedua
- **Teks tebal** bisa ditambahkan dengan dua bintang

> Ini adalah kutipan / pull quote yang akan tampil menonjol.

![Nama gambar|Keterangan gambar di bawahnya](https://link-gambar.jpg)

Paragraf penutup.
```

### Langkah 2 — Daftarkan ke manifest

Buka `content/articles-manifest.json`, tambahkan entry baru:

```json
{
  "id": "nama-artikel-kamu",
  "file": "content/articles/nama-artikel-kamu.md",
  "title": "Judul Artikel Kamu",
  "excerpt": "Kalimat singkat preview yang muncul di kartu artikel.",
  "category": "teknologi",
  "author": "Nama Penulis",
  "date": "2026-05-24",
  "cover": "https://link-gambar-sampul.jpg",
  "featured": false
}
```

> Set `"featured": true` jika ingin artikel tampil sebagai sorotan utama.

### Langkah 3 — Buat halaman HTML artikel

Copy file `static/articles/artikel-fitur-baru.html`, rename jadi `nama-artikel-kamu.html`.

Ubah satu baris ini saja:
```html
<div id="article-render-target" data-article-id="nama-artikel-kamu">
```

**Selesai!** Artikel baru sudah muncul di halaman Artikel & terbuka di halaman sendiri.

---

## 👥 Cara Update Data Anggota / Struktur Organisasi

Edit file `content/osis-data.json`. Strukturnya sudah jelas dan berlabel. Tidak perlu ubah kode JavaScript apapun.

---

## 🚀 Cara Menjalankan Lokal

Website ini menggunakan ES Modules dan `fetch()`, jadi **tidak bisa dibuka langsung dengan klik file** (`file://`). Butuh local server sederhana.

Cara paling mudah (jika sudah install Node.js):

```bash
npx serve .
```

Atau dengan Python:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

---

## 📝 Sintaks Markdown yang Didukung

| Sintaks | Hasil |
|---|---|
| `## Judul` | Heading besar |
| `### Sub-judul` | Heading kecil |
| `**teks**` | **tebal** |
| `*teks*` | *miring* |
| `` `kode` `` | `kode inline` |
| `- item` | Poin list |
| `1. item` | Poin berurutan |
| `> kutipan` | Blockquote |
| `![alt\|caption](url)` | Gambar dengan keterangan |
| `---` | Garis pemisah |

```