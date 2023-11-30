import ColorSquare from './ColorSquare';
import { useState } from 'react';

function App({ colorName }) {

  const [color, setColor] = useState(colorName);

  return (
    <div className='App'>
    <main>
      <ColorSquare
        color={color}
      />
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
      />
    </main>
  </div>
  );
}

export default App;
