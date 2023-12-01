import React from 'react'
import colorNames from 'colornames';
// import { useRef } from 'react';
// import { MdFormatColorText } from "react-icons/md";

const UserInput = ({ color, setColor, setHex, isDarkText, setIsDarkText }) => {
    // const inputRef = useRef();

    return (
        <form className='UserInput' onSubmit={(e) => e.preventDefault()}>
            <label
                htmlFor='color_input'
                type='text'
            >
                Color Input
            </label>
            <input
                id='color_input'
                className='color_input'
                type='text'
                placeholder='Add color name'
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHex(colorNames(e.target.value));
                }}
                autoFocus
                // ref={inputRef}
                required
            />
            {/* <MdFormatColorText
                onClick={() => setIsDarkText(!isDarkText)}
                role="button"
                tabIndex="0"
                // width="50px"
                // height="50px"
                aria-label={`Toggle ${isDarkText}`}
            /> */}
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default UserInput