// @ts-nocheck
"use client";
import HTMLFlipBook from "react-pageflip";
import Link from "next/link";

export default function Book() {
  return (
    <div
      key="flipbook-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <HTMLFlipBook
        width={350}
        height={500}
        showCover={true}
        className="book-flip"
      >
        {/* COVER */}
        <div className="book-page cover">
          <h1>Coding Projects</h1>
        </div>

        {/* PAGINA 1 */}
        <div className="book-page">
          <h3 className="pagina-indice">Indice</h3>
          <h2>Horizon Media</h2>
          <p>Laravel e MySQL</p>
          <Link href="/horizonmedia">Apri progetto →</Link>
        </div>

        {/* PAGINA 2 */}
        <div className="book-page">
          <h3 className="pagina-indice">Indice</h3>
          <h2>Yankee Candle</h2>
          <p>HTML,CSS,Bootstrap</p>
          <Link href="/yankeecandle">Apri progetto →</Link>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
