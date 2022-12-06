import React, { useState } from 'react'

const Third = () => {
  const [isActive, setIsActive ] = useState(false);
  const Handlecolor = () => {
    setIsActive(!isActive)
  }

  return (
    <div style={{backgroundColor: isActive ? 'black' :'white', height:'100vh'}}>
      <h1 style={{ color: 'orange' }}> HELLO! </h1>
      {isActive ? 
      <button onClick={Handlecolor}>
            Light Mode
      </button> :  <button onClick={Handlecolor}>
            Dark Mode
      </button>}
    </div>
  )
}

export default Third;


