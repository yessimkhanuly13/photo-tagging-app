import React from 'react'
import { useState, useRef } from "react"
import img from '../assets/pokemonimg.jpg'
import Dropdown from './Dropdown';

function Game({coordinates, setData}) {
    const [isVisible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x : 0, y : 0 })
    const [compareCoords, setCompareCoords] = useState({xPos:0, yPos:0})
    
    const imgRef = useRef();
   
  
    const handleClick = (e) =>{
      
      const imageRect = e.target.getBoundingClientRect();
      
      
      const newTag = {
        x: e.clientX - imageRect.left,
        y: e.clientY - imageRect.top ,
      }

      setPosition(newTag)
      setVisible(true);


      const x = imgRef.current.offsetWidth;
      const y = imgRef.current.offsetHeight;

      const xPos = (e.pageX/x) * 100; 
      const yPos = ((e.pageY - 60) /y) * 100;

      console.log(xPos)
      console.log(yPos)

      const newTagPercent = {
        xPos: xPos,
        yPos: yPos
      }

      setCompareCoords(newTagPercent);
    }

  return (

    <div className='game'>
       
          <img ref={imgRef} className='image-tag' src={img} alt='imgss' onClick={handleClick} style={{height:'auto', width:'100%'}}/>
      
      {
        isVisible && (<Dropdown pos={position} coordinates={coordinates} setVisible={setVisible} compareCoords={compareCoords} setData={setData}/>)
      }

    </div>
 
  )
}

export default Game
