"use client";

import { useState, useEffect } from "react";

export default function HorizonMediaCodePage() {

  /* ANIMAZIONE SEZIONI */
  useEffect(() => {
    const timers: any[] = [];
    const sections = document.querySelectorAll(".hzfade");

    sections.forEach((el, i) => {
      const timer = setTimeout(() => {
        el.classList.add("hzshow");
      }, 300 + i * 200);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  /* SLIDER HTML */
  const slides = [
    { img: "/horizon1.jpg", title: "Struttura iniziale del progetto", text: "Creazione del layout base e del menu" },
    { img: "/horizon2.jpg", title: "Navbar e collegamenti", text: "Implementazione della navbar e struttura del contenuto" },
    { img: "/horizon3.jpg", title: "Sezione Login", text: "Impostazione della sezione login con username, email e password" },
    { img: "/horizon4.jpg", title: "Struttura social", text: "Creazione dei blocchi social e della sezione e dell'app mobile" },
    { img: "/horizon5.jpg", title: "Sezione Careers", text: "Pagina dedicata alle candidature" }
  ];

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      setAnimating(false);
    }, 350);
  };

  const prev = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 350);
  };

  /* MODALE */
  const [modal, setModal] = useState<string | null>(null);


  /* ---------------- SEZIONE CSS ---------------- */

  const slidesCSS = [
    { img: "/horizon6.jpg", title: "Navbar in CSS", text: "Grafica della Navbar" },
    { img: "/horizon7.jpg", title: "Stile area Login/Register", text: "Impostazione del form utenti e gestione degli input" },
    { img: "/horizon8.jpg", title: "Gestione bottoni e variabili", text: "Personalizzazione dei pulsanti e variabili di stile globali" }
  ];

  const [cssIndex, setCssIndex] = useState(0);
  const [cssAnim, setCssAnim] = useState(false);

  const nextCSS = () => {
    setCssAnim(true);
    setTimeout(() => {
      setCssIndex((i) => (i + 1) % slidesCSS.length);
      setCssAnim(false);
    }, 350);
  };

  const prevCSS = () => {
    setCssAnim(true);
    setTimeout(() => {
      setCssIndex((i) => (i - 1 + slidesCSS.length) % slidesCSS.length);
      setCssAnim(false);
    }, 350);
  };

  return (
    <div className="horizon-page page-enter">

      {/* ---------------- SEZIONE HTML ---------------- */}

      <h1 className="horizon-title hzfade">Horizon Media — Codice del Progetto</h1>
      <h2 className="horizon-section hzfade">Sezione HTML</h2>

      <div className="cardfx-container hzfade">

        <div className="cardfx-imgbox">
          <img
            key={index}
            src={slides[index].img}
            alt={slides[index].title}
            className={`cardfx-img ${animating ? "cardfx-out" : "cardfx-in"}`}
            onClick={() => setModal(slides[index].img)}
          />
        </div>

        <div className="cardfx-text">
          <h2>{slides[index].title}</h2>
          <p>{slides[index].text}</p>

          <div className="cardfx-buttons">
            <button onClick={prev}>◀ Previous</button>
            <button onClick={next}>Next ▶</button>
          </div>
        </div>
      </div>

      {/* ------------------- DIVISORE ------------------- */}

      <div className="hz-divider hzfade"></div>

      {/* ---------------- SEZIONE CSS ---------------- */}

      <h2 className="horizon-section hzfade">Sezione CSS</h2>

      <div className="cssfx-container hzfade">

        <div className="cssfx-imgbox">
          <img
            key={cssIndex}
            src={slidesCSS[cssIndex].img}
            alt={slidesCSS[cssIndex].title}
            className={`cssfx-img ${cssAnim ? "cssfx-out" : "cssfx-in"}`}
            onClick={() => setModal(slidesCSS[cssIndex].img)}
          />
        </div>

        <div className="cssfx-text">
          <h2>{slidesCSS[cssIndex].title}</h2>
          <p>{slidesCSS[cssIndex].text}</p>

          <div className="cssfx-buttons">
            <button onClick={prevCSS}>◀ Previous</button>
            <button onClick={nextCSS}>Next ▶</button>
          </div>
        </div>
      </div>

      {/* ---------------- PULSANTE FINALE ---------------- */}

     <div className="hz-go-container hzfade">
  <a href="/portfolio/horizon-media" className="hz-go-btn">
    Passa al lato grafico →
  </a>
</div>



      {/* ------------------- MODALE ------------------- */}
      {modal && (
        <div className="img-modal" onClick={() => setModal(null)}>
          <span className="close-modal">✖</span>
          <img
            src={modal}
            className="img-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
