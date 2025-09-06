import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How do I make Chrome my default web browser?",
    answer: "Go to your system settings and select Chrome as your default browser. This ensures all links open in Chrome automatically."
  },
  {
    question: "How can I customise Chrome?",
    answer: "You can personalise Chrome by changing themes, adding extensions, and adjusting settings in the Chrome menu."
  },
  {
    question: "What are Chrome’s safety settings?",
    answer: "Chrome has built-in security features including Safe Browsing, site isolation, and automatic updates to protect your data."
  },
  {
    question: "What is Chrome’s password manager?",
    answer: "Chrome securely saves your passwords and autofills them when you log in to websites, keeping your credentials safe."
  },
  {
    question: "How do I add a browser extension to Chrome?",
    answer: "Open the Chrome Web Store, find the extension you want, and click 'Add to Chrome'. It will appear in your toolbar."
  },
  {
    question: "How do I update Chrome?",
    answer: "Click the three dots in the top-right, go to Help > About Chrome, and Chrome will update automatically if needed."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently asked questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
