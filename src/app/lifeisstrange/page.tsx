"use client";
import { useState, useEffect } from "react";

export default function LifeIsStrangeCodePage() {

  /* --------------------------- ANIMAZIONE ENTRATA --------------------------- */
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const sections = document.querySelectorAll(".fade-appear");

    sections.forEach((el, i) => {
      const timer = setTimeout(() => {
        el.classList.add("visible");
      }, 300 + i * 200);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);


  /* --------------------------- SLIDER HTML --------------------------- */
  const slidesHTML = [
    { img: "/liscod1.jpg", title: "Pagina Rachel: struttura narrativa e sezioni animate", text: "Ho realizzato la pagina dedicata a Rachel Amber suddividendo il contenuto in sezioni tematiche (“Storia”, “Chi era Rachel?”) e applicando effetti di comparsa tramite classi scroll-reveal. Ho organizzato testo e immagini in blocchi ordinati, creando una narrativa scorrevole e leggibile." },
    { img: "/liscod2.jpg", title: "Pagina Login: layout animato con stile Life Is Strange", text: "Ho costruito la pagina di accesso usando posizionamenti assoluti, animazioni fadeIn e un design semitrasparente ispirato all’estetica del gioco. Il titolo appare con dissolvenza dall’alto, mentre il form rimane centrato e pulito." },
    { img: "/liscod3.jpg", title: "Registrazione utente con salvataggio e login automatico", text: "Ho implementato un form che invia i dati al backend tramite una richiesta POST a /api/apreg. Dopo aver salvato il nuovo utente nel database, viene eseguito automaticamente il login tramite signIn(), e si attiva anche un modale grafico (la farfalla)." },
    { img: "/liscod4.jpg", title: "Modello Prisma per la gestione utenti", text: "Ho definito il modello users in Prisma, includendo nome, cognome, età, email univoca, password e un flag booleano per sapere se l’utente ha completato il test. Ho collegato l’applicazione a un database MySQL tramite variabile d’ambiente." },
    { img: "/liscod5.jpg", title: "Struttura del test: domande, immagini e scelte dei personaggi", text: "Ho creato una struttura dati che contiene tutte le domande del test, ciascuna con immagine, testo e risposte multiple. Ogni risposta assegna un personaggio specifico, permettendo di calcolare il profilo finale dell’utente." }
  ];

  const [indexHTML, setIndexHTML] = useState(0);
  const [transitionHTML, setTransitionHTML] = useState(false);

  const nextHTML = () => {
    setTransitionHTML(true);
    setTimeout(() => {
      setIndexHTML((i) => (i + 1) % slidesHTML.length);
      setTransitionHTML(false);
    }, 300);
  };

  const prevHTML = () => {
    setTransitionHTML(true);
    setTimeout(() => {
      setIndexHTML((i) => (i - 1 + slidesHTML.length) % slidesHTML.length);
      setTransitionHTML(false);
    }, 300);
  };


  /* --------------------------- SLIDER CSS --------------------------- */
  const slidesCSS = [
    { img: "/liscod6.jpg", title: "Navbar acquerello con blur e animazioni", text: "Ho progettato una navbar fissa con un effetto acquerello, sfocatura tramite backdrop-filter, gradiente colorato e animazione di discesa. La barra di navigazione risulta elegante, moderna e in linea con lo stile artistico di Life Is Strange." },
    { img: "/liscod7.jpg", title: "Pagina personaggio: titolo scenografico e immagine hero", text: "Ho definito gli stili della pagina personaggio, includendo un titolo grande con text-shadow, un’immagine centrale con ombra e bordi arrotondati e sezioni biografiche con layout flessibile. Lo sfondo è un gradiente caldo che richiama i colori della fotografia del gioco." },
    { img: "/liscod8.jpg", title: "Stili globali: font personalizzato, sfondo dinamico e animazioni", text: "Ho configurato gli stili globali dell’app inserendo un font personalizzato, un’immagine di sfondo a schermo intero, variabili CSS per i colori di tema e animazioni come fadeUp. Questo file definisce l’aspetto visivo generale dell’intero progetto." },
  ];

  const [indexCSS, setIndexCSS] = useState(0);
  const [transitionCSS, setTransitionCSS] = useState(false);

  const nextCSS = () => {
    setTransitionCSS(true);
    setTimeout(() => {
      setIndexCSS((i) => (i + 1) % slidesCSS.length);
      setTransitionCSS(false);
    }, 300);
  };

  const prevCSS = () => {
    setTransitionCSS(true);
    setTimeout(() => {
      setIndexCSS((i) => (i - 1 + slidesCSS.length) % slidesCSS.length);
      setTransitionCSS(false);
    }, 300);
  };


  /* --------------------------- MODALE --------------------------- */
  const [modalImage, setModalImage] = useState<string | null>(null);



  return (
    <div className="lis-page page-enter">

      {/* TITOLI */}
      <h1 className="lis-title fade-appear">Life Is Strange — Codice del Progetto</h1>
      <h2 className="lis-section fade-appear">Sezione HTML</h2>


      {/* --------------------------- SLIDER HTML --------------------------- */}
      <div className="lis-slider-container fade-appear">

        <div className="lis-slider-image">
          {slidesHTML.map((slide, i) => {
            let className = "lis-slide-img-html";

            // FIX: nascondi immagini non attive
            if (i !== indexHTML) className += " lis-slide-hidden";

            if (i === indexHTML && !transitionHTML) className += " slide-transition-in";
            if (i === indexHTML && transitionHTML) className += " slide-transition-out";

            return (
              <img
                key={i}
                src={slide.img}
                alt="HTML code"
                className={`${className} clickable-img`}
                onClick={() => setModalImage(slide.img)}
              />
            );
          })}
        </div>

        <div className="lis-slider-text">
          <h2>{slidesHTML[indexHTML].title}</h2>
          <p>{slidesHTML[indexHTML].text}</p>

          <div className="lis-buttons">
            <button onClick={prevHTML}>◀ Previous</button>
            <button onClick={nextHTML}>Next ▶</button>
          </div>
        </div>
      </div>


      {/* DIVIDER */}
      <div className="lis-divider"></div>


      {/* --------------------------- SEZIONE CSS --------------------------- */}
      <h2 className="lis-section fade-appear">Sezione CSS</h2>

      <div className="lis-slider-container fade-appear">

        <div className="lis-slider-image">
          {slidesCSS.map((slide, i) => {
            let className = "lis-slide-img-css";

            // FIX: nascondi immagini non attive
            if (i !== indexCSS) className += " lis-slide-hidden";

            if (i === indexCSS && !transitionCSS) className += " slide-transition-in";
            if (i === indexCSS && transitionCSS) className += " slide-transition-out";

            return (
              <img
                key={i}
                src={slide.img}
                alt="CSS code"
                className={`${className} clickable-img`}
                onClick={() => setModalImage(slide.img)}
              />
            );
          })}
        </div>

        <div className="lis-slider-text">
          <h2>{slidesCSS[indexCSS].title}</h2>
          <p>{slidesCSS[indexCSS].text}</p>

          <div className="lis-buttons">
            <button onClick={prevCSS}>◀ Previous</button>
            <button onClick={nextCSS}>Next ▶</button>
          </div>
        </div>
      </div>


      {/* PULSANTE LATO GRAFICO */}
      <div className="lis-go-to-graphics fade-appear">
        <a href="/portfolio/life-is-strange" className="lis-go-btn">
          Passa al lato grafico →
        </a>
      </div>


      {/* --------------------------- MODALE --------------------------- */}
      {modalImage && (
        <div className="lis-img-modal" onClick={() => setModalImage(null)}>
          <span className="lis-close-modal">✖</span>
          <img
            src={modalImage}
            className="lis-img-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
