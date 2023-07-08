import React from 'react'

function InputUsername({setUser, setUsername}) {
  return (
    <div className='input-username'>
      <input onChange={(e)=>setUsername(e.target.value)} />
      <button onClick={()=>setUser(true)}>Start</button>
    </div>
  )
}

export default InputUsername
