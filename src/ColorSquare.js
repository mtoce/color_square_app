import React from 'react'

const ColorSquare = ({ color }) => {

    return (
        <div 
            className='color_square'
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