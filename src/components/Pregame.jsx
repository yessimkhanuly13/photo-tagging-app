import React, { useContext } from 'react'
import { Sec } from '../App'
import { FaGithub } from "react-icons/fa";



function Pregame({start, data}) {
  const {setSeconds, setGameOver, gameOver} = useContext(Sec)

  const handleStart = () =>{
    start(true);
    setSeconds(0);
    setGameOver({name:'', seconds:0, isOver:false})
    console.log(gameOver)
  }
  return (
    <div style={{width:'100%', height:'100%', textAlign:"center", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

      <h1>Characters:</h1>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'2rem'}}>
        {
          data.map((element)=>(
            <div>
              <p>{element.character}</p>
              <img src={element.img} alt={element.character} style={{width:'20rem', height:'20rem'}}/>
            </div>
          ))
        }
      </div>

      <button style={{marginTop:'3rem'}} onClick={()=>handleStart()}>Start</button>
      <a style={{textDecoration:'none', position:'absolute', top:'95%', left:'47%'}} href="https://github.com/yessimkhanuly13">
            yessimkhanuly13 <FaGithub /> 
          </a>
    </div>
  )
}

export default Pregame
