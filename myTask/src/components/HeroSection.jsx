import React from "react";
import "./HeroSection.css";


export default function HeroSection() {
  return (
    <section className="hero">
        <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="" />
      <h1 className="hero-title text-6xl font-bold">

        <b>The browser <br /> built to be yours</b>
      
      </h1>
      <br></br>

<a className="hero-btn" href="https://www.google.com/intl/en_in/chrome/next-steps.html?statcb=1&installdataindex=empty&defaultbrowser=0">Download Chrome</a>
      <div>
        <br></br>

<div>
      <span style={{ color: "#1E90FF" }}> I want to update Chrome</span>
      <br /><br />
      <span style={{ color: "#C0C0C0" }}>For Windows 11/10 64-bit</span><br />
      <br />
</div>
<label>
  <input type="checkbox" />
  {/* I agree to the terms & conditions */}
</label>

     
Help make Google Chrome better by automatically sending usage statistics and <br />
crash reports to Google.<a href="https://support.google.com/chrome/answer/96817?hl=en">learn more</a>

<p>By downloading Chrome, you agree to the <a href="https://policies.google.com/terms">Google Terms of Service</a> and <br /><a href="https://www.google.com/intl/en_in/chrome/terms/">Chrome and ChromeOS Additional Terms of Service</a>.</p>

     </div>
    </section>
  );
}
