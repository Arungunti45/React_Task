import React from "react";
import "./ChromeDownload.css";
// import qrCode from "./chrome-qr.png"; // place your QR image inside `src/`

export default function ChromeDownload() {
  return (
    <div className="chrome-container">    <div className="chrome-container">
      <div >
        <h1 className="chrome-title">Take your browser<br />with you</h1>
        <p className="chrome-subtitle">
          Download Chrome on your mobile device or tablet and sign into your
          account for the same browser experience, everywhere.
        </p>
        <button className="chrome-btn">⬇ Download Chrome</button>
      </div>
      
    </div>
    <div className="chrome-qr">
        <img src="https://www.google.com/chrome/static/images/v2/go-mobile-qrs/engagement-hp-take-it-with-you.webp" alt="Chrome QR Code" />
        <p>Get Chrome for your phone</p>
      </div>
    </div>
  );
}
