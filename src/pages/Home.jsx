import React from 'react'
import InstagramDownloader from '../components/InstaDownloader'
import HowItWorks from '../components/HowItWorks'
import Testimonial from '../components/Testimonial'
import InstagramProfile from '../components/InstagramProfile'
import AboutInstaninja from '../components/AboutInstaNinja'

const Home = () => {
  return (
      <div className="min-h-screen w-full ">
          <InstagramDownloader />
          <AboutInstaninja/>
          <HowItWorks/>
          <InstagramProfile/>
          <Testimonial/>
      </div>
  )
}

export default Home