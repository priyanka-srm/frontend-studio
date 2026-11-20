
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import './ScrollReveal.css'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      'main > section:not(#home) .section-heading, ' +
      'main > section:not(#home) .projects-heading, ' +
      'main > section:not(#home) .education-heading, ' +
      'main > section:not(#home) .contact-heading, ' +
      'main > section:not(#home) .about-layout, ' +
      'main > section:not(#home) .skills-grid, ' +
      'main > section:not(#home) .projects-list, ' +
      'main > section:not(#home) .education-card, ' +
      'main > section:not(#home) .contact-layout'
    )

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    elements.forEach((element) => {
      element.classList.add('scroll-reveal')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'is-visible',
            entry.isIntersecting,
          )
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
