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
    <div style={{position:'absolute', top:'20%', left:'30%', color:'white', backgroundColor:"black"}}>
      <table style={{textAlign:'center'}}>
        <thead style={{textAlign:'center'}}>
          <tr>
            <td style={{width:'20rem', fontWeight:'bold', borderBottom: '1px solid #ddd'}}>Name</td>
            <td style={{width:'20rem', fontWeight:'bold', borderBottom: '1px solid #ddd'}}>Time</td>
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