import React from 'react'
import InstagramDownloader from '../components/InstaDownloader'
import HowItWorks from '../components/HowItWorks'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
      <div className="min-h-screen w-full ">
          <InstagramDownloader />
          <HowItWorks/>
          <Testimonial/>
      </div>
  )
}

export default Home