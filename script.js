import React from 'react';
import CounterButtonFunc from './CounterButtonFunc.js';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'My Counter App'),
    React.createElement(CounterButtonFunc)
  );
}

export default App;
