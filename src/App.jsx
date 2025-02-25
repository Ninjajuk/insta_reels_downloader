

import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdComponent from './components/AdComponent';
function App() {


  return (

      <Router>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          {/* <AdComponent position="left" />
          <AdComponent position="right" /> */}
          <main className='flex-1'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>







  )
}

export default App
