import React from 'react'

function Scoreboard({users}) {
  return (
    <div>
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
              <td style={{ borderBottom: '1px solid #ddd'}}>{el.time}</td>
            </tr>
            ))}
      </table>
    </div>
  )
}

export default Scoreboard