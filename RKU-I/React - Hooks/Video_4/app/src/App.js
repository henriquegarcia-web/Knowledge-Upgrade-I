import React from 'react';

import './App.css';
import Counter from './Components/Counter';
import CounterViewer from './Components/CounterViewer';

import CountProvider from './Context/Count';

function App() {
  return (
    <CountProvider>
      <div className='App'>
        <Counter />
        <CounterViewer />
      </div>
    </CountProvider>
  );
}

export default App;
