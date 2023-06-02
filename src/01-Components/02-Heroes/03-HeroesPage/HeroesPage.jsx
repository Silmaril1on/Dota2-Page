import React from "react";
import "./heroesPage.css";
import HeroesHeadline from "./HeroesHeadline";
import HeroesContainer from "./HeroesContainer";
import PageFooter from "../../05-Footer/PageFooter";
import FilterComponent from "./FilterComponent";
import { AppProvider } from "./filterContext";
import { Helmet } from "react-helmet";
import PopUp from "./PopUp";

function HeroesPage() {
  return (
    <AppProvider>
      <Helmet>
        <title>Dota 2 | Heroes Page</title>
      </Helmet>
      <section className="heroes-page-container">
        <PopUp />
        <HeroesHeadline />
        <FilterComponent />
        <HeroesContainer />
        <PageFooter />
      </section>
    </AppProvider>
  );
}

export default HeroesPage;
