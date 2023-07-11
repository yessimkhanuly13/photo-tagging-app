import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import { useState, useEffect } from 'react';
import Pregame from './components/Pregame';
import { getDocs, addDoc } from 'firebase/firestore'
import Characters from './components/Characters';
import { characterCoordinates, scoreBoardList } from './config/firebase';
import Scoreboard from './components/Scoreboard';



function App() {
  const [coordinates , setCoordinates] = useState([]);
  const [start, setStart] = useState(false);
  const [viewCharacters, setViewCharacters] = useState(false);
  const [viewScoreBoard, setViewScoreboard] = useState(true);
  const [users, setUsers] = useState([]);

  const addToScoreboard = (data) =>{
     addDoc(scoreBoardList, data)
  };

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

    const getUsers = async() =>{
            //get coordinates from firestore
    const dataScore = await getDocs(scoreBoardList);
        setUsers(dataScore.docs.map((doc)=>({
              ...doc.data(),
              id : doc.id
            })))
          }
          getUsers();
          console.log(users)
  },[])

  return (
    <div className="App">
      <Navbar start={start} setStart={setStart} viewCharacters={setViewCharacters} addToScoreboard={addToScoreboard} viewScoreBoard={setViewScoreboard}/>
      {viewScoreBoard && <Scoreboard users={users}/>}
      {!start && (<Pregame start={setStart} data={coordinates}/>)}
      {start && (<Game coordinates={coordinates}/>)}
      {viewCharacters && (<Characters data={coordinates} viewCharacters={setViewCharacters}/>)}
    </div>
  );
}

export default App;
