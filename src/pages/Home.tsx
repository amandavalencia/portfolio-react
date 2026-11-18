import "./Home.css";
import amaNda from "../assets/Ama_nda.svg";
import bgImage from "../assets/bg-img.jpg";
import { About } from "../components/About";
import { PolaroidCollage } from "../components/PolaroidCollage";

export const Home = () => {
  return (
    <div className="mainContainer">
      <section className="home">
        <div
          className="home-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        <div className="home-content">
          <img src={amaNda} alt="Amanda" className="home-svg" />
        </div>
      </section>
      <About></About>
      <PolaroidCollage />
    </div>
  );
};
