import React from 'react'

function DropdownItem({data, setVisible}) {
  return (
    <div style={{border:'1px solid', padding:"0.25rem", backgroundColor:"gray", color:"white"}} onClick={()=>{setVisible(false)}}>
        <p>{data.character}</p>
        {/* <img style={{width:'2rem', height:'1rem'}} src={data.img}/> */}
    </div>
  )
}

export default DropdownItem
