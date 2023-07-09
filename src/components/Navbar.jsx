import React, { useState } from 'react'
import Timer from './Timer'
// import Characters from './Characters';

function Navbar({start, setStart}) {


  return (
    <div style={{
      backgroundColor:'white',
      width:'100%',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      height:'12%'
    }}>
        <h1>Photo-tagging-app</h1>
        <button onClick={()=>console.log('ddd')}>Scoreboard</button>
        <button onClick={()=>console.log('dd')}>Characters</button>
        {/* {characters && (<Characters />)} */}
        {start && (<Timer start={start}/>)}
        {start && (<button onClick={()=>setStart(false)} >Restart</button>)}
    </div>
  )
}

export default Navbar