import React, { useContext } from 'react'
import { Sec } from '../App'


function Pregame({start, data}) {
  const {setSeconds} = useContext(Sec)

  const handleStart = () =>{
    start(true);
    setSeconds(0);
  }
  return (
    <div style={{width:'100%', height:'100%', textAlign:"center"}}>

      <p>You gotta find this characters:</p>
      {
        data.map((element)=>(
          <div>
            <p>{element.character}</p>
            <img src={element.img} alt={element.character} style={{width:'10rem', height:'10rem'}}/>
          </div>
        ))
      }
      <button onClick={()=>handleStart()}>Start</button>
  
   
    </div>
  )
}

export default Pregame
