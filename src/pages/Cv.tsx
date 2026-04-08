import cvData from "../data/cvData.json";
import meImg from "../assets/me.png";
import { SolidButton } from "../components/buttons/SolidButton";
import "./Cv.css";

interface EducationItem {
  school: string;
  meta: string;
  description?: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  meta: string;
  description: string;
  listIntro: string;
  tasks: string[];
  summary: string;
}

interface CvData {
  education: EducationItem[];
  experience: ExperienceItem[];
}
export const Cv = () => {
  const data: CvData = cvData;

  return (
    <>
      <div className="mainContainer">
        <div className="content-wrapper">
          <div className="header-container">
            <SolidButton onClick={() => window.print()}>
              Skriv ut CV
            </SolidButton>
            <h1>Fullstack-Utvecklare</h1>
            <p>
              Snubblade in i techvärlden och fastnade – driven, nyfiken och
              alltid redo att utvecklas!
            </p>
          </div>

          <div className="two-containers-wrapper">
            <div className="left-container">
              <div className="profile-img-wrapper">
                <img src={meImg} alt="Profile photo" className="profile-img" />
              </div>

              <div className="left-container-text">
                <section>
                  <ul className="contact-list">
                    <li>
                      <a href="tel:0736407711">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span className="contact-label">073 640 77 11</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:amandaavalencia@hotmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span className="contact-label">amandaavalencia@hotmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/amandavalencia" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="contact-label">github.com/amandavalencia</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/in/amandaavalencia" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                        </svg>
                        <span className="contact-label">linkedin.com/in/amandaavalencia</span>
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3>Tekniska Kompetenser</h3>
                  <p>
                    <strong>Språk:</strong> C#, TypeScript, JavaScript, SQL
                  </p>
                  <p>
                    <strong>Ramverk &amp; Verktyg:</strong> .NET (under
                    inlärning), React, REST API:er, GitHub, Visual Studio
                  </p>
                  <p>
                    <strong>Databaser:</strong> SQL Server (grundläggande
                    förståelse)
                  </p>
                  <p>
                    <strong>Design &amp; UX:</strong> UI/UX-principer, responsiv
                    design
                  </p>
                </section>

                <section>
                  <h3>Mjuka Färdigheter</h3>
                  <p>Samarbetsförmåga, ansvarstagande, anpassningsförmåga</p>
                </section>
              </div>
            </div>

            <div className="right-container">
              <section className="info-container">
                <h3>Utbildning</h3>

                {data.education.map((item) => (
                  <article key={item.school}>
                    <h4>{item.school}</h4>
                    <p className="meta">{item.meta}</p>
                    {item.description && <p>{item.description}</p>}
                  </article>
                ))}
              </section>

              <section className="info-container">
                <h3>Yrkeserfarenhet</h3>

                {data.experience.map((job) => (
                  <article className="job-entry" key={job.company}>
                    <div className="job-header">
                      <h4>
                        {job.company} - {job.role}
                      </h4>
                    </div>

                    <div className="job-card">
                      <p className="meta">{job.meta}</p>
                      <p>{job.description}</p>
                      <p>{job.listIntro}</p>

                      <ul>
                        {job.tasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>

                      <p>{job.summary}</p>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
