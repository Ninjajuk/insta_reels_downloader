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
import { Helmet } from "react-helmet";
import FAQ from '../components/FAQ'
const Home = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>SnapInsta - Download Instagram Videos, Reels & IGTV</title>
        <meta name="description" content="SnapInsta is the best Instagram downloader to download videos, reels, stories, and IGTV in HD. Fast, free, and secure!" />
        <meta name="keywords" content="SnapInsta, Instagram Downloader, Download Instagram Videos, Insta Video Saver, IGTV Downloader" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SnapInsta - Instagram Video & Reel Downloader" />
        <meta property="og:description" content="Easily download Instagram videos, reels, and IGTV with just one click. Fast & free!" />
        <meta property="og:image" content="/images/instaninja.webp" />
        <meta property="og:url" content="https://snapinsta.fun/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SnapInsta",
            "url": "https://snapinsta.fun/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://snapinsta.fun/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen w-full ">
        <HeroSection />
        <StatsSection />
        <InstagramDownloader />
        <HowItWorks />
        <AboutInstaninja />
        <OurMission />
        <VideoDownloadingService />
        <VideoGallary />
        {/* <InstagramProfile/> 
      Improve User Engagement (CTR & Dwell Time)
Add a blog section with guides like:
“How to Download Instagram Reels?”
“Best Instagram Video Downloader for 2025”
      */}
        <FeaturesSection />
        <Testimonial />
        <FAQ/>

      </div></>

  )
}

export default Home