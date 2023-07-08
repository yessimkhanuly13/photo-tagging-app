import React from 'react'
import DropdownItem from './DropdownItem'

function Dropdown({pos, coordinates, setVisible}) {
    return (
        <div  style={{position:'absolute', left : pos.x, top : pos.y }}>
                {coordinates.map((el)=>(
                    <DropdownItem data={el} setVisible={setVisible}/>
                ))}
        </div>
  )
}

export default Dropdown