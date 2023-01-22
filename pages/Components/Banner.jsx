import React from 'react'
import Image from 'next/image'

const Banner = () => {
    const image = "https://rare-gallery.com/uploads/posts/344549-Beautiful-Mountain-Nature-Colorful-Scenery-Minimalist-Digital-Art.jpg"
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2lx:h-[1080px]">
           
            <Image
            src={image}
            alt="test"
            layout="fill"
            objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center ">
                <p className="text-sm sm:text-lg text-gray-700">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full
                font-bold my-3 hover:shadow-xl
                active:scale-90 transition duration-150">I'm Flexible</button>
            </div>
            
        </div>
    )
}

export default Banner
