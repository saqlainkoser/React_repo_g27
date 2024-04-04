import React, { useState } from 'react'




export default function Background_changer() {
    
    let [color,setColor]=useState("pink");
    let [text_color,setTextColor]=useState("white");

  return (
    <div>
      <h1 style={{backgroundColor:color , color:text_color}}>This is Background Changer.</h1>
      <div className="container mt-10 flex flex-row gap-7 justify-center ">
        <button 
        onClick={()=>(setColor("green"))}
        className="bg-green-500 text-black">Green</button>
        <button 
        onClick={()=>(setColor("yellow") , setTextColor("black"))}
        className="bg-yellow-500 text-black">Yellow</button>
        <button 
        onClick={()=>(setColor("violet"))}
        className="bg-violet-500 text-black" > Violet</button>
    </div>
    </div>
  )
}
