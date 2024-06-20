import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    useEffect(()=>{
        console.log("Starting point");
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())
        .then(result=>{setData(result); console.log(result);})
        .catch(err=>setError(true))
    },[])
  return (
    <div>
        {error ? (
        <div>Something went wrong</div>
      ) : (
        <>
          <ul>
            {data.map(x => (
              <li key={x.id}>{x.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default UseEffect