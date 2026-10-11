# Chordiva

Website sederhana untuk mencari chord lagu, dibuat dengan HTML, CSS, dan JavaScript murni. Tidak butuh framework, instalasi package, atau backend.

## Fitur
- Pencarian judul/artis yang langsung merespons saat mengetik (tidak peka tanda baca, jadi "hati hati jalan" menemukan "Hati-Hati di Jalan")
- Detail chord dalam dialog, dibagi per bagian (Intro, Verse, Chorus, dst.)
- **Transpose** naik/turun per semitone, dengan penulisan # atau b yang menyesuaikan nada
- **Capo**: geser capo dan chord otomatis menyesuaikan bentuknya
- **Diagram chord**: ketuk chord untuk melihat posisi jari
- **Auto-scroll** dengan 5 kecepatan, berhenti otomatis saat layar disentuh
- Ukuran teks bisa diperbesar/diperkecil
- Favorit (tersimpan di browser) dan filter "Favorit"
- Tautan langsung ke lagu, contoh: `.../index.html#/lagu/komang`
- Salin chord lengkap ke clipboard, tampilan cetak yang bersih
- Dark mode dengan aksen hijau, responsif, dan ramah keyboard

## Lagu yang tersedia
Komang, Hati-Hati di Jalan, Sempurna, Evaluasi, Rumah ke Rumah, dan Akad. Progresi chord disusun dengan membandingkan beberapa referensi publik. Setiap lagu punya label akurasi:
- **Cocok di beberapa referensi**: progresi sama di lebih dari satu sumber.
- **Cek dengan telinga**: sebagian bagian hanya ditemukan di satu sumber atau sumbernya berbeda-beda.

Chord tetap bisa berbeda dari rekaman asli, jadi cocokkan dengan telinga.

## Jalankan di komputer
1. Download atau clone repository ini.
2. Buka `index.html` di browser. Atau gunakan ekstensi **Live Server** di VS Code.

## Publikasikan lewat GitHub Pages
1. Upload `index.html`, `styles.css`, `script.js`, `favicon.svg` ke root repository.
2. Buka **Settings → Pages**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu **Save**.

## Menambah lagu
Edit array `songs` di bagian atas `script.js`:

```js
{
  id: "judul-lagu",            // huruf kecil dan tanda hubung, dipakai untuk tautan
  title: "Judul Lagu",
  artist: "Nama Artis",
  key: "G",                    // nada dasar dari BENTUK chord yang Anda tulis
  capo: 0,                     // capo untuk bentuk chord tersebut (nada asli = key + capo)
  level: "Pemula",
  accuracy: "high",            // "high" atau "medium"
  note: "Catatan opsional.",
  sections: [
    { name: "Intro",  lines: ["G D Em C"] },
    { name: "Verse",  lines: ["G D", "Em C"] },
    { name: "Chorus", lines: ["C G Am F", "Em ×2"] }
  ]
}
```

Aturan data:
- Satu string di `lines` adalah satu baris chord, dibaca kiri ke kanan.
- Slash chord (`D/F#`), 7th (`Am7`), `maj7`, dan `add9` didukung. Semua ikut tertranspose, termasuk nada bass.
- Token yang bukan chord (misalnya `×3`) tampil sebagai keterangan.
- Contoh lagu yang dimainkan dengan capo: Akad ditulis dalam bentuk `G` dengan `capo: 2`, sehingga nada aslinya A.

Diagram tersedia untuk chord terbuka umum dan chord barre mayor/minor/7/m7/maj7. Chord lain (misalnya `Cadd9` di posisi lain atau `sus`) akan menampilkan pesan "belum tersedia".

## Catatan hak cipta
Aplikasi ini hanya menyimpan progresi chord, bukan lirik. Lirik dan susunan chord lengkap bisa memiliki perlindungan hak cipta. Jika Anda menambahkan lirik atau transkripsi lengkap, pastikan Anda memiliki izin untuk mempublikasikannya.

## Batasan saat ini
- Data tersimpan di `script.js` (belum ada database atau panel admin).
- Favorit hanya tersimpan di browser yang dipakai.
- Belum ada akun atau sinkronisasi antar perangkat.

## Struktur file
```text
chordiva/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
└── README.md
```
