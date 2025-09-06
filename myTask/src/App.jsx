import React, { useEffect } from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

// import ChromeNavbar from './components/ChromeNavbar'  // Updated navbar
import ChromeNavbar from './components/Navbar'  // Updated navbar

import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import UpdatesSection from './components/UpdateSection'
import UpdatesSlider from './components/UpdateSlider'
import ImageScroller from './components/ImageScroller' 
import SafeBrowsing from './components/SafeBrowse'
import ExtendExperience from './components/ExtendExperience'
import ChromeCarousel from './components/Chromecarousel'  
import Gooogle_ai from './components/Gooogle_ai'
import ChromeDownload from './components/ChromeDownload'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Scrolls smoothly to the correct section on route change
function ScrollToSection() {
  const location = useLocation()

  useEffect(() => {
    const id = location.pathname.replace('/', '') || 'hero-section'
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return null
}

const AppContent = () => (
  <>
    <div id="hero-section"><HeroSection /></div>
    <div id="updates-slider"><UpdatesSlider /></div>
    <div id="updates-section"><UpdatesSection /></div>
    <div id="image-scroller"><ImageScroller /></div>
    <div id="extend-experience"><ExtendExperience /></div>
    <div id="safe-browsing"><SafeBrowsing /></div>
    <div id="chrome-carousel"><ChromeCarousel /></div>
    <div id="google-ai"><Gooogle_ai /></div>
    <div id="feature-section"><FeatureSection /></div>
    <div id="faq"><FAQ /></div>
    <div id="chrome-download"><ChromeDownload /></div>
    <div id="footer"><Footer /></div>
  </>
)

const App = () => {
  return (
    <Router>
      <ChromeNavbar />
      <ScrollToSection />
      <AppContent />
    </Router>
  )
}

export default App
