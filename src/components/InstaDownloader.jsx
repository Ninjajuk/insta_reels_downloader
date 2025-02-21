import React, { useState } from "react";

const tabs = ["Video", "Photo", "Story", "Reel", "IGTV"];

const InstagramDownloader = () => {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("Video");

  const handleDownload = () => {
    if (!url) return alert("Please enter a valid Instagram URL");
    alert(`Downloading ${activeTab} from ${url}`);
    // Implement API call here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 p-4 flex justify-center shadow-md">
        <h1 className="text-xl font-semibold">Instagram Downloader</h1>
      </nav>
      
      <h1 className="text-4xl font-bold mt-10">Download Instagram {activeTab}</h1>
      <p className="text-gray-400 mb-4">Easily download Instagram {activeTab} online</p>

      <div className="flex gap-4 mt-4 border-b border-gray-700 pb-4">
        {tabs.map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)} 
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 w-full max-w-lg">
        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:border-blue-500"
          placeholder="Paste Instagram URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <button 
        onClick={handleDownload} 
        className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-white text-lg shadow-md">
        Download {activeTab}
      </button>

      {/* Placeholder for Ads */}
      <div className="mt-10 w-full max-w-lg h-32 bg-gray-700 flex items-center justify-center rounded-lg border border-gray-600 shadow-md">
        <p className="text-gray-400">Ad Space</p>
      </div>
    </div>
  );
};

export default InstagramDownloader;
