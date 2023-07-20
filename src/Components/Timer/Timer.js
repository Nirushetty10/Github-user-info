import React, { useState } from 'react'

function Timer() {
  const [count, setCount] = useState(0);

  function handleIncrement (){
    setCount(count+1);
  }

  function handleDecrement (){
    setCount(count-1);
  }


  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Timer