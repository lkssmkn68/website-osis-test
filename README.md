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
