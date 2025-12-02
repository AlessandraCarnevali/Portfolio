"use client";

export default function ContactPage() {
  return (
    <div className="contact-container">

      {/* Sezione sinistra */}
      <div className="contact-left">
        <h1 className="contact-title">contact</h1>
        <p className="contact-subtitle">
          Per collaborazioni, richieste tecniche, informazioni sui miei progetti o proposte di sviluppo, puoi contattarmi tramite i link qui sotto.
        Sarò felice di aiutarti o valutare nuove opportunità.           
        </p>

        <div className="contact-socials">

          {/* Gmail */}
          <a 
  href="mailto:carnevalialessandra08@gmail.com?subject=Richiesta%20informazioni&body=Ciao%20Alessandra,%0D%0A%0D%0Aho%20visitato%20il%20tuo%20portfolio%20e%20vorrei%20chiederti%20qualche%20informazione.%0D%0AQuando%20puoi,%20mi%20farebbe%20piacere%20sentirti.%0D%0AGrazie!"
  className="contact-link"
>
  <img src="/icons/gmail.png" className="contact-icon" />
  Gmail
</a>



          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/alessandra-carnevali-web/"
            target="_blank"
            className="contact-link"
          >
            <img src="/icons/linkedin.png" className="contact-icon" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/AlessandraCarnevali"
            target="_blank"
            className="contact-link"
          >
            <img src="/icons/github.png" className="contact-icon" />
            GitHub
          </a>

        </div>
      </div>

      {/* Sezione destra */}
      <div className="contact-right">
        <img src="/contact.png" alt="Contact Image" className="contact-image" />
      </div>
    </div>
  );
}
