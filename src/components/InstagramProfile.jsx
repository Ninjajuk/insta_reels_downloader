import { useState } from "react";

const InstagramProfile = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInstagramData = async () => {
    if (!username.trim()) {
      setError("Please enter a valid username.");
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);

    const accessToken = 'EAAQPYZBhVshEBO6zcMLIsZCp638BE8bNJHWraCImBZCxuBLvBlSkS6iTkF0y8ZCMDFIyzYn2VXPB30VMDfpNB19pXD8VIoEus73bCugJWRTPi7AYqXfpyibWpyKlZBHZCMCHHjvCOyo7Mx5jV8o6jwZCjBZAjTROzSMjQyP6eZA1hEMdRrIhXeQRLvfZC8tNSSV9jqZA0HPRlXYShlZBXCQxmWAEnZB9sa6Fg6IjTyiQZD'

    // const apiUrl = `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${accessToken}`;
    const apiUrl = `https://graph.facebook.com/v22.0/me?fields=username&access_token=${accessToken}`;


    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data. Check the username or access token.");
      }
      const data = await response.json();
      setUserData(data);
      console.log(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-50 text-white rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-purple-600">Search Instagram Profile</h2>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          className="p-2 text-black rounded-lg w-full"
          placeholder="Enter Instagram Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={fetchInstagramData}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading Instagram Data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="mt-4 p-3 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-bold">{userData.username}</h3>
          <p>ID: {userData.id}</p>
          <p>Account Type: {userData.account_type}</p>
          <p>Media Count: {userData.media_count}</p>
        </div>
      )}
    </div>
  );
};

export default InstagramProfile;
