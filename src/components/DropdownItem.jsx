import React from 'react'


function DropdownItem({data, setVisible, position, filteredData, coordinates, start}) {

  const checkCharacter = () =>{
    if(data.x <= position.xPos + 3 && data.x >= position.xPos - 3 && data.y <= position.yPos + 3 && data.y >= position.yPos - 3 ){
        // const filteredData = data.filter((el) => el.id !== data.id);  

        filteredData(data)
        
    }
  }
  return (
    <div style={{border:'1px solid', padding:"0.25rem", backgroundColor:"gray", color:"white", cursor:'pointer'}} onClick={()=>{setVisible(false)}}>
        <p onClick={()=>{checkCharacter()}}>{data.character}</p>
        {/* <img style={{width:'2rem', height:'1rem'}} src={data.img}/> */}
    </div>
  )
}

export default DropdownItem
