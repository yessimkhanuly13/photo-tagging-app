import React from 'react'
import Timer from './Timer'

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
        {start && (<Timer start={start}/>)}
        {start && (<button onClick={()=>setStart(false)} >Restart</button>)}
    </div>
  )
}

export default Navbar