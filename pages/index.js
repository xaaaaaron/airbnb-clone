import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import { SmallCard } from './Components/SmallCard'
import { MediumCards } from './Components/MediumCards'
import { LargeCards } from './Components/LargeCards'
import { Bottom } from './Components/Bottom'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
   

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gird-cols-4">
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard
              key={img}
              img={img}
              location={location}
              distance={distance}
             />
          ))}
          </div>
        </section>

        <section className="pt-6">
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide">
        {cardsData?.map(({img, title}) => (
          <MediumCards key={img}
            img={img}
            title={title}/>
        ))}
        </div>
        </section>

        <section>
          <LargeCards
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="By Airbnb"
          buttonText="Get inspired" />
        </section>
      </main>
      
      <Bottom />
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
  .then((res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT")
  .then((res) => res.json()
  );


  return {
    props: {
      exploreData,
      cardsData
    }
  }
}