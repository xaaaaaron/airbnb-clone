import React from 'react'
import Navbar from "./Components/Navbar"
import { useRouter } from 'next/dist/client/router';
import { format } from "date-fns"

const Search = () => {
    const router = useRouter();
    const {location, noOfGuests} = router.query
 
    return (
        <div className="h-screen">
            <Navbar />

            <main className="flex">
                <section className="flex-grow">
                    <p className="text-xs ml-5 pt-14">300+ Stays for {noOfGuests}  guests</p>
                    

                    <h1 className="text-3xl font-semibold mb-6 ml-5 pt-3">Stays in {location}</h1>

                    <div className="hidden md:inline-flex mb-5">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Places</p>
                        <p className="button">Prices</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                </section>
            </main>

        </div>
    )
}

export default Search
