import React from 'react'

const UserInput = ({ color, setColor }) => {
  return (
    <form className='UserInput'>
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
            onChange={(e) => {setColor(e.target.value)}}
            autoFocus={true}
        />
    </form>
  )
}

export default UserInput