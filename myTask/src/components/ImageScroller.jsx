import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageScroller.css"; // Make sure to import the CSS

export default function ImageScroller() {
  const images = [
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp", // im1

    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp", // im0
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp", // im2
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      setIsScrolling(true);

      if (e.deltaY > 0) {
        setActiveIndex((prev) =>
          prev < images.length - 1 ? prev + 1 : prev
        );
      } else {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }

      setTimeout(() => setIsScrolling(false), 7000);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling, images.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <center>











              <AnimatePresence mode="wait">
        <motion.img
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className={`scroller-image ${activeIndex === 0 ? "large" : "small"}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
      
      </center>

    </div>
  );
}
