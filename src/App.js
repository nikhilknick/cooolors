import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColors[1]}/>
    </div>
  );
}

export default App;
