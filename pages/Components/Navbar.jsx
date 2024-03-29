import React, {useEffect, useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
    
    const logo = 'https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg'
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.newstartDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                noOfGuests
            }
        })
    }
 

    return (
        <>
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* Left */}
        <div 
        onClick={() => router.push("/")}
        className="relative flex items-center h-12 cursor-pointer my-auto">
           
            <Image
                alt="test"
                src={logo}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
            />
        </div>

        {/* search */}
        <div className="flex items-center md:border-2 rounded-full py-2 
        md:shadow-sm">
            <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600" 
            value={searchInput}
            type="text" 
            placeholder="Start your search"
            onChange={(e) => setSearchInput(e.target.value)}
            />
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white 
                                            rounded-full p-2 cursor-pointer md:mx-2" 
                                            />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-600">
            <div className="flex items-center space-x-2 p-2 rounded-full cursor-pointer hover:bg-gray-100 hover:shadow-md">
                <p className="hidden md:inline">Airbnb your home</p>
            </div>
            <GlobeAltIcon className="hidden h-6 md:inline hover:shadow-md cursor-pointer space-x-2 rounded-full" />
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md">
                <Bars3Icon className="h-6"/>
                <UserCircleIcon className="h-6 "/>
            </div>
        </div>

        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto pt-5">

                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                />

                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl pl-2 flex-grow">
                        Number of Guests
                    </h2>
                    <UsersIcon className="h-5" />
                    <input
                        className="w-12 pl-2 text-lg outline-none text-red-400"
                        value={noOfGuests}
                        onChange={(e) => setNoOfGuests(e.target.value)}
                        min={1}
                        type="number" 
                    />
                </div>
                <div className="flex">
                    <button className="flex-grow text-gray-500"
                    onClick={resetInput}>
                        Cancel
                    </button>
                    <button
                    onClick={search} 
                    className="flex-grow text-red-400">
                        Search
                    </button>
                </div>
            </div>
        )}

        </header>
        </>
    )
}

export default Navbar
