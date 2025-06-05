import React from "react";

const AboutInstaninja = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-purple-800">About Instaninja</h2>
        <p className="text-gray-600 mt-4">
          At Instaninja, we specialize in providing seamless Instagram reels and
          video downloading solutions, making it easy for you to save and share
          your favorite content.
        </p>
        <button className="mt-6 px-6 py-2 border border-purple-800 rounded-full text-black hover:bg-purple-800 hover:text-white transition cursor-pointer">
          Download
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/instaprofile.png"
          alt="Instagram Profile on Phone"
          className="rounded-lg shadow-lg max-w-full h-auto md:max-w-md"
        />
      </div>
    </section>
  );
};

export default AboutInstaninja;
