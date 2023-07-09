import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import { useState } from 'react';
import Pregame from './components/Pregame';


function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <Navbar start={start}/>
      {!start && (<Pregame start={setStart}/>)}
      {start && (<Game/>)}
      
    </div>
  );
}

export default App;
