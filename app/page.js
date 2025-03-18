"use client"
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] =useState("")
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5x1 font-bold text-center'>Pulkit's Todo List</h1>

      <from>
        <input type="text" className="text-2x1 text-whit border-zinc-800 bordre-4 m-8 px-4 py-2" 
        placeholder="Enter task here"
        value={title}
        onChange={(e)=>{
          console.log(e.target.value)
        }}
        /> 
        <input type="text" className="text-2x1 text-whit border-zinc-800 bordre-4 m-8 px-4 py-2" 
        placeholder="Enter Description here"/>
      <button className="bg-black text-white px-4 py-3 text-2x1 font-bold rounded m-5" >Add task</button>
      </from>

    </>  
  );
};

export default page