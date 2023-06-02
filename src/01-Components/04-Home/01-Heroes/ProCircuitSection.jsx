import { useEffect } from "react";
import "../Home";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../00-Assets/dpc_ti9_3.jpg";
import img2 from "../../../00-Assets/dpc_ti9_1.jpg";
import img3 from "../../../00-Assets/dpc_ti9_2.jpg";
const tiLogo =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg";

function ProCircuitSection() {
  return (
    <section className="ProCircuit-Container">
      <ImagesSection />
      <CircuitContent />
    </section>
  );
}

function CircuitContent() {
  return (
    <article className="circuit-content">
      <img src={tiLogo} alt="logo-ti" />
      <h3>the</h3>
      <h1>dota pro circuit</h1>
      <p>
        When not climbing the ranks, you'll be able to learn from the best. The
        Dota Pro Circuit features ultra-high-level Dota 2 competition streaming
        regularly in the game client, on Twitch and Steam.TV. Culminating in the
        largest e-sports championship in the world, The International,
        professional Dota 2 is an event not to be missed.
      </p>
    </article>
  );
}

function ImagesSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="ti-images">
      <img
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        src={img1}
        alt=""
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        src={img2}
        alt=""
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        src={img3}
        alt=""
      />
    </div>
  );
}

export default ProCircuitSection;
