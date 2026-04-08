import aboutImg from "../assets/about-me-img.png";
import "./About.css";

export const About = () => {
  return (
    <div id="about">
      <section className="home-hero">
        <div className="home-text">
          <h1>Hej!</h1>
          <p>
            Jag heter <i>Amanda</i>
          </p>
          <p>Välkomna till min sida!</p>
          <div className="border-top">
            <p>
              Jag är en fullstackutvecklare med ett särskilt intresse för det
              som händer bakom kulisserna. Jag drivs av att förstå hur saker
              hänger ihop — från databas till användargränssnitt — och trivs
              bäst när jag får bryta ner komplexa problem till tydliga,
              hållbara lösningar.
            </p>
          </div>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="Profile photo" className="about-profile-img" />
        </div>
      </section>
    </div>
  );
};
