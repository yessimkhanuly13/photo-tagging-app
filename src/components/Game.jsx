import React, { useContext } from 'react'
import { useState, useRef } from "react"
import img from '../assets/pokemonimg.jpg'
import Dropdown from './Dropdown';
import { Sec } from '../App';
import InputUsername from './InputUsername';

function Game({coordinates, setData, start}) {
    const [isVisible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x : 0, y : 0 })
    const [compareCoords, setCompareCoords] = useState({xPos:0, yPos:0})
    
    const imgRef = useRef();
  
    const {seconds, gameOver, setGameOver} = useContext(Sec)
  
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

    const filteredData = (data) =>{
      const filteredData = coordinates.filter((el)=>el.id !== data.id );
      setData(filteredData);

      if(coordinates.length === 1){
        // start(false)
        setGameOver({name:"", seconds:seconds, isOver:true})
      }

      console.log(gameOver)
    }

  return (

    <div className='game'>
       
        {!gameOver.isOver && (<img ref={imgRef} className='image-tag' src={img} alt='imgss' onClick={handleClick} style={{height:'auto', width:'100%'}}/>)}
        {gameOver.isOver && (<InputUsername start={start}/>)}
      {
        isVisible && (<Dropdown 
          pos={position} 
          coordinates={coordinates} 
          setVisible={setVisible} 
          compareCoords={compareCoords} 
          filteredData={filteredData}
          start={start}
          />)
      }

    </div>
 
  )
}

export default Game
