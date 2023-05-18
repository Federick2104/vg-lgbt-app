import React from 'react'
import lgbtImg from "../assets/lgbt.svg";

const ApiCard = ( { title, desc, img, url }) => {
  return (
    <section className="text-gray-600 body-font flex justify-center items-center">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> 
            {title}
            <br className="hidden lg:inline-block"/>
        </h1>
        <p className="mb-8 leading-relaxed">{desc}</p>
        <div className="flex justify-center">
          <a href={url} target="_blank" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Link to Api</a>
          <a href={url} target="_blank" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore</a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-">
      <img className="object-cover object-center rounded w-full h-[300px]" alt="img" src={img}/>
    </div>
  </div>
  </section>
  )
}

export default ApiCard