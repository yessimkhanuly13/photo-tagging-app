import React from 'react'

function Characters({data}) {
  return (
    <div>
      {data.map((element)=>(
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
            <div>
              <p>{element.character}</p>
              <img src={element.img} style={{width:"10rem", height:"10rem"}}/>
              </div>
          </div>
      ))}
    </div>
  )
}

export default Characters
