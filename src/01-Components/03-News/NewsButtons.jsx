import { useState } from "react";
import NewMainContent from "./NewMainContent";
import Updates from "./Updates";
import "./News";

function NewsButtons() {
  const [news, setNews] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <div className="news-button-container">
      <div className="buttons-wraper">
        <a
          className="activeLinkButton"
          href="#news"
          onClick={() => {
            setNews(true);
            setUpdates(false);
          }}
        >
          news
        </a>

        <a
          className="activeLinkButton"
          href="#update"
          onClick={() => {
            setUpdates(true);
            setNews(false);
          }}
        >
          updates
        </a>
      </div>
      {news && <NewMainContent />}
      {updates && <Updates />}
    </div>
  );
}

export default NewsButtons;
