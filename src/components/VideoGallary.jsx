import React from 'react'

const VideoGallary = () => {
    const videogallary = [
        {
            title: 'Quick Videos Downloads',
            imgUrl: '/images/gallary1.png',
        },
        {
            title: 'User_friendly Interface',
            imgUrl: '/images/gallary2.png',
           
        },
        {
            title: 'High Quality Downloads',
            imgUrl: '/images/gallary3.png',
        },
        {
            title: 'Quick Videos Downloads',
            imgUrl: '/images/gallary4.png',
        },
        {
            title: 'User_friendly Interface',
            imgUrl: '/images/gallary5.png',
           
        },
        {
            title: 'High Quality Downloads',
            imgUrl: '/images/gallary6.png',
        }

    ]
    return (
        <section className='max-w-6xl mx-auto px-4 py-12 '>
            <h1 className='text-xl lg:text-5xl text-purple-800 font-extrabold  text-center pb-4'>Video Gallary</h1>
            <p className='text-gray-600 text-sm pb-8 text-center'>Explore our collections of Instagram reels and videos downloads</p>
            <div className=' grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
                {videogallary.map((item, index) => (
                    <div key={index} className='w-full h-58 '>
                        < img src={item.imgUrl} alt={item.title} className='w-full h-full object-cover rounded-md' />
                    </div>
                )
                )}
            </div>
        </section>
    )
}

export default VideoGallary