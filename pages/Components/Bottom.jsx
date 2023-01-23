import React from 'react'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/outline'

export const Bottom = () => {
    return (
        <header className="sticky bottom-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10 border-top bg-gray-100">
            <div className="relative flex items-center my-auto">
                <p className="text-sm flex-grow pl-5">© 2023 Aaron Joshua</p>
            </div>

            <div className="relative flex items-center">
                <p className="text-sm flex-grow pl-5 mx-auto"></p>
            </div>

            <div className="relative flex items-center mx-auto">
            <GlobeAltIcon className="hidden h-6 md:inline cursor-pointer space-x-2 rounded-full " />
                <p className="text-sm flex-grow pl-5 mx-auto col-span-3 cursor-pointer  hover:underline">English (US)</p>
            </div>
        </header>
        
    )
}

export default Bottom
