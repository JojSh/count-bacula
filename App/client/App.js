import React from 'react';
import UnitsCalculator from './UnitsCalculator';
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Count BACula
          </p>
        </header>
        <UnitsCalculator />
      </div>
    );
  }
}

export default App;
