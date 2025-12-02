"use client";

import { useState, useEffect } from "react";

export default function MusicPopup() {
  const [open, setOpen] = useState(true);
  const [chooseMusic, setChooseMusic] = useState(false);

  const songs = [
    { title: "The Right Way Around", file: "/music/right-way-around.mp3" },
    { title: "Daughter – Burn It Down", file: "/music/burn-it-down.mp3" },
  ];

  /* ⭐ PER FARLO RICOMPARIRE SUBITO — SOLO PER TEST */
  useEffect(() => {
    localStorage.removeItem("musicChosen");
    localStorage.removeItem("musicRefused");

    const alreadyChosen = localStorage.getItem("musicChosen");
    const refused = localStorage.getItem("musicRefused");

    if (alreadyChosen === "true" || refused === "true") {
      setOpen(false);
    }
  }, []);

  /* ⭐ Player globale */
  const playGlobalMusic = (file: string) => {
    const audio = document.getElementById(
      "global-audio-player"
    ) as HTMLAudioElement;

    if (audio) {
      audio.src = file;
      audio.loop = true;
      audio.volume = 0.6;
      audio.play();
    }
  };

  if (!open) return null;

  return (
    <div className="music-popup-overlay">
      <div className="music-popup-box">

        {/* SCHERMATA 1 */}
        {!chooseMusic && (
          <>
            <h2>Vuoi ascoltare un po’ di musica mentre esplori il mio portfolio?</h2>

            <div className="music-popup-buttons">
              <button onClick={() => setChooseMusic(true)}>
                🎵 Sì, fammi scegliere
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("musicRefused", "true");
                  setOpen(false);
                }}
              >
                No grazie
              </button>
            </div>
          </>
        )}

        {/* SCHERMATA 2 */}
        {chooseMusic && (
          <>
            <h2>Scegli una canzone</h2>

            <ul className="song-list">
              {songs.map((song, i) => (
                <li
                  key={i}
                  className="song-item"
                  onClick={() => {
                    playGlobalMusic(song.file);
                    localStorage.setItem("musicChosen", "true");
                    setOpen(false);
                  }}
                >
                  {song.title}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                localStorage.setItem("musicRefused", "true");
                setOpen(false);
              }}
              style={{ marginTop: "20px" }}
            >
              Chiudi
            </button>
          </>
        )}

      </div>
    </div>
  );
}
