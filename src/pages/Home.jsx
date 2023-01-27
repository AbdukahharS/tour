import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Statistics from '../components/Statistics'
import Benefits from '../components/Benefits'
import Facilities from '../components/Facilities'
import Review from '../components/Review'
import Tours from '../components/Tours'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Benefits />
      <Facilities />
      <Review />
      <Tours />
    </div>
  )
}

export default Home
