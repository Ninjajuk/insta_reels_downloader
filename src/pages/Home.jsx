import React from 'react'
import InstagramDownloader from '../components/InstaDownloader'
import HowItWorks from '../components/HowItWorks'
import Testimonial from '../components/Testimonial'
import InstagramProfile from '../components/InstagramProfile'
import AboutInstaninja from '../components/AboutInstaNinja'
import OurMission from '../components/OurMission'
import VideoDownloadingService from '../components/VideoDownloadingService'
import VideoGallary from '../components/VideoGallary'
import HeroSection from '../components/Hero'
import StatsSection from '../components/Statssection'
import FeaturesSection from '../components/FeatureSection'

const Home = () => {
  return (
    <div className="min-h-screen w-full ">
      <HeroSection />
      <StatsSection />
      <InstagramDownloader />
      <HowItWorks />
      <AboutInstaninja />
      <OurMission />
      <VideoDownloadingService />
      <VideoGallary />
      {/* <InstagramProfile/> */}
      <FeaturesSection/>
      <Testimonial />
    </div>
  )
}

export default Home