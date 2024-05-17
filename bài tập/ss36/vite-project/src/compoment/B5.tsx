import React, { useEffect, useState } from 'react'

export default function B5() {
    const [date,setDate] = useState<Date>(new Date())
    useEffect(() =>{
        setDate(new Date())
    },[])


  return (
    <div>
      <h1>bai 5</h1>
      <p>thoi gian hien tai : {date.toLocaleTimeString()}</p>
   
    </div>
  )
}
