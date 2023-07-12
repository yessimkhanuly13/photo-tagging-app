import React from 'react'

function Scoreboard({users}) {
  return (
    <div style={{position:'absolute', top:'10%', left:'60%', color:'white', backgroundColor:"black"}}>
      <table>
        <thead style={{textAlign:'left'}}>
          <tr>
            <td style={{width:'10rem', fontWeight:'bold'}}>Name</td>
            <td style={{width:'10rem', fontWeight:'bold'}}>Time</td>
          </tr>
        </thead>
            {users.map((el)=>(
            <tr>  
              <td style={{ borderBottom: '1px solid #ddd'}}>{el.name}</td>
              <td style={{ borderBottom: '1px solid #ddd'}}>{ el.time/3600 >= 1 ? Math.floor(el.time/3600) + " h: " : ""} {el.time/60 >= 1 ?  Math.floor(el.time/60) + " min : " : ""} {el.time % 60 + " sec"}</td>
            </tr>
            ))}
      </table>
    </div>
  )
}

export default Scoreboard