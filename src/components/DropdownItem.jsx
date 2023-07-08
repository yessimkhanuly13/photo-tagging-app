import React from 'react'

function DropdownItem({data, setVisible}) {
  return (
    <div style={{border:'1px solid', padding:"0.25rem", backgroundColor:"gray", color:"white"}} onClick={()=>{setVisible(false)}}>
      {data.character}
    </div>
  )
}

export default DropdownItem
