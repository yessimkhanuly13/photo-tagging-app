import React from 'react'
import DropdownItem from './DropdownItem'

function Dropdown({pos, coordinates, setVisible, compareCoords, filteredData, start}) {
    
    

    return (
        <div  style={{position:'absolute', left : pos.x - 30, top : pos.y + 30}}>
            <div style={{width:"4rem", height:"4rem", border:"0.15rem solid", borderRadius:"3rem"}}>

            </div>
                {coordinates.map((el)=>(
                    <DropdownItem 
                    data={el} 
                    setVisible={setVisible} 
                    position={compareCoords} 
                    coordinates={coordinates} 
                    filteredData={filteredData}
                    start={start}
                    />
                ))}
        </div>
  )
}

export default Dropdown