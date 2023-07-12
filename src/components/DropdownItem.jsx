import React from 'react'

function DropdownItem({data, setVisible, position}) {
  const checkCharacter = () =>{
    if(data.x <= position.xPos + 3 && data.x >= position.xPos - 3 && data.y <= position.yPos + 3 && data.y >= position.yPos - 3 ){
      console.log("Works");
    }

    console.log("should be x:"+data.x + " y:" + data.y + " It is x:" + position.xPos + " y:" + position.yPos)
  }
  return (
    <div style={{border:'1px solid', padding:"0.25rem", backgroundColor:"gray", color:"white", cursor:'pointer'}} onClick={()=>{setVisible(false)}}>
        <p onClick={()=>{checkCharacter()}}>{data.character}</p>
        {/* <img style={{width:'2rem', height:'1rem'}} src={data.img}/> */}
    </div>
  )
}

export default DropdownItem
