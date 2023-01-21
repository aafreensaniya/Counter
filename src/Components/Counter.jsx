import React, { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);

  const handleClick=()=>{
    if(Count>0){
        setCount(Count-1)
    }
  }
  return (
    <div>
    <h1>{Count}</h1>
      <button onClick={() => setCount(Count + 1)}> INC</button>
      <button onClick={handleClick}> DEC</button>
    </div>
  );
};

export default Counter;
