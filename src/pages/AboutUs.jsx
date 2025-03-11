import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">About Us</h1>
        <p className="text-gray-300">
          Welcome to <span className="font-semibold">SnapInsta.fun</span>, your go-to solution for downloading Instagram videos, reels, stories, and IGTV in high quality.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-purple-400">Our Mission</h2>
        <p className="text-gray-300">
          Our goal is to provide a **fast, free, and secure** way for users to download and save Instagram content for personal use. We believe in making content accessibility easy while respecting digital rights.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-purple-400">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>✅ **Fast & Free:** Download Instagram videos instantly without any cost.</li>
          <li>✅ **No Login Required:** Use our service without signing in.</li>
          <li>✅ **High Quality:** Get videos and images in the best resolution available.</li>
          <li>✅ **Safe & Secure:** We do not store any user data or downloaded files.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-purple-400">How It Works</h2>
        <p className="text-gray-300">
          Using <span className="font-semibold">SnapInsta.fun</span> is simple:
        </p>
        <ol className="list-decimal list-inside text-gray-300 mt-2">
          <li>Copy the link to the Instagram video, reel, story, or IGTV you want to download.</li>
          <li>Paste the link into the input field on our website.</li>
          <li>Click the **Download** button and save the file to your device.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 text-purple-400">Our Commitment</h2>
        <p className="text-gray-300">
          We are dedicated to continuously improving our platform by adding more features and ensuring a smooth user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-purple-400">Get in Touch</h2>
        <p className="text-gray-300">
          If you have any questions, feedback, or suggestions, feel free to <a href="/contact" className="underline text-purple-400">Contact Us</a>. Your input helps us improve and serve you better!
        </p>

        <p className="text-sm text-gray-400 mt-6">Last Updated: March 2025</p>
      </div>
    </div>
  );
};

export default AboutUs;
