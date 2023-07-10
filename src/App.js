import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import { useState, useEffect } from 'react';
import Pregame from './components/Pregame';
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Characters from './components/Characters';


function App() {
  const [coordinates , setCoordinates] = useState([]);
  const [start, setStart] = useState(false);
  const [viewCharacters, setViewCharacters] = useState(false);

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

  return (
    <div className="App">
      <Navbar start={start} setStart={setStart} viewCharacters={setViewCharacters}/>
      {!start && (<Pregame start={setStart} data={coordinates}/>)}
      {start && (<Game coordinates={coordinates}/>)}
      {viewCharacters && (<Characters data={coordinates} viewCharacters={setViewCharacters}/>)}
    </div>
  );
}

export default App;
