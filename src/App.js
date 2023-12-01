import ColorSquare from './ColorSquare';
import UserInput from './UserInput';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('');

  return (
    <main className='App'>
      <ColorSquare
        color={color}
      />
      <UserInput
        color={color}
        setColor={setColor}
      />
    </main>
  );
}

export default App;
