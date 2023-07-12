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
        <h1>Photo-tagging-app</h1>
        <button onClick={()=>handleView(viewScoreBoard)}>Scoreboard</button>
        <button onClick={()=>handleView(viewCharacters)}>Characters</button>
        {/* {characters && (<Characters />)} */}
        {start && (<Timer start={start}/>)}
        {start && (<button onClick={()=>setStart(false)} >Restart</button>)}
    </div>
  )
}

export default Navbar