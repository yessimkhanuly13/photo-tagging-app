import React from 'react'
import Timer from './Timer'
// import Characters from './Characters';

function Navbar({start, setStart, viewCharacters, viewScoreBoard}) {
  
  const handleView = (viewCharacters) =>{
    viewCharacters((prevViewCharacter)=>{
      if(prevViewCharacter){
        return false;
      }else{
        return true;
      }
    })
  }

    

  return (
    <div style={{
      backgroundColor:'white',
      width:'100%',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      height:'60px'
    }}>
        <h1 onClick={()=>setStart(false)} style={{cursor:"pointer"}}>Photo-tagging-app</h1>
        {!start && <button onClick={()=>handleView(viewScoreBoard)}>Scoreboard</button>}
        {start && (<Timer start={start}/>)}
        {start && <button onClick={()=>handleView(viewCharacters)}>Characters</button>}
    </div>
  )
}

export default Navbar