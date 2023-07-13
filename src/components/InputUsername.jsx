import React, { useContext } from 'react'
import { Sec } from '../App'

function InputUsername({start}) {

  const {gameOver, setGameOver, addToScoreboard} = useContext(Sec)

  const handleGameOver = (data) =>{
    
    setGameOver((prevGameOver)=>({
      ...prevGameOver,
      name:data
    }))
    console.log(gameOver)
  }

  const insertData = () => {
    
    if(gameOver.name === ''){
      return;
    }

    const data = {name: gameOver.name, time: gameOver.seconds}
    addToScoreboard(data)
    start(false)
  }

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'30rem', height:'30rem'}}>
      <h1 style={{color:'	#00FF00', marginBottom:'4rem'}}>You won!</h1>
        <label htmlFor="my-name">Your Name:</label>
        <input id='my-name' style={{width:'25rem', height:'2.5rem', fontSize:'1.8rem'}}  onChange={(e)=>handleGameOver(e.target.value)} required/>
        <button style={{marginTop:'4rem'}} onClick={()=>insertData()}>Enter</button>

    </div>
  )
}

export default InputUsername
