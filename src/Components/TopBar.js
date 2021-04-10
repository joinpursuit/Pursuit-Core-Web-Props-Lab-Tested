import React from "react";
import "./styles/TopBar.css";

const TopBar = () => {
  return (
    <section className="jumbotron text-center">
      <h1>
        <span className="jumbotron-heading">Go Fund</span>
        <span className="Me"> Me</span>
      </h1>
      <p className="lead text-muted">
        Help me go on a vacation to a beach somewhere
      </p>
    </section>
  );
};

export default TopBar;
