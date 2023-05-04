import React, { useState, useEffect } from 'react';

function Content() {
    const [data, setData] = useState();

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://my-json-server.typicode.com/Federick2104/vg-lgbt-api/db"
          )
        ).json();
  
        // set state when the data received
        console.log(data);
        setData(data);
      };
  
      dataFetch();
    }, []);

  return (
    <>
    <h1>Data fetch and showed</h1>
    <div className='h-screen'>
      
    </div>
    </>
    
  );
}

export default Content;
