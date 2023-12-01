import React from 'react'

const ColorSquare = ({ color, hex, isDarkText }) => {

    return (
        <section 
            className='ColorSquare'
            style={{ 
                backgroundColor: color,
                color: isDarkText ? "#000" : "#FFF",
            }}
        >
            <p>{ color.length ? color : "Empty Value" }</p>
            <p>{ hex ? hex : null }</p>
        </section>
    )
}

ColorSquare.defaultProps = {
    color: "Empty Value",
}

export default ColorSquare