import React, { useState } from 'react';

const InstagramVideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setError('');
    setDownloadLink('');

    try {
      // Replace with your backend endpoint or a third-party service
      const response = await fetch(`https://your-backend-service.com/download?url=${encodeURIComponent(videoUrl)}`);
      const data = await response.json();

      if (data.downloadLink) {
        setDownloadLink(data.downloadLink);
      } else {
        setError('Unable to fetch the video. Please check the URL.');
      }
    } catch (err) {
      setError('An error occurred while trying to download the video.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Instagram Video Downloader</h1>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter Instagram Video URL"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleDownload}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Download Video
        </button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {downloadLink && (
          <div className="mt-4 text-center">
            <a
              href={downloadLink}
              download
              className="text-blue-500 hover:underline"
            >
              Click here to download the video
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstagramVideoDownloader;