import React from 'react';
import DrinkCalculator from './DrinkCalculator';
import TotalUnits from './TotalUnits';
import Clock from './Clock';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkStore: [],
      totalUnits: 0,
    }

    this.handleSaveDrink = this.handleSaveDrink.bind(this);
  }

  handleSaveDrink(event, units) {
    event.preventDefault();
    const drinkToSave = {
      units: units,
      timeStamp: new Date().getTime(),
    }
    this.setState(() => ({
      drinkStore: [...this.state.drinkStore, drinkToSave],
      totalUnits: this.state.totalUnits + drinkToSave.units
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p aria-label="app-title">
            Count BACula
          </p>
        </header>
        <div className="top-row">
          <DrinkCalculator handleSaveDrink={this.handleSaveDrink}/>
          <TotalUnits totalUnits={this.state.totalUnits}/>
          <Clock />
        </div>
        
      </div>
    );
  }
}

export default App;
