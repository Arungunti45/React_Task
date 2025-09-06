import React from "react";
import "./Google_ai.css";

function Gooogle_ai() {
  return (
    <div className="ai-container">
      <div className="ai-content">
        <div className="ai-text">
          <p className="ai-subtitle">GOOGLE AI</p>
          <h2 className="ai-title">
            Access AI superpowers while you browse.
          </h2>
        </div>
        <div className="ai-description">
          <p>
            Google is integrating artificial intelligence to make our products
            more useful. We use AI for features like Search, Google Translate,
            and more, and we’re innovating new technologies responsibly.
          </p>
          <p className="ai-link"><a href="https://ai.google/">Explore Google AI</a></p>
        </div>
      </div>

      <div className="ai-image-wrapper">
        <img
          src="https://www.google.com/chrome/static/images/v2/gallery/ai_tablet.webp"
          alt="Google AI"
          className="ai-image"
        />
      </div>
    </div>
  );
}

export default Gooogle_ai;
