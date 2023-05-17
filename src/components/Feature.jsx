import React from 'react'
import lgbt_relation from "../assets/lgbt_relation.webp";
import { testoFeature } from '../costanti/constant'
 
const Feature = () => {
  
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center h-full w-full" src={lgbt_relation}/>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">{testoFeature[0].title}</h2>
          <p className="leading-relaxed text-base">{testoFeature[0].text}</p>
          <a href={'https://schianchi-federico.notion.site/API-VIDEOGAMES-LGBT-ac61e73ba20f4bc8b830d56f131f39dd'} target="_blank" className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">{testoFeature[1].title}</h2>
          <p className="leading-relaxed text-base">{testoFeature[1].text}</p>
          <a href={'https://schianchi-federico.notion.site/API-VIDEOGAMES-LGBT-ac61e73ba20f4bc8b830d56f131f39dd'} target="_blank" className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">{testoFeature[2].title}</h2>
          <p className="leading-relaxed text-base">{testoFeature[2].text}</p>
          <a href={'https://schianchi-federico.notion.site/API-VIDEOGAMES-LGBT-ac61e73ba20f4bc8b830d56f131f39dd'} target="_blank" className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Feature