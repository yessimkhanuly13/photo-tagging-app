import React from 'react'

function Scoreboard({users}) {
  return (
    <div>
        {users.map((el)=>(<li>{el.name} {el.time}</li>))}
    </div>
  )
}

export default Scoreboard