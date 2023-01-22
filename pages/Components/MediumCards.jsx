import React from 'react'
import Image from 'next/image'

export const MediumCards = ({img, title}) => {
    return (
        <div className="cursor-pointer hover:scale-105
        transform transition duration-300 ease-out">
           <div className="relative h-80 w-80">
               <Image
               className="rounded-xl"
               alt="test"
               src={img}
               layout="fill"
               />
           </div>
           <div>
               <h3>{title}</h3>
           </div>
       </div>
    )
}

export default MediumCards;
