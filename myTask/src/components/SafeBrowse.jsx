import React, { useState } from "react";
import "./SafeBrowse.css";

const cards = [
  {
    label: "PASSWORD MANAGER",
    frontTitle: "Use strong passwords on every site.",
    frontImage: "https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2-2x.webp", // replace or empty string
    backTitle: "Save password?",
    backDescription: `Chrome has Google Password Manager built in, which makes it simple to save, manage and protect your passwords online. It also helps you create stronger passwords for every account you use.`,
    backImage: "https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp",
    bgColor: "#1676f3",
    textColor: "#fff",
    link: "https://passwords.google/",
  },
  {
    label: "SAFETY CHECK",
    frontTitle: "Check your safety level in real time with just one click.",
    // frontImage: "/path-to-small-front-image2.png",
    backTitle: "Safety check ran a moment ago",
    backDescription: `Chrome’s Safety Check confirms the overall security and privacy of your browsing experience, including your saved passwords, extensions and settings. If something needs attention.`,
    backImage: "https://www.google.com/chrome/static/images/v2/gallery/safety-check-2x.webp",
    bgColor: "#e8f0fe",
    textColor: "#000",
    link: "https://blog.google/products/chrome/more-intuitive-privacy-and-security-controls-chrome/",
  },
  {
    label: "ENHANCED SAFE BROWSING",
    frontTitle: "Browse with the confidence that you're staying safer online.",
    frontImage: "",
    backTitle: "The site ahead contains malware",
    backDescription: `Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections.`,
    backImage: "https://www.google.com/chrome/static/images/v2/gallery/malware-alert-2x.webp",
    bgColor: "#fff",
    textColor: "#000",
    link: "https://support.google.com/chrome/answer/9890866",
  },
  {
    label: "PRIVACY GUIDE",
    frontTitle: "Keep your privacy under your control with easy-to-use settings.",
    frontImage: "https://www.google.com/chrome/static/images/v2/gallery/google-safety-2x.webp",
    backTitle: "Take the Privacy Guide",
    backDescription: `Chrome makes it easy to understand exactly what you're sharing online and who you're sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings.`,
    backImage: "https://www.google.com/chrome/static/images/v2/gallery/privacy-guide-2x.webp",
    bgColor: "#1676f3",
    textColor: "#fff",
    link: "https://blog.google/products/chrome/more-intuitive-privacy-and-security-controls-chrome/",
  },
];

export default function Features() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="features-container">
      {cards.map((card, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            className="feature-card"
            key={index}
            style={{
              backgroundColor: card.bgColor,
              color: card.textColor,
            }}
          >
            {!isOpen && (
              <>
                <span className="card-label">{card.label}</span>
                <b>{card.frontTitle}</b>
                {card.frontImage && (
                  <img
                    src={card.frontImage}
                    alt={card.label}
                    className="card-image"
                  />
                )}
                <button
                  className="toggle-btn"
                  onClick={() => setOpenIndex(index)}
                  aria-label="Expand card"
                >
                  +
                </button>
              </>
            )}

            {isOpen && (
              <>
                {card.backImage && (
                  <img
                    src={card.backImage}
                    alt={card.backTitle}
                    className="card-back-image"
                  />
                )}
                <h3>{card.backTitle}</h3>
                <p>{card.backDescription}</p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more-link"
                >
                  Learn more &rarr;
                </a>
                <button
                  className="toggle-btn close-btn"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close card"
                >
                  &times;
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
