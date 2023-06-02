import React from "react";

function HeroRoles() {
  return (
    <div className="HR-main-container">
      <Section1 />
      <Section2 />
      <Section3 />
      <h2>roles</h2>
    </div>
  );
}

function Section1() {
  return (
    <div className="section1">
      <h1>
        carry
        <div>
          <div></div>
        </div>
      </h1>
      <h1>
        support
        <div>
          <div></div>
        </div>
      </h1>
      <h1>
        nuker
        <div>
          <div></div>
        </div>
      </h1>
    </div>
  );
}

function Section2() {
  return (
    <div className="section2">
      <h1>
        disabler
        <div>
          <div></div>
        </div>
      </h1>
      <h1>
        jungler
        <div>
          <div></div>
        </div>
      </h1>
      <h1>
        durable
        <div>
          <div></div>
        </div>
      </h1>
    </div>
  );
}

function Section3() {
  return (
    <div className="section3">
      <h1>
        escape
        <div>
          <div></div>
        </div>
      </h1>
      <h1>
        pusher
        <div>
          <div></div>
        </div>
      </h1>
      <h1>
        initiator
        <div>
          <div></div>
        </div>
      </h1>
    </div>
  );
}

export default HeroRoles;
