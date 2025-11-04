import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from "./components/About";
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import LocomotiveScroll from "locomotive-scroll";
import Footer from './components/Footer';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App