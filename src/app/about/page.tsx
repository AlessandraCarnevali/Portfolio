"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutPage() {
  
  // ---- HOOKS PER LE ANIMAZIONI SCROLL ----
  const aboutText = useScrollAnimation();
  const aboutPhoto = useScrollAnimation();
  const skillsBlock = useScrollAnimation();
  const randomImage = useScrollAnimation();
  const randomText = useScrollAnimation();
  const storyImage = useScrollAnimation();
  const storyText = useScrollAnimation();

  return (
    <div>

      {/* ===== BLOCCO ABOUT ===== */}
      <div className="about-container">

        {/* TESTO ABOUT */}
        <div
          ref={aboutText.ref}
          className={`about-text ${
            aboutText.isVisible ? "fade-in" : "hidden-before"
          }`}
        >
          <h1>
            About <span className="dot"></span>
          </h1>
          <p>
            Sono Alessandra, una sviluppatrice appassionata di frontend,
            design e intelligenza artificiale. Il mio percorso unisce
            tecnica e creatività per creare esperienze digitali moderne
            e coinvolgenti.
          </p>
        </div>

        {/* FOTO ABOUT */}
        <div
          ref={aboutPhoto.ref}
          className={`about-photo ${
            aboutPhoto.isVisible ? "slide-in-right" : "hidden-before"
          }`}
        >
          <img src="/about-photo.jpg" alt="Alessandra photo" className="photo" />
        </div>

      </div>

      {/* ===== LINEA DI SEPARAZIONE ===== */}
      <div className="about-divider"></div>

      {/* ======== GRAFICO DESIGNER / CODER ======== */}
      <div
        ref={skillsBlock.ref}
        className={`skills-chart-container ${
          skillsBlock.isVisible ? "fade-in" : "hidden-before"
        }`}
      >
        <div className="skills-column">
          <h2>Part designer</h2>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>ReactJS</li>
            <li>Next.Js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>

        <div className="pie-chart">
          <div className="designer">Designer</div>
          <div className="coder">Coder</div>
        </div>

        <div className="skills-column">
          <h2>Part coder</h2>
          <ul>
            <li>Node.Js</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Laravel</li>
            <li>Coding AI</li>
            <li>MySQL</li>
            <li>Prisma ORM</li>
          </ul>
        </div>
      </div>

      {/* ======== RANDOM FACTS SECTION ======== */}
      <div className="random-container">

        {/* IMMAGINE SINISTRA */}
        <div
          ref={randomImage.ref}
          className={`random-image ${
            randomImage.isVisible ? "slide-in-left" : "hidden-before"
          }`}
        >
          <img src="/caratteristiche.png" alt="Random facts image" />
        </div>

        {/* TESTO RANDOM FACTS */}
        <div
          ref={randomText.ref}
          className={`random-text ${
            randomText.isVisible ? "fade-in" : "hidden-before"
          }`}
        >
          <h2>Random facts</h2>
          <ul>
            <li>Sono emotiva ma con un cuore che impara sempre a ricomporre i pezzi.</li>
            <li>Il codice è il mio modo preferito di creare ordine nel caos.</li>
            <li>Life is Strange è la mia comfort zone narrativa.</li>
            <li>Piango sugli errori poi vinco contro gli errori.</li>
            <li>Yoda no, ma Rachel Amber potrebbe essere la mia mentore interiore.</li>
            <li>Il mio superpotere è emozionarmi anche davanti a un foglio CSS.</li>
          </ul>
        </div>

      </div>

      {/* ===== LINEA ELEGANTE TRA FACTS E STORY ===== */}
      <div className="section-divider"></div>

      {/* ======== MY STORY SECTION ======== */}
      <div className="story-container">

        {/* IMMAGINE */}
        <div
          ref={storyImage.ref}
          className={`story-image ${
            storyImage.isVisible ? "slide-in-left" : "hidden-before"
          }`}
        >
          <img src="/story.png" alt="My workspace story" />
        </div>

        {/* TESTO */}
        <div
          ref={storyText.ref}
          className={`story-text ${
            storyText.isVisible ? "fade-in" : "hidden-before"
          }`}
        >
          <h2>My story</h2>
          <p>
            La mia strada nello sviluppo frontend è iniziata in modo semplice:
            con la curiosità di capire come qualcosa prende vita sullo schermo.
            Non arrivo da un percorso lineare, ma da una serie di scelte coraggiose,
            cadute, ripartenze ed emozioni che mi hanno insegnato a trasformare il caos
            in ordine — una riga di codice alla volta.
            <br /><br />
            Ho scoperto che il frontend è il mio modo naturale di unire logica e sensibilità:
            mi permette di creare, progettare e raccontare. Attraverso React, Next.js e il design,
            ho trovato un linguaggio che mi assomiglia: preciso, emotivo, creativo e in
            continua evoluzione.
            <br /><br />
            Questo portfolio è il mio modo di mostrarti chi sono, dove sto andando,
            e quanta passione metto in ciò che costruisco.
          </p>
        </div>

      </div>

      {/* ======== BACK TO TOP BUTTON ======== */}
      <div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span>↑</span>
      </div>

    </div>
  );
}
