import React from "react";
import AdComponent from "./AdComponent";
import AdSenseComponent from "./AdSenseGoogle";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
        {/* Ad Placement for square */}
        <div className="flex items-center justify-center  p-4  h-32 w-full">
          {/* <p className="text-gray-700">Ad Here</p> */}
          <AdSenseComponent
                adClient='ca-pub-3193442524605948'
                adSlot='5179184800'
              />
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-around w-full gap-6">
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
              <span className="text-3xl text-purple-600 font-bold">1</span>
            </div>
            <p className="mt-4 text-xs lg:text-sm font-semibold">Copy the Instagram Video URL.</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
              <span className="text-3xl text-purple-600 font-bold">2</span>
            </div>
            <p className="mt-4 text-xs lg:text-sm font-semibold">Paste the URL in the Box Above.</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
              <span className="text-3xl text-purple-600 font-bold">3</span>
            </div>
            <p className="mt-4 text-xs lg:text-sm  font-semibold">Click Download and Save Your Video.</p>
          </div>
        </div>

        {/* Ad Placement Square */}
        <div className="flex items-center justify-centerp-4  h-32 w-full">
          {/* <p className="text-gray-700">Ad Here</p> */}
          <AdSenseComponent
                adClient='ca-pub-3193442524605948'
                adSlot='5179184800'
              />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
