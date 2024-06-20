import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)

    const increament = () =>{
        setCount(count+1)
    }

    const decrememt = () =>{
        setCount(count-1)
    }
  return (
    <div>
        {count}
        <button onClick={increament}>Increment</button>
        <button onClick={decrememt}>Descrement</button>
    </div>
  )
}

export default UseState