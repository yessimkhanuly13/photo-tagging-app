import React from 'react'

function Characters({data}) {
  

  return (
    <div style={{position:"absolute", top:'15%', left:'80%'}}>
      {data.map((element)=>(
          <div style={{display:'flex', backgroundColor:"black", textAlign:"center", color:'white'}}>
            <div>
              <p>{element.character}</p>
              <img src={element.img} alt='character' style={{width:"10rem", height:"10rem"}}/>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Characters
