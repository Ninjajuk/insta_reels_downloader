import React from 'react'

const OurMission = () => {
    return (
        <section className="flex flex-col-reverse gap-2 md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/images/ourmission.png"
                    alt="Instagram Profile on Phone"
                    className="rounded-lg shadow-lg max-w-full h-auto md:max-w-md"
                />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-purple-800">Our Mission</h2>
                <p className="text-gray-600 mt-4">
                    At Instaninja, we aim to empower users by offering a reliable platform for donloading Instagram Videos and reels, enhancing your social media experience effortlessly.
                </p>
                {/* <button className="mt-6 px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
                    Download
                </button> */}
            </div>

        </section>
    )
}

export default OurMission