"use client";

import { useEffect, useState } from "react";
 // 👉 IMPORT AGGIUNTO

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Attiva l'animazione dopo un brevissimo delay
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    

      <main className={`hero-container ${animate ? "animate" : ""}`}>
        <div
          className="hero-section left"
          onClick={() => (window.location.href = "/codiceback")}
        >
          <h1>Frontend Basics, Laravel & DataBase</h1>
          <p>Dal tecnico</p>
        </div>

        <div
          className="hero-section right"
          onClick={() => (window.location.href = "/modern")}
        >
          <h1>React, Next.js, TypeScript</h1>
          <p>Al creativo</p>
        </div>
      </main>
    </>
  );
}
