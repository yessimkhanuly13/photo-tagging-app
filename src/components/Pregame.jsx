import React from 'react'


function Pregame({start, data}) {
  return (
    <div style={{width:'100%', height:'100%', border:'1px solid'}}>

      <p>You gotta find this characters:</p>
      {data.map((element)=>(
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
            <div>
              <span>{element.character}</span>
              <img src={element.img} style={{width:"5rem", height:"3rem"}}/>
              </div>
          </div>
      ))}

      <button onClick={()=>start(true)}>Start</button>
  
   
    </div>
  )
}

export default Pregame
