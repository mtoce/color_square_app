function App() {
  return (
    <div className='App'>
      <main>
        <div className='color_square'>
          <p>Empty Value</p>
        </div>
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
        />
      </main>
    </div>
  );
}

export default App;
