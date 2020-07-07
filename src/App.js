import React from 'react';
import Calculator from './Calculator';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Count BACular
          </p>
        </header>
        <Calculator >Some stuff</Calculator>
      </div>
    );
  }
}

export default App;
