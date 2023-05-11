import React, { useEffect, useState } from "react";
import lgbt_relation from "../assets/lgbt_relation.webp";
import Spinner from 'react-loading-indicator';

function Content() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
      setIsLoading(true)
      fetch("https://my-json-server.typicode.com/Federick2104/personaggi-lgbt-api/vg")
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
    

   let filteredData = searchInput ? stableData.filter((p) => p.name.toLowerCase().includes(searchInput.toLowerCase())) : stableData;
    
  return (
    <>
     <form className='p-10'>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" onChange={handleChange} value={searchInput} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#4F45E4] focus:border-[#4F45E4] dark:bg-[#ebebec] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#4F45E4] dark:focus:border-[#4F45E4]" placeholder="Search champion, characters name..." required/>
        </div>
    </form>
     <div className="p-10 grid grid-cols-4 gap-4 min-h-full grid-flow-row">
      {filteredData.map((p) => (
        <div key={p.id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={p.image} alt="lgbt" onError={ImgError}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{p.name}</div>
          <p className="text-gray-700 text-base">
            {p.game}
          </p>
          <p className="text-gray-700 text-base">
            {p.orientation}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
        </div>
      </div>
      )
      )}
    </div>
    </>
   
  )
}

export default Content
