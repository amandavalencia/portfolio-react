// ── Projektlista ──────────────────────────────────────
// Lägg till, ta bort eller ändra projekt här. Ordningen i listan är
// ordningen på sidan. Projekt med `featured: true` visas stort överst.
//
// Bild: lägg en skärmdump i src/assets/, importera den här
// och sätt `image: minBild`. Utan bild visas en färgad platshållare.

import floraImg from "../../assets/Flora.webp";
import wellioImg from "../../assets/Wellio.png";
import lia4uImg from "../../assets/LIA4U.png";
import ptKarlssonImg from "../../assets/PT-Karlsson.webp";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectStatus = "klar" | "pågående" | "kommer-snart";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  image?: string;
  featured?: boolean;
  status?: ProjectStatus;
  /** Kort etikett, t.ex. "Grupprojekt" eller "Skolprojekt". */
  context?: string;
};

const GITHUB = "https://github.com/amandavalencia";

export const projects: ProjectItem[] = [
  {
    id: "flora",
    image: floraImg,
    title: "Flora",
    description:
      "En app för växtvård där man samlar sina växter, håller koll på skötsel och söker bland växtarter. Byggd i en grupp på sex personer. Jag arbetade i både frontend och backend: jag kopplade in ett externt växt-API med egna endpoints i .NET, byggde växtbiblioteket med sökning och tog fram dashboarden där man ser och bockar av skötseluppgifter.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
    ],
    links: [
      { label: "Frontend", url: `${GITHUB}/FloraFrontend` },
      { label: "Backend", url: `${GITHUB}/FloraBackend` },
    ],
    featured: true,
    context: "Grupprojekt",
  },
  {
    id: "wellio",
    image: wellioImg,
    title: "Wellio",
    description:
      "En fullstack-app för att följa sitt välmående. Användaren loggar in och registrerar aktivitet, sömn och humör, och får en översikt på en egen dashboard.",
    tech: ["React", "TypeScript", "Tailwind", "shadcn/ui", "C#", ".NET", "Entity Framework"],
    links: [
      { label: "Frontend", url: `${GITHUB}/Wellio-frontend` },
      { label: "Backend", url: `${GITHUB}/Wellio-backend` },
    ],
    status: "pågående",
  },
  {
    id: "aktivo",
    title: "Aktivo",
    description:
      "En plattform för evenemang där arrangörer skapar event och användare kan söka, spara och anmäla sig. Byggt i grupp med separat frontend och API.",
    tech: ["React", "TypeScript", "C#", ".NET", "Docker"],
    links: [{ label: "GitHub", url: `${GITHUB}/aktivo` }],
    context: "Grupprojekt",
  },
  {
    id: "lia4u",
    image: lia4uImg,
    title: "LIA4U",
    description:
      "Ett skolprojekt som hjälper studenter att söka efter yrken och hitta företag inför sin LIA (lärande i arbete).",
    tech: ["React", "TypeScript", "Designsystem Digi"],
    links: [
      { label: "Hemsida", url: "https://lia4u.netlify.app/" },
      { label: "GitHub", url: `${GITHUB}/LIA4U` },
    ],
    context: "Skolprojekt",
  },
  {
    id: "pt-karlsson",
    image: ptKarlssonImg,
    title: "PT-Karlsson",
    description:
      "En webbplats för en personlig tränare inom kampsport som erbjuder träningsprogram på nätet, med fokus på enkel innehållshantering och en smidig användarupplevelse.",
    tech: ["React", "TypeScript", "Tailwind", "Supabase"],
    links: [
      { label: "Hemsida", url: "https://pt-karlsson.netlify.app/" },
      { label: "GitHub", url: `${GITHUB}/PT-Karlsson` },
    ],
  },
  {
    // Fyll i beskrivning, teknik och länkar när projektet är pushat,
    // och ta bort `status` (eller sätt "pågående").
    id: "climb-log",
    title: "Climb Log",
    description: "Ett nytt projekt som snart dyker upp här.",
    tech: [],
    links: [],
    status: "kommer-snart",
  },
];
