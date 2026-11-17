import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import cvUrl from "../assets/Amanda Valencia CV-26-09-24.pdf";
import "./Cv.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export const Cv = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mainContainer">
      <div className="cv-page">
        <header className="cv-header">
          <h1>Mitt CV</h1>
          <div className="cv-actions">
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">
              Öppna PDF i ny flik
            </a>
            <a href={cvUrl} download="Amanda-Valencia-CV.pdf">
              Ladda ner CV
            </a>
          </div>
        </header>
        <div ref={containerRef} className="cv-document" aria-label="Amanda Valencias CV">
          <Document
            file={cvUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p role="status">Laddar CV…</p>}
            error={
              <p role="alert">
                CV:t kunde inte visas. <a href={cvUrl}>Öppna PDF-filen</a> istället.
              </p>
            }
          >
            {width > 0 && Array.from({ length: numPages }, (_, index) => (
              <Page
                key={index + 1}
                pageNumber={index + 1}
                width={width}
                loading={<p role="status">Laddar sida {index + 1}…</p>}
                error={<p role="alert">Sidan kunde inte visas. <a href={cvUrl}>Öppna PDF-filen</a>.</p>}
              />
            ))}
          </Document>
        </div>
      </div>
    </main>
  );
};
