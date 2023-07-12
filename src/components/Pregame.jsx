import React, { useContext } from 'react'
import { Sec } from '../App'


function Pregame({start, data}) {
  const {setSeconds, setGameOver, gameOver} = useContext(Sec)

  const handleStart = () =>{
    start(true);
    setSeconds(0);
    setGameOver({name:'', seconds:0, isOver:false})
    console.log(gameOver)
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
