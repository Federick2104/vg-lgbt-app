import React from "react";
import lgbtImg from "../assets/lgbt.svg";

const Hero = () => {
  return (
    <div className="h-screen">
    <h1 className="mb-4 pt-[150px] text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Rainbow API: Diverse LGBT Video Games</h1>
    <section className="text-gray-600 body-font flex justify-center items-center">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">LGBT community
          <br className="hidden lg:inline-block"/>in videogames
        </h1>
        <p className="mb-8 leading-relaxed">I videogiochi hanno il potere di raggiungere un vasto pubblico e, includendo personaggi e storie LGBT, gli sviluppatori possono contribuire ad abbattere gli stereotipi e a promuovere la comprensione e l'accettazione.</p>
        <div className="flex justify-center">
          <a href={'https://schianchi-federico.notion.site/API-VIDEOGAMES-LGBT-ac61e73ba20f4bc8b830d56f131f39dd'} target="_blank" className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg">Explore</a>
          <a href={'https://schianchi-federico.notion.site/API-VIDEOGAMES-LGBT-ac61e73ba20f4bc8b830d56f131f39dd'} target="_blank" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Our API</a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-">
        <img className="object-cover object-center rounded" alt="hero" src={lgbtImg}/>
      </div>
    </div>
  </section>
</div>
  )
};

export default Hero;
