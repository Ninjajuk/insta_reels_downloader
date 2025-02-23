import React, { useEffect, useState } from "react";

const tabs = ["Video", "Photo", "Story", "Reel", "IGTV"];
const BASE_URL = 'http://127.0.0.1:5000/download';
const InstagramDownloader = () => {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("Video");
  const [error, setError] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false);

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
      const response = await fetch(`${BASE_URL}?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError(data.error || "Failed to fetch the download link.");
        setLoading(false);
        return;
      }
      if (data.downloadLink) {
        setDownloadLink(data.downloadLink);
      } else {
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
      <nav className="w-full bg-gray-800 p-4 shadow-md">
        <h1 className="text-xl font-semibold text-white ">Instagram Downloader</h1>
      </nav>
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
        <section className="max-w-2xl p-4 bg-purple-800 rounded-md shadow-lg">
          <h1 className="text-2xl lg:text-4xl font-bold mt-10">Download Instagram {activeTab}</h1>
          <p className="text-sm lg:text-md text-gray-400 mb-4 pt-2">Easily download Instagram {activeTab} online</p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 border-b border-gray-700 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg transition-all cursor-pointer ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 w-full max-w-lg ">
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:border-blue-500"
              placeholder="Paste Instagram URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          {error && <p className="mt-2 text-red-500 font-bold">{error}</p>}

          <button
            onClick={handleDownload}
            disabled={loading}
            className={`mt-4 px-6 py-2 rounded-lg text-white text-lg shadow-md cursor-pointer ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
          >
            {loading ? "Loading..." : downloadLink ? ` Download ${activeTab}` : `Generate Link for ${activeTab}`}
          </button>

          {/* Placeholder for Ads */}
          <div className="mt-10 w-full max-w-lg h-32 bg-gray-700 flex items-center justify-center rounded-lg border border-gray-600 shadow-md">
            <p className="text-gray-400">Ad Space</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default InstagramDownloader;
