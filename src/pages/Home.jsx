import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Statistics from '../components/Statistics'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Statistics />
    </div>
  )
}

export default Home
