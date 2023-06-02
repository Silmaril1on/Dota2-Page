import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./01-Components/01-Navigation-Bar/NavigationBar";
import News from "./01-Components/03-News/News";
import Esports from "./01-Components/04-Esports/Esports";
import Home from "./01-Components/04-Home/Home";
import HeroesPage from "./01-Components/02-Heroes/03-HeroesPage/HeroesPage";
import Abaddon from "./01-Components/02-Heroes/01-HeroesProfile/01-Abaddon/Abaddon";
import Spectre from "./01-Components/02-Heroes/01-HeroesProfile/03-Spectre/Spectre";
import Necrophos from "./01-Components/02-Heroes/01-HeroesProfile/02-Necrophos/Necrophos";
import Medusa from "./01-Components/02-Heroes/01-HeroesProfile/04-Medusa/Medusa";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/Esports" element={<Esports />} />
        <Route path="/Heroes/abaddon" element={<Abaddon />} />
        <Route path="/Heroes/spectre" element={<Spectre />} />
        <Route path="/Heroes/necrolyte" element={<Necrophos />} />
        <Route path="/Heroes/medusa" element={<Medusa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
