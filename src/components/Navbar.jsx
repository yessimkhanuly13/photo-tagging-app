import React from 'react'
import Timer from './Timer'

function Navbar({start}) {
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
        <div>Scoreboard</div>
        <Timer start={start}/>
    </div>
  )
}

export default Navbar