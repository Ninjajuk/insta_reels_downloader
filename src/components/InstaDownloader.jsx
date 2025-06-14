import React, { useEffect, useState } from "react";
import AdComponent from "./AdComponent";
import AdSenseComponent from "./AdSenseGoogle";

const tabs = ["Video", "DP", "Story", "Reel"];
// const BASE_URL = 'http://127.0.0.1:5000/download';

const BASE_URLS = {
  Video: "https://instareels-backend-python.onrender.com/download",
  // DP: "http://127.0.0.1:5000/download/dp",
  DP: "https://instareels-backend-python.onrender.com/download/dp",
  Story: "http://127.0.0.1:5000/download/stories",
  Reel: "https://instareels-backend-python.onrender.com/download",
  // IGTV: "http://127.0.0.1:5000/download/igtv",
};

const InstagramDownloader = () => {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("Video");
  const [error, setError] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    if (downloadLink) {
      const link = document.createElement("a");
      link.href = downloadLink;
      link.setAttribute("download", "instagram_download.mp4"); // Set filename (optional)
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }
  }, [downloadLink]);

  const handleDownload = async () => {
    setError('');
    setDownloadLink('');
    setLoading(true);
    console.log(url);
    if (!url) {
      setError('Instagram URL is required');
      setLoading(false);
      return;
    }
    try {
      let endpoint = BASE_URLS[activeTab]

      let fetchUrl = activeTab === "DP"
        ? `${endpoint}?username=${encodeURIComponent(url)}`
        : `${endpoint}?url=${encodeURIComponent(url)}`;

      const response = await fetch(fetchUrl);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError(data.error || "Failed to fetch the download link.");
        setLoading(false);
        return;
      }
      if (data.downloadLink) return setDownloadLink(data.downloadLink);
      if (data.dpUrl) return setDownloadLink(data.dpUrl);
      else {
        setError('Please check the URL. Unable to fetch the video.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred while trying to download the video.');
      setLoading(false);
    }
  };

  return (
    <>

      <main className="min-h-screen p-2 flex flex-col lg:flex-row gap-2  items-center justify-center bg-gray-50 text-white ">
        {/* Left Ad vertical */}
        {/* <AdComponent position="left" /> */}
        <div key={activeTab} className="w-full lg:w-64 h-64 lg:min-h-screen">
          <AdSenseComponent adClient="ca-pub-3193442524605948" adSlot="9310001507" />
        </div>


        <main className="flex-1 flex items-center justify-center">
          <section className="w-full max-w-7xl mx-auto p-4 bg-purple-800 rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-bold mt-10 text-center">Download Instagram Trending Videos</h1>
            <p className="text-md lg:text-lg text-gray-400 py-4">Easily download Instagram <span className="font-semibold text-lg text-white">{activeTab}</span> online</p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 border-b border-gray-700 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setDownloadLink(""); // Reset download link on tab change
                    setError(""); // Reset error on tab change
                  }}
                  className={`px-6 py-2 rounded-lg transition-all cursor-pointer ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 w-full max-w-lg  ">
              <input
                type="text"
                className="w-full p-3 rounded-lg  bg-white text-gray-800 focus:border-blue-500"
                placeholder={activeTab === "DP" ? "Enter Instagram Username..." : "Paste Instagram URL here..."}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            {error && <p className="mt-2 text-red-500 font-bold">try again {error} </p>}

            <button
              onClick={handleDownload}
              disabled={loading}
              className={`mt-6 px-6 py-2 rounded-lg text-white text-lg shadow-md cursor-pointer ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
            >
              {loading ? "Loading..." : downloadLink ? ` Download ${activeTab}` : `Generate Link for ${activeTab}`}
            </button>

            {/* Placeholder for horizontal Ads */}
            <div className="mt-10 w-full  h-32 flex items-center justify-center rounded-lg ">
              {/* <p className="text-gray-400">Ad Space</p> */}
              <AdSenseComponent
                adClient='ca-pub-3193442524605948'
                adSlot='7096807683'
              />
            </div>
          </section>
        </main>

        {/* Left Ad */}
        {/* <AdComponent position="right" /> */}
        <div className="w-full lg:w-64 h-64 lg:min-h-screen">
          <AdSenseComponent
            adClient='ca-pub-3193442524605948'
            adSlot='9310001507'
          />
        </div>

      </main>
    </>
  );
};

export default InstagramDownloader;
