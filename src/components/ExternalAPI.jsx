import React, { useEffect, useState } from "react";
import lgbt_relation from "../assets/lgbt_relation.webp";
import Spinner from 'react-loading-indicator';

function Content() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchInput, setSearchInput] = useState("")
  const [isShown, setIsShown] = useState(false);
 

    useEffect(() => {
      setIsLoading(true)
      fetch("https://tdpomo.vercel.app/api/gayfamosi")
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData)
        })
        .finally(() => setIsLoading(false))
    }, [])
    let stableData = data

    if (isLoading) {
      return <div className="flex justify-center"><Spinner style={{ fontSize: "20px" }} color="pink" /></div>;
    }

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    
    function ImgError (e){
      e.target.src = lgbt_relation
    }

    const handleClick = event => {
        setIsShown(current => !current);
        
      };
    

   let filteredData = searchInput ? stableData.filter((p) => p.nome.toLowerCase().includes(searchInput.toLowerCase())) : stableData;
    
  return (
    <div id='content'>
        <h1 className="my-10 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Personaggi LGBT famosi</h1>
        <div className="flex justify-center">
        <button className="w-[12rem] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-10" onClick={handleClick}>{!isShown ? 'Vedi esempio 🏳️‍🌈' : "Chiudi Esempio 🏳️‍🌈"}</button>
        </div>
     {isShown && (<form className='p-10'> 
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" onChange={handleChange} value={searchInput} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#4F45E4] focus:border-[#4F45E4] dark:bg-[#ebebec] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#4F45E4] dark:focus:border-[#4F45E4]" placeholder="Search singer, actor..." required/>
        </div>
    </form>)}
    {isShown && (<div className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-full grid-flow-row justify-center">
      {filteredData != undefined ? filteredData.map((p) => (
        <div key={p.id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-[200px]" src={p.img} alt="lgbt" onError={ImgError}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{p.nome}</div>
          <p className="text-gray-700 text-base">
            {p.nazione}
          </p>
          <p className="text-gray-700 text-base">
            {p.categoria}
          </p>
          <a className="text-gray-700 text-base" target="_blank" href={p.url}>Learn More ➡️</a>
        </div>
      </div>
      )
      ) : console.log("error in loading data")}
    </div>)}
    </div>
   
  )
}

export default Content
