import React from 'react'

function Characters({data}) {
  

  return (
    <div style={{position:"absolute", top:'10%', left:'78%'}}>
      {data.map((element)=>(
          <div style={{display:'flex', backgroundColor:"white", textAlign:"center"}}>
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
