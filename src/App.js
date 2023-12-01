import ColorSquare from './ColorSquare';
import UserInput from './UserInput';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <main className='App'>
      <ColorSquare
        color={color}
        hex={hex}
        isDarkText={isDarkText}
      />
      <UserInput
        color={color}
        setColor={setColor}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
