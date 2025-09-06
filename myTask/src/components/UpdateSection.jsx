import React from "react";
import { motion } from "framer-motion";
import "./UpdateSection.css";

export default function UpdatesSection() {
  return (
    <section className="updates-section">
      <h2 className="updates-title">
        <b>
          Discover the latest <br />
          <span className="updates-highlight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Zm.5-9.866V7a.5.5 0 0 0-1 0v4.134a1.5 1.5 0 1 0 1 0Z" />
            </svg>{" "}
            updates
          </span>{" "}
          from Chrome
        </b>
      </h2>

      <div className="updates-cards">
        {/* Card 1 */}
        <motion.div
          className="update-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="update-small-heading">Updates</p>
          <h3 className="update-card-title">Automatic updates</h3>
          <p className="update-desc">
            There’s a new Chrome release every four weeks, making it easy to have the
            newest features and a faster, safer web browser.
          </p>
          <a
            href="https://www.google.com/intl/en_in/chrome/update/"
            className="update-link"
          >
            Learn about automatic updates
          </a>
          <img
            src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates-2x.png"
            alt="Automatic updates"
            className="update-image"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="update-card latest"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="update-small-heading">Latest</p>
          <h3 className="update-card-title-small">New from Chrome</h3>
          <p className="update-desc">
            Chrome regularly updates with tools and features that make it faster and
            easier to use.
          </p>
          <a
            href="https://www.google.com/chrome/whats-new/archive/"
            className="update-link"
          >
            Learn what’s new on Chrome
          </a>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtcRY1liKNAojYgGcQwekH4SyuUe7GLxoNQ&s"
            alt="New from Chrome"
            className="update-image"
          />
        </motion.div>
      </div>
    </section>
  );
}
