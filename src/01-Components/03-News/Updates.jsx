import React from "react";
import updateData from "./UpdatesData";

function Updates() {
  const [updateList] = React.useState(updateData);

  return (
    <section className="news-list-container">
      <main className="updates-container">
        {updateList.map((list) => {
          const {
            updateData,
            updatePatch,
            updateHeader,
            updateDesc,
            updatedList,
          } = list;
          return (
            <div className="list-container" key={list.id}>
              <h4>{updateData}</h4>
              <h1>{updatePatch}</h1>
              <h3>{updateHeader}</h3>
              <h3>{updateDesc}</h3>
              {updatedList.map((list, index) => {
                return (
                  <ul key={index}>
                    <li>{list.name}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default Updates;
