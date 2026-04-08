import { useEffect, useState } from "react";
import "./Project.css";
import { OutlineButton } from "../buttons/OutlineButton";
import { Loader } from "../Loader/Loader";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  topics?: string[];
};

export const Project = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState<number | null>(null);
  console.log("repos", repos);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/amandavalencia/repos",
        );

        if (!res.ok) {
          throw new Error("Kunde inte hämta repositories");
        }

        const data: Repo[] = await res.json();

        const filtered = data
          .filter((repo) => !repo.name.includes("test") && repo.homepage)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filtered);
      } catch {
        setError("Något gick fel när projekten hämtades.");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="projects-section">
        <h1>Mina projekt</h1>
        <p className="section-sub">Ett urval av saker jag har byggt.</p>

        <div className="projects-grid">
          {repos.map((repo) => (
            <article key={repo.id} className="project-card">
              <div className="project-card-body">
                <h3>{repo.name}</h3>
                <p>{repo.description ?? "Ingen beskrivning än."}</p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="project-tags">
                    {repo.topics.map((topic) => (
                      <span key={topic} className="tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <OutlineButton onClick={() => setOpenModal(repo.id)}>
                  Läs mer
                </OutlineButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {repos.map((repo) => (
        <div
          key={repo.id}
          className={`modal-overlay ${openModal === repo.id ? "open" : ""}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenModal(null);
          }}
        >
          <div className="modal-card">
            <button
              className="modal-close"
              aria-label="Stäng"
              onClick={() => setOpenModal(null)}
            >
              &times;
            </button>
            <h2>{repo.name}</h2>
            <p>{repo.description ?? "Ingen beskrivning än."}</p>

            {repo.topics && repo.topics.length > 0 && (
              <div className="project-tags">
                {repo.topics.map((topic) => (
                  <span key={topic} className="tag">
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="modal-links">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  Hemsida
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
