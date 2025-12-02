"use client";

import { useState } from "react";

export default function HorizonMediaGraphicsPage() {

  const [modal, setModal] = useState<string | null>(null);

  return (
    <div className="hzg-page page-enter">

      {/* TITOLO */}
      <h1 className="hzg-title">Horizon Media — Progetto</h1>

      {/* STORIA */}
      <div className="hzg-story-box">
        <h2 className="hzg-story-title">Storia</h2>

        <p className="hzg-story-text">
          Horizon Media è stato un progetto che ho sviluppato con cura per Aulab, al fine di
          migliorare la struttura, la grafica e l'organizzazione di una piattaforma 
          moderna a tema giornalsmo. L’obiettivo era creare un layout pulito, professionale e
          intuitivo, mantenendo un design elegante e coerente. MySQL è il database utilizzato per la
          logica dei form e degli articoli.
        </p>
      </div>

      {/* SOTTOTITOLO */}
      <h2 className="hzg-subtitle">Alcuni scatti del progetto</h2>

      {/* GALLERIA */}
      <div className="hzg-gallery">

        {[1,2,3,4,5,6,7].map((num) => (
          <div key={num} className="hzg-img-wrapper">
            <img
              src={`/hg${num}.jpg`}
              alt={`Horizon Media screenshot ${num}`}
              className="hzg-img"
              onClick={() => setModal(`/hg${num}.jpg`)}
            />
          </div>
        ))}
        {/* PULSANTE – TORNA ALL'INDICE PROGETTI */}
<div className="hm-book">
  <a href="/codiceback" className="back-to-book-link">
    <img src="/book-index.png" className="back-to-book-img hm-book-img" />
  </a>
</div>


      </div>

      {/* MODALE IMMAGINE */}
      {modal && (
        <div className="hzg-modal" onClick={() => setModal(null)}>
          <span className="hzg-modal-close">✖</span>
          <img
            src={modal}
            className="hzg-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
