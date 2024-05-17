import React, { useState } from 'react'

export default function B3() {
    const [color, setColor] = useState(1)
    const handleClick = (e:number) => {
        setColor(e)
    } 
  return (
    <div>
        <h1>bai 3</h1>
      <button onClick={()=>handleClick(1)} style={{color:color==1?"red":"blue"}}>Home</button>
      <button onClick={()=>handleClick(2)} style={{color:color==2?"red":"blue"}}>SP</button>
      <button onClick={()=>handleClick(3)} style={{color:color==3?"red":"blue"}}>GT</button>
      <button onClick={()=>handleClick(4)} style={{color:color==4?"red":"blue"}}>LH</button>
    </div>
  )
}
