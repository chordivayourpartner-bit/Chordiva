// Data demo saja. Ganti dengan data lagu yang Anda miliki atau berizin untuk dipublikasikan.
const songs = [
  { id: 1, title: "Komang", artist: "Raim Laode", key: "G", chords: ["G", "D", "Em", "C"], snippet: "G – D – Em – C" },
  { id: 2, title: "Hati-Hati di Jalan", artist: "Tulus", key: "C", chords: ["C", "G", "Am", "F"], snippet: "C – G – Am – F" },
  { id: 3, title: "Sempurna", artist: "Andra and The Backbone", key: "C", chords: ["C", "Em", "F", "G"], snippet: "C – Em – F – G" },
  { id: 4, title: "Evaluasi", artist: "Hindia", key: "Am", chords: ["Am", "F", "C", "G"], snippet: "Am – F – C – G" },
  { id: 5, title: "Rumah ke Rumah", artist: "Hindia", key: "G", chords: ["G", "D", "Em", "C"], snippet: "G – D – Em – C" },
  { id: 6, title: "Akad", artist: "Payung Teduh", key: "C", chords: ["C", "G", "Am", "F"], snippet: "C – G – Am – F" }
];

const songGrid = document.querySelector("#song-grid");
const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");
const resultsTitle = document.querySelector("#results-title");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#song-dialog");
const toast = document.querySelector("#toast");
let currentSong = null;
let transposeSteps = 0;
let toastTimer;

const chordNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const chordAliases = { "Db":"C#", "Eb":"D#", "Gb":"F#", "Ab":"G#", "Bb":"A#" };
const demoLines = [
  ["Intro", ["G", "D", "Em", "C"]],
  ["Verse", ["G", "D", "Em", "C"]],
  ["Chorus", ["C", "G", "D", "Em"]]
];

function iconMusic() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>';
}
function renderSongs(list, query = "") {
  songGrid.innerHTML = "";
  resultsTitle.textContent = query ? "Hasil pencarian" : "Lagu pilihan";
  resultCount.textContent = query ? `${list.length} hasil` : `${list.length} lagu contoh`;
  emptyState.classList.toggle("hidden", list.length !== 0);
  songGrid.classList.toggle("hidden", list.length === 0);
  list.forEach(song => {
    const button = document.createElement("button");
    button.className = "song-card";
    button.type = "button";
    button.innerHTML = `<span class="album-art">${iconMusic()}</span><span class="song-info"><strong></strong><span></span></span><span class="song-arrow" aria-hidden="true">↗</span>`;
    button.querySelector("strong").textContent = song.title;
    button.querySelector(".song-info span").textContent = song.artist;
    button.addEventListener("click", () => openSong(song));
    songGrid.appendChild(button);
  });
}
function searchSongs(query) {
  const q = query.trim().toLocaleLowerCase("id");
  const results = q ? songs.filter(song => `${song.title} ${song.artist}`.toLocaleLowerCase("id").includes(q)) : songs;
  renderSongs(results, q);
}
function normalizeChord(chord) {
  const match = chord.match(/^([A-G](?:#|b)?)(.*)$/);
  if (!match) return chord;
  const root = chordAliases[match[1]] || match[1];
  const index = chordNames.indexOf(root);
  if (index < 0) return chord;
  const next = (index + transposeSteps + 120) % 12;
  return chordNames[next] + match[2];
}
function makeDemoContent() {
  const title = currentSong.title;
  const baseChords = currentSong.chords;
  const lines = [
    `${title}`,
    "",
    "[Intro]",
    baseChords.map(normalizeChord).join("     "),
    "",
    "[Verse]",
    baseChords.map(normalizeChord).join("     "),
    "Mainkan pola chord sesuai tempo lagu.",
    "",
    "[Chorus]",
    [...baseChords].reverse().map(normalizeChord).join("     "),
    "",
    "[Outro]",
    baseChords.map(normalizeChord).join("     ")
  ];
  return lines.join("\n");
}
function openSong(song) {
  currentSong = song;
  transposeSteps = 0;
  document.querySelector("#dialog-title").textContent = song.title;
  document.querySelector("#detail-artist").textContent = song.artist;
  updateSongDetail();
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}
function updateSongDetail() {
  document.querySelector("#transpose-value").textContent = transposeSteps === 0 ? "Nada asli" : `${transposeSteps > 0 ? "+" : ""}${transposeSteps} semitone`;
  document.querySelector("#lyrics-content").textContent = makeDemoContent();
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchSongs(searchInput.value);
  document.querySelector("#hasil").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelectorAll(".suggestion").forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    searchSongs(searchInput.value);
    document.querySelector("#hasil").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.querySelector("#reset-search").addEventListener("click", () => {
  searchInput.value = "";
  searchSongs("");
});
document.querySelector("#transpose-down").addEventListener("click", () => { transposeSteps--; updateSongDetail(); });
document.querySelector("#transpose-up").addEventListener("click", () => { transposeSteps++; updateSongDetail(); });
document.querySelector("#transpose-reset").addEventListener("click", () => { transposeSteps = 0; updateSongDetail(); });
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
document.querySelector("#close-x").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#copy-chords").addEventListener("click", async () => {
  const text = currentSong.chords.map(normalizeChord).join(" - ");
  try {
    await navigator.clipboard.writeText(text);
    showToast("Chord berhasil disalin.");
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    const copied = document.execCommand("copy");
    temp.remove();
    showToast(copied ? "Chord berhasil disalin." : "Salin chord ini: " + text);
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderSongs(songs);
