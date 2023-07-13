import React, { useEffect, useState } from 'react'

function Scoreboard({users}) {
  const [filteredUsers, setFilteredUsers] = useState([]);

  
  useEffect(()=>{
    users.sort((a, b)=>a.time - b.time);
    const filtered = users.slice(0, 10)
    setFilteredUsers(filtered)
    
    console.log(filteredUsers)
  },[])

  return (
    <div style={{position:'absolute', top:'15%', left:'60%', color:'white', backgroundColor:"black"}}>
      <table>
        <thead style={{textAlign:'left'}}>
          <tr>
            <td style={{width:'10rem', fontWeight:'bold'}}>Name</td>
            <td style={{width:'10rem', fontWeight:'bold'}}>Time</td>
          </tr>
        </thead>
            {
                filteredUsers.map((el)=>(
                  <tr>  
                    <td style={{ borderBottom: '1px solid #ddd'}}>{el.name}</td>
                    <td style={{ borderBottom: '1px solid #ddd'}}>{ el.time/3600 >= 1 ? Math.floor(el.time/3600) + " h: " : ""} {el.time/60 >= 1 ?  Math.floor(el.time/60) + " min : " : ""} {el.time % 60 + " sec"}</td>
                  </tr>
                ))
            }
      </table>
    </div>
  )
}

export default Scoreboard