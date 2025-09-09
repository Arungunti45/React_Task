import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Your custom styles

export default function ChromeNavbar() {
  const [showSecondNav, setShowSecondNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSecondNav(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* First Navbar */}
      <nav className="chrome-navbar d-flex align-items-center px-4 py-3 shadow-sm bg-white fixed-top">
        <div className="d-flex align-items-center">
          <img
            src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
            alt="Chrome Logo"
            className="logo"
          />
          <span className="brand-text">chrome</span>

          <ul className="nav-links d-flex align-items-center gap-4 mb-0 ms-auto">
            <li className="nav-item">
              <Link to="/safety" className="nav-link">Safety</Link>
            </li>
            <li className="nav-item">
              <Link to="/by-google" className="nav-link">By Google</Link>
            </li>
            <li className="nav-item d-flex align-items-center gap-1">
              <Link to="https://chromewebstore.google.com/category/extensions?pli=1" className="nav-link d-flex align-items-center gap-1">
                Extensions <ArrowUpRight size={14} strokeWidth={2} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Second Navbar - appears on scroll */}
      {showSecondNav && (
        <nav
          className="second-navbar d-flex justify-content-center align-items-center px-4 py-2 mt-2 shadow-sm bg-white position-fixed"
          style={{
            top: "56px",
            zIndex: 1030,
            borderRadius: "2rem",
            width: "fit-content",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <ul className="nav-links d-flex gap-4 mb-0 px-3">
            <li className="nav-item text-black">
              <Link to="/updates-slider" className="nav-link text-black">Updates</Link>
            </li>
            <li className="nav-item text-black">
              <Link to="/ExtendExperience.jsx" className="nav-link text-black">Yours</Link>
            </li>
            <li className="nav-item text-black">
              <Link to="/safe-browsing" className="nav-link text-black">Safe</Link>
            </li>
            <li className="nav-item text-black">
              <Link to="/Google ai" className="nav-link text-black">ByGoogle</Link>
            </li>
            <li className="nav-item bg-primary text-white px-3 py-1 rounded">
              <a
                href="https://www.google.com/intl/en_in/chrome/next-steps.html?statcb=1&installdataindex=empty&defaultbrowser=0"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div style={{ paddingTop: showSecondNav ? "112px" : "56px" }}></div>
    </>
  );
}
