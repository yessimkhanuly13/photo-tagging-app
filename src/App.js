import './App.css';
import {useState} from "react"
import img from './assets/pierre-roussel-xbox-web.jpg'
import Tags from './components/Tags';
import Navbar from './components/Navbar';

function App() {
  const [tags, setTags] = useState([]);

  const handleClick = (e) =>{
    const newTag = {
      x:e.clientX, 
      y:e.clientY
    }
    setTags((prevTag)=>[...prevTag, newTag]);
    console.log(tags);
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
