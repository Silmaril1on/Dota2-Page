import React from "react";
import latestNewsData from "./HomeData";
import "./Home";

function LatestNews() {
  const [news] = React.useState(latestNewsData);
  return (
    <section className="latest-news">
      <div className="section-center">
        <h3>
          latest news
          <a href="#">view all</a>
        </h3>
        <main className="news-content">
          {news.slice(0, 3).map((content) => {
            return <NewsContent key={content.id} {...content} />;
          })}
        </main>
      </div>
    </section>
  );
}

function NewsContent({ image, data, info, title }) {
  return (
    <div className="news-content-container">
      <div className="content-image">
        <img src={image} alt={title} />
      </div>
      <div className="content-info">
        <h3>{data}</h3>
        <h1>{title}</h1>
        <h4>{info}</h4>
      </div>
    </div>
  );
}

export default LatestNews;
