import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AnimationWrapper from './components/AnimationWrapper'

function App() {
  console.log('App rendering'); // Debug log
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="relative">
        <Hero />
        <AnimationWrapper>
          <About />
        </AnimationWrapper>
        <AnimationWrapper>
          <Skills />
        </AnimationWrapper>
        <AnimationWrapper>
          <Education />
        </AnimationWrapper>
        <Certifications />
        <AnimationWrapper>
          <Experience />
        </AnimationWrapper>
        <AnimationWrapper>
          <Projects />
        </AnimationWrapper>
        <AnimationWrapper>
          <Contact />
        </AnimationWrapper>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
