import React from 'react'

function Pregame({start}) {
  return (
    <div>
      <form action="start">
        <label htmlFor="start">Username
            <input type="text" for="start" />
            <button onClick={()=>start(true)}>Start</button>
        </label>
      </form>
    </div>
  )
}

export default Pregame
