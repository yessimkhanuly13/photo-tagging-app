import React from 'react'
import Characters from './Characters'


function Pregame({start, data}) {
  return (
    <div style={{width:'100%', height:'100%', border:'1px solid'}}>

      <p>You gotta find this characters:</p>
      <Characters data={data}/>

      <button onClick={()=>start(true)}>Start</button>
  
   
    </div>
  )
}

export default Pregame
