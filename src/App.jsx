import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Research from './components/Research'
import Speaking from './components/Speaking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <a href="#home" className="skip-link">Skip to main content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
