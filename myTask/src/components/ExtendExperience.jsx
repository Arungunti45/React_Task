import React, { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaClipboard,
  FaFilm,
  FaUserAlt,
  FaPen
} from "react-icons/fa";
import "./ExtendExperience.css";

export default function ExtendExperience() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const limitedScroll = Math.min(Math.max(window.scrollY / 300, -0.2), 0.2);
      setScrollY(limitedScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    { component: FaShoppingBag, color: "#ff6f61" }, // red-orange
    { component: FaClipboard, color: "#0078ff" },   // blue
    { component: FaFilm, color: "#ffb400" },        // yellow
    { component: FaUserAlt, color: "#4caf50" },     // green
    { component: FaPen, color: "#9c27b0" }          // purple
  ];

  return (
    <div className="extend-container">
      <div className="extend-text">
        <h2>Extend your experience</h2>
        <p>
          From shopping and entertainment to productivity,<br /> find extensions to
          improve your experience in the <br />Chrome Web Store.
        </p>
        <a href="https://chromewebstore.google.com/category/extensions?pli=1" className="extend-btn">Explore extensions →</a>
      </div>

      <div className="extend-image-container">
        <img
          src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp"
          alt="Chrome Extensions"
          className="extend-image"
        />

        <div className="circle-icons">
          {icons.map(({ component: Icon, color }, i) => (
            <div
              key={i}
              className="circle-icon"
              style={{
                transform: `rotate(${i * (360 / icons.length)}deg)
                            translate(160px) 
                            rotate(-${i * (360 / icons.length)}deg) 
                            scale(${1 + scrollY})`,
                color: color,
              }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
