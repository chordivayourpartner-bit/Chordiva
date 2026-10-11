# Chordiva

Website sederhana untuk mencari chord lagu, dibuat menggunakan HTML, CSS, dan JavaScript murni. Tidak membutuhkan framework, instalasi package, atau backend untuk menjalankan demo.

## Fitur demo
- Pencarian judul lagu dan nama artis
- Daftar hasil pencarian yang responsif
- Halaman detail chord dalam dialog
- Transpose chord naik/turun per semitone
- Salin chord ke clipboard
- Desain dark mode dengan aksen hijau
- Favicon SVG
- Siap dipublikasikan menggunakan GitHub Pages

## Jalankan di komputer
1. Download atau clone repository ini.
2. Buka `index.html` di browser.

Untuk pengalaman lokal yang lebih konsisten, gunakan ekstensi **Live Server** di VS Code, lalu pilih **Open with Live Server** pada `index.html`.

## Publikasikan lewat GitHub Pages
1. Buat repository baru di GitHub, misalnya `chordiva`.
2. Upload semua file di folder ini ke root repository: `index.html`, `styles.css`, `script.js`, dan `favicon.svg`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Tunggu proses deployment selesai. URL website akan tampil di bagian Pages.

## Tambah atau ubah data lagu
Buka `script.js`, lalu edit array `songs` di bagian atas file. Contoh struktur data:

```js
{
  id: 7,
  title: "Judul Lagu",
  artist: "Nama Artis",
  key: "G",
  chords: ["G", "D", "Em", "C"],
  snippet: "G – D – Em – C"
}
```

**Penting:** data lagu dalam repository ini hanya data demo. Ganti dengan data chord yang sudah Anda buat sendiri atau yang penggunaannya sudah memperoleh izin yang sesuai. Lirik dan susunan chord tertentu bisa memiliki perlindungan hak cipta; pastikan hak publikasi sebelum mengunggah konten.

## Batasan versi awal
- Data disimpan di dalam `script.js`, jadi belum ada database atau panel admin.
- Chord yang tampil di detail lagu merupakan contoh pola, bukan transkripsi lagu yang akurat.
- Pencarian hanya berjalan pada data yang sudah dimasukkan ke array.
- Belum ada akun, favorit, sinkronisasi, atau auto-scroll.

## Struktur file

```text
chordiva/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
└── README.md
```
