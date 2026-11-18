import { useState } from "react";
import "./PolaroidCollage.css";
import runningImg from "../assets/runningImg .JPEG?url";
import climbingImg from "../assets/boulderingImg.jpg";
import natureImg from "../assets/natureImg.JPEG?url";
import booksImg from "../assets/readingImg.JPEG?url";
import smokeyImg from "../assets/smokeyImg .JPEG?url";

const moments = [
  {
    id: "running",
    caption: "Halvmaraton",
    image: runningImg,
    text: "Jag gillar att utmana mig själv och sprang nyligen mitt första halvmaraton tillsammans med min pappa.",
  },
  {
    id: "climbing",
    caption: "Klättring",
    image: climbingImg,
    text: "En ganska ny hobby som jag snabbt fastnat för! Har nyligen också tagit grönt kort i topprepsklättring.",
  },
  {
    id: "nature",
    caption: "Ute i naturen",
    image: natureImg,
    text: "Trivs som bäst ute i naturen, gärna på något äventyr med min sambo och vår hund.",
  },
  {
    id: "books",
    caption: "Böcker",
    image: booksImg,
    text: "En läsplatta, en kopp kaffe och en lugn stund på balkongen är svårslaget!",
  },
  {
    id: "smokey",
    caption: "Smokey",
    image: smokeyImg,
    text: "Min fyrbenta äventyrskompis som gärna följer med på allt",
  },
];

export const PolaroidCollage = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="outside-code" aria-labelledby="outside-code-heading">
      <div className="outside-code__glass">
        <h2 id="outside-code-heading">Jag utanför kodandet</h2>
        <p className="outside-code__hint">
          Hovra eller tryck på en bild för att läsa mer.
        </p>
        <div className="polaroid-collage">
          {moments.map((moment) => (
            <button
              key={moment.id}
              type="button"
              className={`polaroid polaroid--${moment.id}`}
              data-open={activeId === moment.id}
              aria-pressed={activeId === moment.id}
              aria-describedby={`moment-${moment.id}`}
              onClick={() =>
                setActiveId(activeId === moment.id ? null : moment.id)
              }
              onKeyDown={(event) => {
                if (event.key === "Escape") setActiveId(null);
              }}
            >
              <span className="polaroid__photo">
                <img
                  className="polaroid__image"
                  src={moment.image}
                  alt=""
                  loading="lazy"
                />
                <span className="polaroid__detail" id={`moment-${moment.id}`}>
                  {moment.text}
                </span>
              </span>
              <span className="polaroid__caption">{moment.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
