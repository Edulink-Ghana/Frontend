import Hero from './components/hero'
import About from './components/about'
import FindTutor from './components/findTutor'
import FilterSession from './components/filterSession'
import Career from './components/career'
import Blog from './components/blog'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <FindTutor />
        <FilterSession />
        <Career />
        <Blog />
    </div>
  )
}

export default Home