import React from "react";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  const projectName = "My Awesome Project";

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">{projectName}</h1>
      <p className="portfolio-description">
        Welcome to my portfolio! This page showcases the projects I have worked
        on, including web applications, design work, and more.
      </p>
    </div>
  );
};

export default Portfolio;
