import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import LatestArticles from '@/components/LatestArticles'
import Particles from '@/components/Particles'
import Footer from '@/components/Footer'

import { getLatestArticles } from '@/lib/articles'

export default async function Home() {
  const articles = await getLatestArticles()
  return (
    <>
      <ScrollProgress />
      <BackgroundAnimation />
      <Particles />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <LatestArticles articles={articles} />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}