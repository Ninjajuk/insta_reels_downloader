import React from 'react'
import AdSenseComponent from './AdSenseGoogle'

const Testimonial = () => {
    const comments =[
        { name: "Samsu", comment: "This app is fantastic! Super intuitive and fast." },
        { name: "Ajuking", comment: "I love the smooth experience. Highly recommended!" },
        { name: "Ananya", comment: "Great app! Helped me a lot in my daily tasks." },
        // { name: "Rahul", comment: "A must-have app! The features are outstanding." }
      ]
    return (
        <section className="max-w-6xl mx-auto py-12 bg-white relative flex flex-col items-center">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row">
                {/*square Left Ad */}
                {/* <div className="hidden lg:flex w-1/5 p-4 text-center">
                    <AdSenseComponent
                        adClient='ca-pub-3193442524605948'
                        adSlot='5179184800'
                    />
                </div> */}
                
                {/* Main Content */}
                <div className="w-full ">
                    <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                    <div className=" mx-auto ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {comments.map((item) => (
                                <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700"> {item.comment}</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                                            {item.name[0]}
                                        </div>
                                        <p className="ml-3 font-semibold">User {item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Right Ad */}
                {/* <div className="hidden lg:flex w-1/5  p-4  text-center">
                    <AdSenseComponent
                        adClient='ca-pub-3193442524605948'
                        adSlot='5179184800'
                    />
                </div> */}
            </div>
            
            {/* Bottom Full-Width Ad */}
            {/* <div className="mt-4 w-full h-64  p-4  text-center">
                <AdSenseComponent
                adClient='ca-pub-3193442524605948'
                adSlot='7096807683'
              />
            </div> */}
        </section>
    )
}

export default Testimonial
