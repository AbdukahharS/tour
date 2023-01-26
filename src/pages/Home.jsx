import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Statistics from '../components/Statistics'
import Benefits from '../components/Benefits'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Benefits />
    </div>
  )
}

export default Home
