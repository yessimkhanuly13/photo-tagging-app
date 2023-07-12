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
    const data = {name: gameOver.name, time: gameOver.seconds}
    addToScoreboard(data)
    start(false)
  }

  return (
    <div className='input-username'>
      <input onChange={(e)=>handleGameOver(e.target.value)} />
      <button onClick={()=>insertData()}>Enter</button>
    </div>
  )
}

export default InputUsername
