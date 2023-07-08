import React from 'react'

function Sidebar({data}) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <h2>Timer:</h2>
      {data.map((element)=>(
        <>
            <p>{element.character}</p>
            <img src={element.img} style={{width:"5rem", height:"3rem"}}/>
        </>
      ))}
    </div>
  )
}

export default Sidebar
