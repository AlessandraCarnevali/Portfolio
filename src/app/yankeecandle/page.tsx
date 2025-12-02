"use client";
import { useState, useEffect } from "react";

export default function YankeeCandlePage() {

  /* ------------------------------ ANIMAZIONE SEZIONI ------------------------------ */
  useEffect(() => {
    const timers: any[] = [];
    const sections = document.querySelectorAll(".fade-appear");

    sections.forEach((el, i) => {
      const timer = setTimeout(() => {
        el.classList.add("visible");
      }, 300 + i * 200);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  /* SLIDER HTML */
  const slidesHTML = [
    { img: "foto1.jpg", title: "Inizio Progetto", text: "Impostazione della struttura HTML e collegamento iniziale dei file CSS e Bootstrap." },
    { img: "foto2.jpg", title: "Navbar personalizzata", text: "Costruzione della navbar con classi Bootstrap e prime personalizzazioni tramite CSS." },
    { img: "foto3.jpg", title: "Header grafico", text: "Inserimento dell'immagine di copertina e applicazione di effetti come blur e bordi." },
    { img: "foto4.jpg", title: "Sezione Speciali", text: "Creazione della sezione prodotti speciali con layout responsive e immagini." }
  ];

  const [indexHTML, setIndexHTML] = useState(0);
  const [transitionHTML, setTransitionHTML] = useState(false);

  /* SLIDER CSS */
  const slidesCSS = [
    { img: "fotocss1.jpg", title: "Impostazione Navbar e variabili", text: "Inizio del file CSS: definizione delle variabili, colori e stile della navbar." },
    { img: "fotocss2.jpg", title: "Header grafico e bordi", text: "Applicazione dell'immagine di sfondo, blur e bordi decorativi nell'header." },
    { img: "fotocss3.jpg", title: "Sezione Speciali", text: "Stile delle cards speciali, immagini di sfondo e struttura responsive." }
  ];

  const [indexCSS, setIndexCSS] = useState(0);
  const [transitionCSS, setTransitionCSS] = useState(false);

  /* MODALE */
  const [modalImage, setModalImage] = useState<string | null>(null);

  /* FUNZIONI HTML */
  const nextHTML = () => {
    setTransitionHTML(true);
    setTimeout(() => {
      setIndexHTML((p) => (p + 1) % slidesHTML.length);
      setTransitionHTML(false);
    }, 300);
  };

  const prevHTML = () => {
    setTransitionHTML(true);
    setTimeout(() => {
      setIndexHTML((p) => (p - 1 + slidesHTML.length) % slidesHTML.length);
      setTransitionHTML(false);
    }, 300);
  };

  /* FUNZIONI CSS */
  const nextCSS = () => {
    setTransitionCSS(true);
    setTimeout(() => {
      setIndexCSS((p) => (p + 1) % slidesCSS.length);
      setTransitionCSS(false);
    }, 300);
  };

  const prevCSS = () => {
    setTransitionCSS(true);
    setTimeout(() => {
      setIndexCSS((p) => (p - 1 + slidesCSS.length) % slidesCSS.length);
      setTransitionCSS(false);
    }, 300);
  };

  return (
    <div className="yankee-page page-enter">

      {/* TITOLO */}
      <h1 className="yankee-title fade-appear delay-1">Yankee Candle — Codice del Progetto</h1>
      <h2 className="yankee-section fade-appear delay-2">Sezione HTML</h2>

      {/* SLIDER HTML */}
      <div className="slider-container fade-appear delay-3">
        <div className="slider-image">
          {slidesHTML.map((slide, i) => {

            let className = "slide-img-html";
            if (i === indexHTML && !transitionHTML) className += " slide-transition-in";
            if (i === indexHTML && transitionHTML) className += " slide-transition-out";

            return (
              <img
                key={i}
                src={slide.img}
                alt="codice"
                className={`${className} clickable-img`}
                onClick={() => setModalImage(slide.img)}
              />
            );
          })}
        </div>

        <div className="slider-text">
          <h2>{slidesHTML[indexHTML].title}</h2>
          <p>{slidesHTML[indexHTML].text}</p>

          <div className="slider-buttons">
            <button onClick={prevHTML}>◀ Previous</button>
            <button onClick={nextHTML}>Next ▶</button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="section-divider-yankee fade-appear delay-4"></div>

      {/* SEZIONE CSS */}
      <h2 className="yankee-section fade-appear delay-1">Sezione CSS</h2>

      <div className="slider-container fade-appear delay-2">
        <div className="slider-image">
          {slidesCSS.map((slide, i) => {

            let className = "slide-img-css";
            if (i === indexCSS && !transitionCSS) className += " slide-transition-in";
            if (i === indexCSS && transitionCSS) className += " slide-transition-out";

            return (
              <img
                key={i}
                src={slide.img}
                alt="Codice CSS"
                className={`${className} clickable-img`}
                onClick={() => setModalImage(slide.img)}
              />
            );
          })}
        </div>

        <div className="slider-text">
          <h2>{slidesCSS[indexCSS].title}</h2>
          <p>{slidesCSS[indexCSS].text}</p>

          <div className="slider-buttons">
            <button onClick={prevCSS}>◀ Previous</button>
            <button onClick={nextCSS}>Next ▶</button>
          </div>
        </div>
      </div>

      {/* ⭐⭐⭐ PULSANTE PER PASSARE AL LATO GRAFICO ⭐⭐⭐ */}
      <div className="go-to-graphics-container fade-appear delay-3">
  <a href="/portfolio/yankee-candle" className="go-to-graphics-btn">
    Passa al lato grafico →
  </a>
</div>


      {/* MODALE */}
      {modalImage && (
        <div className="img-modal" onClick={() => setModalImage(null)}>
          <span className="close-modal">✖</span>
          <img
            src={modalImage}
            className="img-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
