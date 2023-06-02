import React from "react";
import "./news.css";
import NewsHeadline from "./NewsHeadline";
import PageFooter from "../05-Footer/PageFooter";
import NewsButtons from "./NewsButtons";
import { Helmet } from "react-helmet";

function News() {
  return (
    <header className="news-header">
      <Helmet>
        <title>Dota 2 | News & Updates</title>
      </Helmet>
      <NewsHeadline />
      <NewsButtons />
      <PageFooter />
    </header>
  );
}

export default News;
