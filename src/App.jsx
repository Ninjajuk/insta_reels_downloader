

import './App.css'
import InstagramDownloader from './components/InstaDownloader'
import InstagramVideoDownloader from './components/InstaDownload1'

function App() {


  return (
    <>
      <nav className="w-full bg-gray-800 p-4 shadow-md flex items-center justify-between sticky top-0 z-10">
        <a href="/" className="bg-purple-600 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-800 cursor-pointer">
          InstaNinja
        </a>
        <h1 className="text-xl font-semibold text-white flex-grow text-center">Instagram Downloader</h1>
        <div className="w-24"></div>
      </nav>


    <InstagramDownloader/>
    {/* <InstagramVideoDownloader/> */}
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">

        {/* Ad Placement */}
        <div className="mt-8 mx-auto w-3/4 bg-white p-4 rounded-lg shadow-lg">
          <p className="text-gray-600">Google Ad Here</p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex justify-around max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <span className="text-3xl">1</span>
            </div>
            <p className="mt-4 font-semibold">Copy the Instagram Video URL.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <span className="text-3xl">2</span>
            </div>
            <p className="mt-4 font-semibold">Paste the URL in the Box Above.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <span className="text-3xl">3</span>
            </div>
            <p className="mt-4 font-semibold">Click Download and Save Your Video.</p>
          </div>
        </div>
        {/* Ad Placement */}
        <div className="mt-8 mx-auto w-3/4 bg-gray-100 p-4 rounded-lg shadow-lg text-center">
          <p className="text-gray-600">Ad Here</p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Videos <span className='text-purple-800 font-bold'>{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-md">
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Video Thumbnail {item}</p>
              </div>
              <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition cursor-pointer">
                Download
              </button>
            </div>
          ))}
        </div>
        {/* Ad Placement */}
        <div className="mt-8 mx-auto w-3/4 bg-white p-4 rounded-lg shadow-lg text-center">
          <p className="text-gray-600">Ad Here</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Samsu", "Ajuking"].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700">"This app is amazing! So easy to use and fast."</p>
                <div className="mt-4 flex items-center">
                  <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                    {item[0]}
                  </div>
                  <p className="ml-3 font-semibold">User {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Ad Placement */}
        <div className="mt-8 mx-auto w-3/4 bg-gray-100 p-4 rounded-lg shadow-lg text-center">
          <p className="text-gray-600">Ad Here</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">InstaDownloader</p>
            <p className="text-sm">© 2025 InstaNinja. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/about" className="mx-2 hover:text-purple-400 transition">About Us</a>
            <a href="/privacy" className="mx-2 hover:text-purple-400 transition">Privacy Policy</a>
            <a href="/terms" className="mx-2 hover:text-purple-400 transition">Terms of Service</a>
            <a href="/contact" className="mx-2 hover:text-purple-400 transition">Contact Us</a>
          </div>
        </div>
        {/* Ad Placement */}
        <div className="mt-8 mx-auto w-3/4 bg-gray-700 p-4 rounded-lg shadow-lg text-center">
          <p className="text-gray-400">Ad Here</p>
        </div>
      </footer>
    </div>


    </>
  )
}

export default App
