"use client";

import { useState, useEffect } from "react";

export default function LifeIsStrangeGraphics() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  /* --- ANIMAZIONE ENTRATA --- */
  useEffect(() => {
    const timers: any[] = [];
    const items = document.querySelectorAll(".lis-graphic-fade");

    items.forEach((el, i) => {
      const timer = setTimeout(() => {
        el.classList.add("lis-graphic-visible");
      }, 200 + i * 200);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="lis-graphic-page lis-graphic-enter">

      {/* ------------------------- TITOLO ------------------------- */}
      <h1 className="lis-graphic-title lis-graphic-fade lis-delay-1">
        Life Is Strange — Progetto
      </h1>

      {/* ------------------------- STORIA ------------------------- */}
      <section className="lis-graphic-story lis-graphic-fade lis-delay-2">
        <h2>Storia</h2>

        <p>
          Life Is Strange è un gioco che porto nel cuore da anni.
          Non è solo una storia interattiva: è un viaggio emotivo fatto di amicizie profonde,
          scelte difficili, silenzi carichi di significato e colori che sembrano dipinti sopra un ricordo.
          <br /><br />
          Mi sono sempre ritrovata nell’atmosfera del gioco: nelle sue luci soffuse,
          nei tramonti pastello, nelle fotografie che sembrano sospese nel tempo.
          È un mondo che parla di fragilità, coraggio, nostalgia… e di quella sensibilità che spesso
          non si riesce a mettere in parole, ma solo in immagini.
          <br /><br />
          Per questo progetto ho voluto ricreare proprio quel mood:
          i colori morbidi, le sfumature rosa-viola, la calma sospesa dei paesaggi di Arcadia Bay.
          Ho cercato di trasformare ciò che Life Is Strange mi ha trasmesso — introspezione,
          tenerezza, leggerezza — in una grafica che fosse più di un semplice layout:
          una piccola emozione visiva.
          <br /><br />
          Il mio obiettivo era avvicinarmi a quel modo unico in cui il gioco racconta le storie:
          con poesia, con luce, con piccoli dettagli che fanno sentire al sicuro… anche solo per un momento.
        </p>
      </section>

      {/* ------------------------- TITOLO GALLERIA ------------------------- */}
      <h3 className="lis-graphic-gallery-title lis-graphic-fade lis-delay-3">
        Alcuni scatti del progetto
      </h3>

      {/* ------------------------- GALLERIA ------------------------- */}
      <div className="lis-graphic-gallery lis-graphic-fade lis-delay-4">
        {[1,2,3,4,5,6].map((num) => (
          <img
            key={num}
            src={`/lisgraf${num}.jpg`}
            alt={`Life Is Strange grafica ${num}`}
            onClick={() => setModalImage(`/lisgraf${num}.jpg`)}
          />
        ))}
      </div>

      {/* ------------------------- NOTA / POST-SCRIPTUM ------------------------- */}
      <div className="lis-ps-box lis-graphic-fade lis-delay-5">
        <p>
          <strong>Nota:</strong> Questo progetto è ancora in fase di lavorazione.  
          Nei prossimi aggiornamenti verranno completate tutte le sezioni, ottimizzati i dettagli grafici  
          e pubblicata la versione finale del sito su <strong>Vercel</strong>.  
          Una volta online, aggiornerò anche questa pagina del portfolio con il link ufficiale.
        </p>
      </div>

      {/* ------------------------- TORNA AI PROGETTI ------------------------- */}
      <div className="lis-book-center lis-graphic-fade lis-delay-6">
        <a href="/modern" className="lis-back-link">
          <img src="/book-index.png" className="lis-book-img" />
        </a>
      </div>

      {/* ------------------------- MODALE ------------------------- */}
      {modalImage && (
        <div
          className="lis-graphic-modal-overlay"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            className="lis-graphic-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <span
            className="lis-graphic-modal-close"
            onClick={() => setModalImage(null)}
          >
            ✖
          </span>
        </div>
      )}

    </div>
  );
}
