import React from "react";
import "./Footer.css"; // import css file
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Social Links */}
      <div className="social">
        <span>Follow us</span>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaTiktok /></a>
      </div>

      <hr />

      {/* Footer Links */}
      <div className="footer-links">
        <div>
          <h4>Chrome Family</h4>
          <a href="#">Other Platforms ↗</a>
          <a href="#">Chromebooks ↗</a>
          <a href="#">Chromecast ↗</a>
          <a href="#">Chrome Web Store ↗</a>
        </div>

        <div>
          <h4>Enterprise</h4>
          <a href="#">Download Chrome Browser ↗</a>
          <a href="#">Chrome Browser for Enterprise ↗</a>
          <a href="#">Chrome Devices ↗</a>
          <a href="#">ChromeOS ↗</a>
          <a href="#">Google Cloud ↗</a>
          <a href="#">Google Workspace ↗</a>
        </div>

        <div>
          <h4>Education</h4>
          <a href="#">Google Chrome Browser ↗</a>
          <a href="#">Devices ↗</a>
        </div>

        <div>
          <h4>Dev and Partners</h4>
          <a href="#">Chromium ↗</a>
          <a href="#">ChromeOS ↗</a>
          <a href="#">Chrome Web Store ↗</a>
          <a href="#">Chrome Experiments ↗</a>
          <a href="#">Chrome Beta</a>
          <a href="#">Chrome Dev</a>
          <a href="#">Chrome Canary</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#">Chrome Help ↗</a>
          <a href="#">Update Chrome</a>
          <a href="#">Chrome Tips</a>
          <a href="#">Google Chrome Blog ↗</a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <span>Google</span>
        <a href="#">Privacy and Terms</a>
        <a href="#">About Google</a>
        <a href="#">Google products</a>
        <div className="right">
          <a href="#">Help</a>
          <span>English - India ⌄</span>
        </div>
      </div>
    </footer>
  );
}
