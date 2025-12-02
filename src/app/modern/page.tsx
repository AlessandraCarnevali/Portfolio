// @ts-nocheck
import Book from "./Book";

export default function CodiceBack() {
  return (
    <div className="codeback-container fade-page">
      <h1 className="codeback-title">Sfoglia i miei progetti lato codice</h1>

      <div className="codiceback-book">
        <Book />
      </div>
    </div>
  );
}
