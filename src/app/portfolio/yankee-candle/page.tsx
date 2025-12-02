"use client";

import { useState, useEffect } from "react";

export default function YankeeCandleProject() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  /* --- ANIMAZIONE DI ENTRATA DEDICATA A QUESTA PAGINA --- */
  useEffect(() => {
    const timers: any[] = [];
    const items = document.querySelectorAll(".graphic-fade");

    items.forEach((el, i) => {
      const timer = setTimeout(() => {
        el.classList.add("graphic-visible");
      }, 200 + i * 200);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="graphic-page graphic-page-enter">

      {/* TITOLO */}
      <h1 className="graphic-title graphic-fade graphic-delay-1">
        Yankee Candle — Progetto
      </h1>

      {/* SEZIONE STORIA */}
      <section className="graphic-story graphic-fade graphic-delay-2">
        <h2>Storia</h2>
        <p>
          Le Yankee Candle sono sempre state una mia piccola passione: colori,
          profumi e atmosfere rilassanti. Questo progetto nasce proprio da questo:
          trasformare un amore personale in un sito elegante, ordinato e piacevole
          da navigare.
        </p>
      </section>

      {/* TITOLO GALLERIA */}
      <h3 className="graphic-gallery-title graphic-fade graphic-delay-3">
        Ecco alcuni scatti del progetto
      </h3>

      {/* GALLERIA IMMAGINI */}
      <div className="graphic-gallery graphic-fade graphic-delay-4">

        <img
          src="/yankee1.jpg"
          alt="Yankee Candle 1"
          onClick={() => setModalImage("/yankee1.jpg")}
        />

        <img
          src="/yankee2.jpg"
          alt="Yankee Candle 2"
          onClick={() => setModalImage("/yankee2.jpg")}
        />

        <img
          src="/yankee3.jpg"
          alt="Yankee Candle 3"
          onClick={() => setModalImage("/yankee3.jpg")}
        />

        <img
          src="/yankee4.png"
          alt="Yankee Candle 4"
          className="no-bg"
          onClick={() => setModalImage("/yankee4.png")}
        />

        <img
          src="/yankee5.jpg"
          alt="Yankee Candle 5"
          onClick={() => setModalImage("/yankee5.jpg")}
        />

      </div> {/* ← CHIUSA GALLERY QUI */}

      {/* 🔥 PULSANTE – TORNA ALL'INDICE PROGETTI (FUORI DALLA GALLERY) */}
      <div className="yc-book-box">
        <a href="/codiceback" className="back-to-book-link">
          <img src="/book-index.png" className="back-to-book-img yc-book-img" />
        </a>
      </div>

      {/* MODALE IMMAGINE */}
      {modalImage && (
        <div className="graphic-modal-overlay" onClick={() => setModalImage(null)}>
          <img
            src={modalImage}
            className="graphic-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="graphic-modal-close" onClick={() => setModalImage(null)}>
            ✖
          </span>
        </div>
      )}
    </div>
  );
}
