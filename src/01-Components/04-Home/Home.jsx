import { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundVideo from "./BackgroundVideo";
import LatestNews from "./LatestNews";
import Heroes from "./01-Heroes/Heroes";
import SteamButton from "./SteamButton";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section className="homePage">
      <Helmet>
        <title>Dota 2 | Home Page</title>
      </Helmet>
      <BackgroundVideo />
      <MidTitle />
      <LatestNews />
      <Heroes />
    </section>
  );
}

function MidTitle() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="400"
      className="title"
    >
      <h1>"a modern multiplayer masterpeace."</h1>
      <h5>- destructoid</h5>
      <SteamButton />
    </div>
  );
}

export default Home;
