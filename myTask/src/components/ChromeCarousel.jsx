import React, { useState } from "react";
import { FaTachometerAlt } from "react-icons/fa"; 
import "./ChromeCarousel.css";

const slides = [
  {
    type: "video",
    src: "https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm",
  },
  {
    type: "image",
    src: "https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.webp",
  },
  {
    type: "image",
    src: "https://www.google.com/chrome/static/images/homepage/fast/devices_desktop.webp",
  },
];

export default function ChromeCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-wrapper">
      <div className="highlight-text">
        <b>
        The{" "}
        <span className="ai-highlight">
          <FaTachometerAlt className="ai-icon" />
          fast
        </span>{" "}
        way <br /> to  do things online
        </b>
      </div>

      <div className="carousel-container">
        <div className="carousel-slide">
          {slides[current].type === "video" ? (
            <video
              src={slides[current].src}
              className="carousel-media"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={slides[current].src}
              alt={`Slide ${current}`}
              className="carousel-media"
            />
          )}
        </div>
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="carousel-btn" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
}
