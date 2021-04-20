import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <section className="jumbotron text-center">
      <h1 className="jumbotron-heading">Go Fund <span id="zapfino-me">Me</span></h1>
      <p className="lead text-muted">
        Help me go on a vacation to a beach somewhere
      </p>
    </section>
  );
};

export default TopBar;
