import React from 'react';


import {useState} from 'react'

const First = () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  
  
  return (
    <div className='btn' >
      <button onClick={inc} >   +   </button >
      {count}
     
    </div>
  )
  }

export default First;