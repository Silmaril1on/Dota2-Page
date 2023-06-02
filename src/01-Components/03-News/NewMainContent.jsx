import React from "react";
import latestNewsData from "../../01-Components/04-Home/HomeData";
import "./News";

function NewMainContent() {
  const [lists] = React.useState(latestNewsData);

  return (
    <section className="news-list-container">
      <div className="news-section-wraper">
        {lists.map((list) => {
          return <NewsListSection key={list.id} {...list} />;
        })}
      </div>
    </section>
  );
}

function NewsListSection({ image, data, info, title }) {
  return (
    <div className="news-list-content">
      <div className="news-content-image">
        <img src={image} alt={title} />
      </div>
      <div className="news-content-info">
        <h3>{data}</h3>
        <h1>{title}</h1>
        <h4>{info}</h4>
      </div>
    </div>
  );
}

export default NewMainContent;
