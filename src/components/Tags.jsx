import React from 'react'

function Tags({tag}) {
  return (
    <div>
        <li>x:{tag.x}</li>
        <li>y:{tag.y}</li>
    </div>
  )
}

export default Tags