import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">Contact Us</h1>
        <p className="text-gray-300 mb-6">
          Have any questions, feedback, or issues? Feel free to reach out to us. We're here to help!
        </p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <a href="mailto:biosamsuddin@gmail.com" className="underline"></a>
          <h2 className="text-xl font-semibold text-purple-400">Email</h2>
          <p className="text-gray-300">
            📩 <a href="mailto:biosamsuddin@gmail.com" className="underline">support@snapinsta.fun</a>
          </p>

          <h2 className="text-xl font-semibold mt-6 text-purple-400">Social Media</h2>
          <p className="text-gray-300">Follow us for updates and support:</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              <a href="https://twitter.com/snapinsta" target="_blank" rel="noopener noreferrer" className="underline">
                Twitter (@snapinsta)
              </a>
            </li>
            <li>
              <a href="https://facebook.com/snapinsta" target="_blank" rel="noopener noreferrer" className="underline">
                Facebook (SnapInsta)
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 text-purple-400">Support Form</h2>
          <p className="text-gray-300">
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>

          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-400">Your Name</label>
              <input
                type="text"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400">Your Email</label>
              <input
                type="email"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400">Message</label>
              <textarea
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-400 mt-6">We usually respond within 24-48 hours.</p>
      </div>
    </div>
  );
};

export default ContactUs;
