import './App.css';
import {useEffect, useState} from "react"
import img from './assets/pierre-roussel-xbox-web.jpg'
import Tags from './components/Tags';
import Navbar from './components/Navbar';
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function App() {
  const [tags, setTags] = useState([]);
  const [coordinates , setCoordinates] = useState([]);

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
    console.log(coordinates)
    
  },[])

  const handleClick = (e) =>{
    const newTag = {
      x:e.clientX, 
      y:e.clientY
    }
    setTags((prevTag)=>[...prevTag, newTag]);
    console.log(tags);
    console.log(coordinates)
  }

  return (
    <div className="App">
      <Navbar/>
      <img src={img} alt='imgss' onClick={handleClick}/>
      {
        tags.map((el)=>(
            <Tags tag={el}/>
        ))
      }
    </div>
  );
}

export default App;
