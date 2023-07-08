import React from 'react'
import {useEffect, useState} from "react"
import img from '../assets/pierre-roussel-xbox-web.jpg'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Dropdown from './Dropdown';

function Game() {
    const [coordinates , setCoordinates] = useState([]);
    const [isVisible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x : 0, y : 0 })
  
    const characterCoordinates = collection(db, "coordinates")
    
  
    useEffect(()=>{
      const getCoordinates = async() =>{
        //get coordinates from firestore
        const data = await getDocs(characterCoordinates);
        setCoordinates(data.docs.map((doc)=>({
          ...doc.data(),
          id : doc.id
        })))
      }
      getCoordinates();
    },[])
  
    const handleClick = (e) =>{
      
      const newTag = {
        x: e.clientX,
        y: e.clientY,
      }
      setPosition(newTag)
      setVisible(true);
    }
  return (
    <div className='game'>
         <img className='image-tag' src={img} alt='imgss' onClick={handleClick} style={{height:'100vh', width:'55vw', border:"1px solid"}}/>
      {
        isVisible && (<Dropdown pos={position} coordinates={coordinates} setVisible={setVisible}/>)
      }
    </div>
  )
}

export default Game
