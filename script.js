"use strict";

/* =====================================================================
   DATA LAGU
   ---------------------------------------------------------------------
   - key   : nada dasar dari BENTUK chord yang ditulis di `sections`
   - capo  : posisi capo untuk bentuk chord tersebut (nada asli = key + capo)
   - Hanya progresi chord yang disimpan (tanpa lirik). Satu baris = urutan
     perpindahan chord, dibaca dari kiri ke kanan.
   - Token yang bukan chord (mis. "×3") ditampilkan sebagai keterangan.
   ===================================================================== */
const songs = [
  {
    id: "komang", title: "Komang", artist: "Raim Laode",
    key: "G", capo: 0, level: "Menengah", accuracy: "high",
    note: "Slash chord (D/F#, G/B) boleh diganti D dan G untuk versi yang lebih mudah.",
    sections: [
      { name: "Intro", lines: ["G D/F# D", "Am G/B Cadd9 Cm"] },
      { name: "Verse", lines: ["G D/F# D", "Am G/B Cadd9 Cm", "G D/F# D", "Am G/B Cadd9 Cm"] },
      { name: "Pre-chorus", lines: ["Em D", "C", "Em D", "F D"] },
      { name: "Reff", lines: ["G", "D/F# D Am G/B", "Cadd9 Cm", "G D/F# D", "Am G/B", "Cadd9 Cm"] },
      { name: "Interlude", lines: ["Em D C"] },
      { name: "Verse 2", lines: ["Em D C", "Em D F", "D"] },
      { name: "Interlude 2", lines: ["G D/F# D F D"] },
      { name: "Reff (ulang)", lines: ["G", "D/F# D Am G/B", "Cadd9 Cm", "G D/F# D", "Am G/B", "Cadd9 Cm"] },
      { name: "Outro", lines: ["Em D C", "Em D C", "Em D", "C", "Em D", "F"] }
    ]
  },
  {
    id: "hati-hati-di-jalan", title: "Hati-Hati di Jalan", artist: "Tulus",
    key: "C", capo: 6, level: "Menengah", accuracy: "medium",
    note: "Nada asli ada di F#, jadi dimainkan dengan capo 6 memakai bentuk chord C. Bagian verse dan chorus berasal dari referensi yang berbeda, jadi cocokkan dengan telinga.",
    sections: [
      { name: "Intro", lines: ["Cmaj7 Fmaj7/C", "Cmaj7 Fmaj7/C"] },
      { name: "Verse (2×)", lines: ["Cmaj7 Bm7 E7 Am7", "Gm7 C7 Fmaj7", "Em7 Am7 Dm7"] },
      { name: "Pre-chorus", lines: ["Am7 G/A", "Cmaj7 C/E"] },
      { name: "Chorus", lines: ["C Em Am", "G F", "Em Dm G", "C Em Am", "G F", "Em Dm G"] },
      { name: "Bridge", lines: ["C Am", "Dm Em G"] },
      { name: "Interlude", lines: ["C Em Am G Dm G"] },
      { name: "Chorus (ulang)", lines: ["C Em Am", "G F", "Em Dm G", "C Em Am", "G F", "Em Dm G"] },
      { name: "Outro", lines: ["G C G C", "Cmaj7 C Cmaj7", "C Am G C"] }
    ]
  },
  {
    id: "sempurna", title: "Sempurna", artist: "Andra and The Backbone",
    key: "E", capo: 0, level: "Pemula", accuracy: "high",
    note: "Ingin bentuk chord yang lebih mudah? Atur Capo ke 2 lalu mainkan bentuk D – Bm – G – A.",
    sections: [
      { name: "Intro", lines: ["E"] },
      { name: "Verse", lines: ["E C#m A B", "E C#m A B C#m"] },
      { name: "Pre-chorus", lines: ["A B", "C#m", "A B"] },
      { name: "Chorus", lines: ["E B A", "E B A", "C#m G#m A", "C#m G#m A F#m", "E C#m"] },
      { name: "Verse 2", lines: ["E C#m A B", "E C#m A B C#m"] },
      { name: "Pre-chorus (ulang)", lines: ["A B", "C#m", "A B"] },
      { name: "Chorus (ulang)", lines: ["E B A", "E B A", "C#m G#m A", "C#m G#m A F#m", "E C#m"] }
    ]
  },
  {
    id: "evaluasi", title: "Evaluasi", artist: "Hindia",
    key: "G", capo: 0, level: "Pemula", accuracy: "medium",
    note: "Bagian bridge belum dimasukkan karena referensi yang ada saling berbeda. Tambahkan sendiri setelah dicek dengan rekamannya.",
    sections: [
      { name: "Verse", lines: ["G F", "G Dm", "G F", "G F"] },
      { name: "Transisi", lines: ["F Gm Am", "C D F"] },
      { name: "Chorus", lines: ["G C", "Em D", "C"] },
      { name: "Verse 2", lines: ["G F", "G F G", "Am Em G"] },
      { name: "Chorus (ulang)", lines: ["G C", "Em D", "C"] },
      { name: "Outro", lines: ["G C", "C G", "G C", "C G"] }
    ]
  },
  {
    id: "rumah-ke-rumah", title: "Rumah ke Rumah", artist: "Hindia",
    key: "E", capo: 0, level: "Menengah", accuracy: "high",
    note: "Beberapa versi populer memainkannya setengah nada lebih tinggi (F – Em – Am). Tekan Transpose +1 untuk melihat versi itu.",
    sections: [
      { name: "Intro", lines: ["Emaj7 D#m7"] },
      { name: "Verse", lines: ["Emaj7 D#m7", "Emaj7", "D#m7", "Emaj7"] },
      { name: "Verse 2", lines: ["Emaj7 D#m7", "Emaj7", "D#m7", "G#m Emaj7"] },
      { name: "Reff", lines: ["Emaj7 D#m7", "Emaj7", "D#m7", "G#m Emaj7"] },
      { name: "Interlude", lines: ["D#m7 Emaj7 D#m7"] },
      { name: "Reff (ulang)", lines: ["Emaj7 D#m7", "Emaj7", "D#m7", "G#m Emaj7"] },
      { name: "Outro", lines: ["Emaj7 D#m7 Emaj7 D#m7", "G#m Emaj7"] }
    ]
  },
  {
    id: "akad", title: "Akad", artist: "Payung Teduh",
    key: "G", capo: 2, level: "Pemula", accuracy: "high",
    note: "Dimainkan dengan capo 2 memakai bentuk G, sehingga nada aslinya A. Versi rekaman memakai chord 7th (Amaj7, Bm7, E7) yang bisa Anda coba setelah versi ini lancar.",
    sections: [
      { name: "Intro", lines: ["Em A ×3", "D"] },
      { name: "Verse", lines: ["G Am C G", "G Am C G"] },
      { name: "Pre-chorus", lines: ["Am D Bm E", "Am D"] },
      { name: "Chorus", lines: ["G Bm Dm E Am", "C D Bm Em Am D"] },
      { name: "Outro", lines: ["G Bm Dm E Am", "C D Bm Em", "Am D G", "Am D G", "Am D"] }
    ]
  }
];

/* =====================================================================
   LOGIKA CHORD
   ===================================================================== */
const NOTES_SHARP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const NOTES_FLAT  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const NOTE_INDEX  = { C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11 };
const FLAT_KEYS   = new Set([5, 10, 3, 8, 1]); // F, Bb, Eb, Ab, Db
const CHORD_RE    = /^([A-G][#b]?)([^\s/]*)(?:\/([A-G][#b]?))?$/;

const mod12 = n => ((n % 12) + 12) % 12;
const noteName = (index, flats) => (flats ? NOTES_FLAT : NOTES_SHARP)[mod12(index)];

function transposeChord(token, steps, flats) {
  const m = CHORD_RE.exec(token);
  if (!m || NOTE_INDEX[m[1]] === undefined) return token;
  let out = noteName(NOTE_INDEX[m[1]] + steps, flats) + m[2];
  if (m[3] && NOTE_INDEX[m[3]] !== undefined) out += "/" + noteName(NOTE_INDEX[m[3]] + steps, flats);
  return out;
}

/* ---- Diagram chord (senar 6 → 1, -1 = tidak dimainkan) ---- */
const OPEN_SHAPES = {
  C: "x32010", D: "xx0232", E: "022100", F: "133211", G: "320003", A: "x02220", B: "x24442",
  Am: "x02210", Bm: "x24432", Dm: "xx0231", Em: "022000",
  C7: "x32310", D7: "xx0212", E7: "020100", G7: "320001", A7: "x02020", B7: "x21202",
  Am7: "x02010", Bm7: "x20202", Dm7: "xx0211", Em7: "022030",
  Cmaj7: "x32000", Dmaj7: "xx0222", Emaj7: "021100", Fmaj7: "xx3210", Gmaj7: "320002", Amaj7: "x02120",
  Cadd9: "x32030", "G/B": "x20003", "D/F#": "200232", "C/E": "032010"
};
const E_SHAPES = { "": [0, 2, 2, 1, 0, 0], m: [0, 2, 2, 0, 0, 0], 7: [0, 2, 0, 1, 0, 0], m7: [0, 2, 0, 0, 0, 0], maj7: [0, 2, 1, 1, 0, 0] };
const A_SHAPES = { "": [-1, 0, 2, 2, 2, 0], m: [-1, 0, 2, 2, 1, 0], 7: [-1, 0, 2, 0, 2, 0], m7: [-1, 0, 2, 0, 1, 0], maj7: [-1, 0, 2, 1, 2, 0] };

function chordFrets(name) {
  if (OPEN_SHAPES[name]) return [...OPEN_SHAPES[name]].map(c => (c === "x" ? -1 : Number(c)));
  const m = CHORD_RE.exec(name);
  if (!m || m[3] || NOTE_INDEX[m[1]] === undefined || !E_SHAPES[m[2]]) return null;
  const root = NOTE_INDEX[m[1]];
  const fE = mod12(root - 4), fA = mod12(root - 9);
  const useE = fE <= fA;
  const f = useE ? fE : fA;
  const tpl = (useE ? E_SHAPES : A_SHAPES)[m[2]];
  return tpl.map(x => (x < 0 ? -1 : x + f));
}

function diagramSVG(name) {
  const frets = chordFrets(name);
  if (!frets) return null;
  const pressed = frets.filter(f => f > 0);
  const min = pressed.length ? Math.min(...pressed) : 1;
  const max = pressed.length ? Math.max(...pressed) : 1;
  const start = max <= 5 ? 1 : min;
  const x0 = 30, y0 = 34, sg = 13, fg = 16, rows = 5;
  let s = `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" role="img">`;
  for (let i = 0; i < 6; i++) s += `<line x1="${x0 + i * sg}" y1="${y0}" x2="${x0 + i * sg}" y2="${y0 + rows * fg}" class="d-line"/>`;
  for (let r = 0; r <= rows; r++) s += `<line x1="${x0}" y1="${y0 + r * fg}" x2="${x0 + 5 * sg}" y2="${y0 + r * fg}" class="${r === 0 && start === 1 ? "d-nut" : "d-line"}"/>`;
  if (start > 1) s += `<text x="${x0 - 8}" y="${y0 + fg * 0.7}" class="d-text" text-anchor="end">${start}fr</text>`;
  frets.forEach((f, i) => {
    const x = x0 + i * sg;
    if (f < 0) s += `<text x="${x}" y="${y0 - 8}" class="d-text" text-anchor="middle">×</text>`;
    else if (f === 0) s += `<circle cx="${x}" cy="${y0 - 11}" r="3.2" class="d-open"/>`;
    else s += `<circle cx="${x}" cy="${y0 + (f - start + 0.5) * fg}" r="5" class="d-dot"/>`;
  });
  return s + "</svg>";
}

/* =====================================================================
   ELEMEN & STATE
   ===================================================================== */
const $ = sel => document.querySelector(sel);
const songGrid = $("#song-grid"), searchInput = $("#search-input"), searchForm = $("#search-form");
const resultsTitle = $("#results-title"), resultCount = $("#result-count"), emptyState = $("#empty-state");
const emptyTitle = $("#empty-title"), emptyText = $("#empty-text");
const dialog = $("#song-dialog"), toast = $("#toast"), sheet = $("#sheet");

const FAV_KEY = "chordiva:favorites";
const state = { song: null, steps: 0, capo: 0, fontSize: 15, query: "", onlyFav: false };
let favorites = loadFavorites();
let toastTimer;

function loadFavorites() {
  try { const v = JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); return new Set(Array.isArray(v) ? v : []); }
  catch { return new Set(); }
}
function saveFavorites() {
  try { localStorage.setItem(FAV_KEY, JSON.stringify([...favorites])); } catch { /* penyimpanan dinonaktifkan */ }
}
function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  saveFavorites();
  refreshList();
  if (state.song) updateFavButton();
}

/* ---- Nada & capo ---- */
const soundingKeyIndex = song => NOTE_INDEX[song.key] + song.capo;
const originalKeyName  = song => noteName(soundingKeyIndex(song), FLAT_KEYS.has(mod12(soundingKeyIndex(song))));
function currentShapeSteps() { return state.steps - (state.capo - state.song.capo); }
function displayChord(token) {
  const shapeSteps = currentShapeSteps();
  const flats = FLAT_KEYS.has(mod12(NOTE_INDEX[state.song.key] + shapeSteps));
  return transposeChord(token, shapeSteps, flats);
}

/* =====================================================================
   DAFTAR LAGU & PENCARIAN
   ===================================================================== */
const normalize = s => s.toLocaleLowerCase("id").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

function filteredSongs() {
  const tokens = normalize(state.query).split(" ").filter(Boolean);
  return songs.filter(song => {
    if (state.onlyFav && !favorites.has(song.id)) return false;
    const haystack = normalize(`${song.title} ${song.artist}`);
    return tokens.every(t => haystack.includes(t));
  });
}

function iconMusic() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>';
}

function renderSongs(list) {
  const searching = state.query.trim() !== "";
  songGrid.innerHTML = "";
  resultsTitle.textContent = state.onlyFav ? "Lagu favorit" : searching ? "Hasil pencarian" : "Lagu pilihan";
  resultCount.textContent = `${list.length} lagu`;
  const empty = list.length === 0;
  emptyState.classList.toggle("hidden", !empty);
  songGrid.classList.toggle("hidden", empty);
  if (empty) {
    emptyTitle.textContent = state.onlyFav && !searching ? "Belum ada favorit" : "Lagu belum ditemukan";
    emptyText.textContent = state.onlyFav && !searching ? "Tekan ikon hati pada sebuah lagu untuk menyimpannya di sini." : "Coba kata kunci lain, misalnya judul lagu atau nama artis.";
  }
  list.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    const open = document.createElement("button");
    open.type = "button";
    open.className = "song-open";
    open.innerHTML = `<span class="album-art">${iconMusic()}</span><span class="song-info"><strong></strong><span></span></span><span class="key-badge" title="Nada asli"></span>`;
    open.querySelector("strong").textContent = song.title;
    open.querySelector(".song-info span").textContent = song.artist;
    open.querySelector(".key-badge").textContent = originalKeyName(song);
    open.addEventListener("click", () => openSong(song));
    const fav = document.createElement("button");
    fav.type = "button";
    fav.className = "fav-btn";
    const isFav = favorites.has(song.id);
    fav.textContent = isFav ? "♥" : "♡";
    fav.setAttribute("aria-pressed", String(isFav));
    fav.setAttribute("aria-label", `${isFav ? "Hapus" : "Simpan"} ${song.title} ${isFav ? "dari" : "ke"} favorit`);
    fav.addEventListener("click", () => toggleFavorite(song.id));
    card.append(open, fav);
    songGrid.appendChild(card);
  });
}

function refreshList() {
  renderSongs(filteredSongs());
  document.querySelectorAll(".filter-tab").forEach(btn => {
    const active = (btn.dataset.filter === "fav") === state.onlyFav;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function runSearch(query, { scroll = false } = {}) {
  state.query = query;
  refreshList();
  if (scroll) $("#hasil").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =====================================================================
   DETAIL LAGU
   ===================================================================== */
function chordsUsed() {
  const seen = [];
  state.song.sections.forEach(sec => sec.lines.forEach(line => line.split(/\s+/).forEach(tok => {
    if (CHORD_RE.test(tok)) { const c = displayChord(tok); if (!seen.includes(c)) seen.push(c); }
  })));
  return seen;
}

function renderInfo() {
  const song = state.song;
  const soundIdx = soundingKeyIndex(song) + state.steps;
  const sound = noteName(soundIdx, FLAT_KEYS.has(mod12(soundIdx)));
  const shapeIdx = NOTE_INDEX[song.key] + currentShapeSteps();
  const shape = noteName(shapeIdx, FLAT_KEYS.has(mod12(shapeIdx)));
  const accuracy = song.accuracy === "high" ? "Cocok di beberapa referensi" : "Cek dengan telinga";
  const chips = [
    ["Nada", sound], ["Bentuk chord", shape], ["Capo", state.capo === 0 ? "Tanpa capo" : `Fret ${state.capo}`],
    ["Level", song.level], ["Akurasi", accuracy]
  ];
  const ul = $("#info-chips");
  ul.innerHTML = "";
  chips.forEach(([label, value]) => {
    const li = document.createElement("li");
    li.innerHTML = "<span></span><strong></strong>";
    li.firstChild.textContent = label;
    li.lastChild.textContent = value;
    ul.appendChild(li);
  });
}

function renderSheet() {
  sheet.innerHTML = "";
  sheet.style.setProperty("--sheet-size", state.fontSize + "px");
  state.song.sections.forEach(sec => {
    const block = document.createElement("section");
    block.className = "sheet-section";
    const h = document.createElement("h3");
    h.textContent = sec.name;
    block.appendChild(h);
    sec.lines.forEach(line => {
      const row = document.createElement("div");
      row.className = "chord-line";
      line.split(/\s+/).forEach(tok => {
        const span = document.createElement("span");
        if (CHORD_RE.test(tok)) { span.className = "chord"; span.textContent = displayChord(tok); }
        else { span.className = "chord-mark"; span.textContent = tok; }
        row.appendChild(span);
      });
      block.appendChild(row);
    });
    sheet.appendChild(block);
  });
}

function renderUsedChords() {
  const wrap = $("#used-chords");
  wrap.innerHTML = "";
  chordsUsed().forEach(name => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chord-chip";
    b.textContent = name;
    b.addEventListener("click", () => showDiagram(name, b));
    wrap.appendChild(b);
  });
  $("#chord-diagram").innerHTML = "";
}

function showDiagram(name, button) {
  document.querySelectorAll(".chord-chip").forEach(b => b.classList.toggle("active", b === button));
  const box = $("#chord-diagram");
  const svg = diagramSVG(name);
  box.innerHTML = "";
  const title = document.createElement("strong");
  title.textContent = name;
  box.appendChild(title);
  if (svg) {
    const holder = document.createElement("div");
    holder.className = "diagram";
    holder.innerHTML = svg;
    holder.firstChild.setAttribute("aria-label", `Diagram jari chord ${name}`);
    box.appendChild(holder);
  } else {
    const p = document.createElement("p");
    p.textContent = "Diagram untuk chord ini belum tersedia.";
    box.appendChild(p);
  }
}

function updateSongDetail() {
  $("#transpose-value").textContent = state.steps === 0 ? "Nada asli" : `${state.steps > 0 ? "+" : ""}${state.steps} semitone`;
  $("#capo-value").textContent = state.capo === 0 ? "Tanpa capo" : `Fret ${state.capo}`;
  $("#capo-down").disabled = state.capo <= 0;
  $("#capo-up").disabled = state.capo >= 9;
  $("#font-down").disabled = state.fontSize <= 12;
  $("#font-up").disabled = state.fontSize >= 26;
  renderInfo();
  renderSheet();
  renderUsedChords();
}

function updateFavButton() {
  const isFav = favorites.has(state.song.id);
  const btn = $("#dialog-fav");
  btn.textContent = isFav ? "♥" : "♡";
  btn.setAttribute("aria-pressed", String(isFav));
  btn.setAttribute("aria-label", isFav ? "Hapus dari favorit" : "Simpan ke favorit");
}

function openSong(song, { silent = false } = {}) {
  state.song = song;
  state.steps = 0;
  state.capo = song.capo;
  state.fontSize = 15;
  $("#dialog-title").textContent = song.title;
  $("#detail-artist").textContent = song.artist;
  $("#song-note").textContent = song.note || "";
  $("#song-note").classList.toggle("hidden", !song.note);
  $("#auto-scroll").setAttribute("aria-pressed", "false");
  $("#auto-scroll").textContent = "Mulai";
  updateSongDetail();
  updateFavButton();
  dialog.scrollTop = 0;
  document.body.classList.add("modal-open");
  if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
  if (!silent) { try { history.replaceState(null, "", `#/lagu/${song.id}`); } catch { /* abaikan */ } }
}

function closeSong() {
  stopAutoScroll();
  document.body.classList.remove("modal-open");
  try { if (location.hash.startsWith("#/lagu/")) history.replaceState(null, "", location.pathname + location.search); } catch { /* abaikan */ }
}

/* ---- Auto-scroll ---- */
const SCROLL_SPEEDS = [0, 8, 14, 22, 32, 46]; // piksel per detik
let scrolling = false, scrollAcc = 0, lastTs = 0;
function tickScroll(ts) {
  if (!scrolling) return;
  const dt = Math.min(64, ts - lastTs) / 1000;
  lastTs = ts;
  scrollAcc += SCROLL_SPEEDS[Number($("#scroll-speed").value)] * dt;
  const whole = Math.floor(scrollAcc);
  if (whole >= 1) { dialog.scrollTop += whole; scrollAcc -= whole; }
  if (dialog.scrollTop + dialog.clientHeight >= dialog.scrollHeight - 2) { stopAutoScroll(); return; }
  requestAnimationFrame(tickScroll);
}
function startAutoScroll() {
  scrolling = true; scrollAcc = 0; lastTs = performance.now();
  $("#auto-scroll").setAttribute("aria-pressed", "true");
  $("#auto-scroll").textContent = "Berhenti";
  requestAnimationFrame(tickScroll);
}
function stopAutoScroll() {
  scrolling = false;
  const btn = $("#auto-scroll");
  btn.setAttribute("aria-pressed", "false");
  btn.textContent = "Mulai";
}

/* ---- Salin ---- */
function buildCopyText() {
  const song = state.song;
  const sound = $("#info-chips").children[0].lastChild.textContent;
  const out = [`${song.title} – ${song.artist}`, `Nada: ${sound}${state.capo ? ` | Capo ${state.capo}` : ""}`, ""];
  song.sections.forEach(sec => {
    out.push(`[${sec.name}]`);
    sec.lines.forEach(line => out.push(line.split(/\s+/).map(t => (CHORD_RE.test(t) ? displayChord(t) : t)).join("  ")));
    out.push("");
  });
  return out.join("\n").trim() + "\n";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* =====================================================================
   EVENT
   ===================================================================== */
searchForm.addEventListener("submit", e => { e.preventDefault(); runSearch(searchInput.value, { scroll: true }); });
let searchTimer;
searchInput.addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(() => runSearch(searchInput.value), 120); });
document.querySelectorAll(".suggestion").forEach(btn => btn.addEventListener("click", () => {
  searchInput.value = btn.dataset.query;
  state.onlyFav = false;
  runSearch(searchInput.value, { scroll: true });
}));
document.querySelectorAll(".filter-tab").forEach(btn => btn.addEventListener("click", () => {
  state.onlyFav = btn.dataset.filter === "fav";
  refreshList();
}));
$("#reset-search").addEventListener("click", () => { searchInput.value = ""; state.onlyFav = false; runSearch(""); });

$("#transpose-down").addEventListener("click", () => { state.steps--; updateSongDetail(); });
$("#transpose-up").addEventListener("click", () => { state.steps++; updateSongDetail(); });
$("#transpose-reset").addEventListener("click", () => { state.steps = 0; state.capo = state.song.capo; updateSongDetail(); });
$("#capo-down").addEventListener("click", () => { state.capo = Math.max(0, state.capo - 1); updateSongDetail(); });
$("#capo-up").addEventListener("click", () => { state.capo = Math.min(9, state.capo + 1); updateSongDetail(); });
$("#font-down").addEventListener("click", () => { state.fontSize = Math.max(12, state.fontSize - 1); updateSongDetail(); });
$("#font-up").addEventListener("click", () => { state.fontSize = Math.min(26, state.fontSize + 1); updateSongDetail(); });
$("#auto-scroll").addEventListener("click", () => (scrolling ? stopAutoScroll() : startAutoScroll()));
["wheel", "touchstart"].forEach(ev => dialog.addEventListener(ev, () => { if (scrolling) stopAutoScroll(); }, { passive: true }));

$("#dialog-fav").addEventListener("click", () => toggleFavorite(state.song.id));
$("#close-dialog").addEventListener("click", () => dialog.close());
$("#close-x").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener("close", closeSong);

$("#copy-chords").addEventListener("click", async () => {
  const text = buildCopyText();
  try {
    await navigator.clipboard.writeText(text);
    showToast("Chord berhasil disalin.");
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    let copied = false;
    try { copied = document.execCommand("copy"); } catch { /* abaikan */ }
    temp.remove();
    showToast(copied ? "Chord berhasil disalin." : "Penyalinan gagal. Salin manual dari layar.");
  }
});

$("#year").textContent = new Date().getFullYear();
refreshList();

// Buka lagu langsung dari tautan, mis. ...#/lagu/komang
const deepLink = /^#\/lagu\/([a-z0-9-]+)$/.exec(location.hash);
if (deepLink) { const song = songs.find(s => s.id === deepLink[1]); if (song) openSong(song, { silent: true }); }
