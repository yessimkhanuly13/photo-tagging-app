import React from 'react'
import { useState} from "react"
import img from '../assets/pokemonimg.jpg'
import Dropdown from './Dropdown';

function Game({coordinates}) {
    const [isVisible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x : 0, y : 0 })
    
  
   
  
    const handleClick = (e) =>{
      
      const imageRect = e.target.getBoundingClientRect();
  

      const newTag = {
        x: e.clientX - imageRect.left,
        y: e.clientY - imageRect.top ,
      }
      console.log(newTag)
      setPosition(newTag)
      setVisible(true);
  
    }

  return (

    <div className='game'>
       
          <img className='image-tag' src={img} alt='imgss' onClick={handleClick} style={{height:'auto', width:'100%'}}/>
      
      {
        isVisible && (<Dropdown pos={position} coordinates={coordinates} setVisible={setVisible}/>)
      }

    </div>
 
  )
}

export default Game
