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
        {/* 🌟 COVER REACT / LIFE IS STRANGE */}
        <div className="book-page react-cover">
          <img
            src="/react-cover.jpg"
            alt="React Cover"
            className="react-cover-img"
          />
        </div>

        {/* ⭐ PAGINA 1 – LIFE IS STRANGE */}
        <div className="book-page">
          <h3 className="pagina-indice">Indice</h3>

          <h2>Life Is Strange</h2>
          <p>React, Next.js, TypeScript & Design</p>

          <Link href="/lifeisstrange">
            Apri progetto →
          </Link>
        </div>

      </HTMLFlipBook>
    </div>
  );
}
