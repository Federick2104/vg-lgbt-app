import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero-image.webp";
import Spinner from "react-loading-indicators";

function Content() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(true)
      fetch("https://my-json-server.typicode.com/Federick2104/personaggi-lgbt-api/vg")
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData)
        })
        .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
      return <div className="flex justify-center"><Spinner style={{ fontSize: "20px" }} color="pink" /></div>;
    }
  
  return (
    <div className="p-10 grid grid-cols-4 gap-4">
      {data.map((p) => (
        <div key={p.id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={p.image} alt="lgbt"/>
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
  )
}

export default Content
