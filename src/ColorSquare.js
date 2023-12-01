import React from 'react'

const ColorSquare = ({ color }) => {

    return (
        <div 
            className='ColorSquare'
            style={{ backgroundColor: color }}
        >
            <p>{color.length ? color : "Empty Value" }</p>
        </div>
    )
}

ColorSquare.defaultProps = {
    color: "Empty Value",
}

export default ColorSquare