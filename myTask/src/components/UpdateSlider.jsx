import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./UpdateSlider.css";

export default function UpdatesSlider() {
  const images = [
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp",
      alt: "Automatic Updates"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp",
      alt: "New from Chrome"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp",
      alt: "New from Chrome"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp",
      alt: "New from Chrome"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp",
      alt: "New from Chrome"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="updates-slider-container">
      <AnimatePresence>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          className="updates-slider-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}
