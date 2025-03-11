import React from 'react'

const VideoDownloadingService = () => {

    const videoreels = [
        {
            title: 'Quick Videos Downloads',
            imgUrl: '/images/quickdownload.png',
            description: 'Instantly Save your favourite instagram videos and reels to your device with just one click'
        },
        {
            title: 'User_friendly Interface',
            imgUrl: '/images/userfriendlyinterface.png',
            description: 'Navigate effortlessly through our platform to download instagram content without any hassle or confusion'
        },
        {
            title: 'High Quality Downloads',
            imgUrl: '/images/highqualitydownloads.png',
            description: 'Access high quality video downloads from Instagram with our reliable and efficient service'
        }

    ]
    return (
        <section className='max-w-6xl mx-auto px-4 py-12 '>
            <h1 className='text-xl lg:text-5xl text-gray-900 font-extrabold  text-center pb-4'>Video Downloading Services</h1>
            <p className='text-gray-600 text-sm pb-8 text-center'>Easily download Instagram reels and videos with our user friendly tool for seamless access</p>
            <div className=' grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {videoreels.map((item, index) => (
                    <div key={index} className=''>
                        <div className='w-full h-52 '>
                            < img src={item.imgUrl} loading="lazy" alt={item.title} className='w-full h-full object-cover rounded-md' />
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-xl font-bold text-gray-900'>{item.title}</h1>
                            <p className='text-gray-600 text-sm text-center py-2'>{item.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </section>

    )
}

export default VideoDownloadingService