import React, { useState } from "react";
import "./FeatureSection.css";

export default function Features() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  return (
    <div className="features-container">
      <div className="feature-card">
        <span style={{ color: "#D3D3D3" ,paddingLeft:"0px"}}>GOOGLE SEARCH</span><br />
        <b>The search bar you love,built right in.</b>
        <img
          src={
            firstOpen
              ? "https://www.google.com/chrome/static/images/v2/gallery/search-back.webp"
              : "https://www.google.com/chrome/static/images/v2/gallery/search-front_desktop-2x.webp"
          }
          alt="Search"
          className="card-image"
        />
        <button
          className="toggle-btn"
          onClick={() => setFirstOpen(!firstOpen)}
        >
          {firstOpen ? "✕" : "+"}
          
        </button>
      </div>

      <div className="feature-cards">
         <span style={{ color: "gray" ,paddingLeft:"0px"}}>GOOGLE WORKSPACE</span><br />
        <b>Get things done, with or without Wi-Fi.</b>
        
        <img
          src={
            secondOpen
              ? "https://www.google.com/chrome/static/images/v2/gallery/offline.webp"
              : "https://www.google.com/chrome/static/images/v2/gallery/workspace-2.webp"
          }
          alt="Workspace"
          className="card-image"
        />
        <button
          className="toggle-btn"
          onClick={() => setSecondOpen(!secondOpen)}
        >
          {secondOpen ? "✕" : "+"}
        </button>
      </div>
    </div>
  );
}
