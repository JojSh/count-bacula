import React from 'react';
import DrinkCalculator from './DrinkCalculator';
import { calcUnitsMetabBy } from './Calculations';
import TotalUnits from './TotalUnits';
import Clock from './Clock';
import DrinksList from './DrinksList';
import BedTime from './BedTime';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkStore: [],
      totalUnits: 0,
      bedTimeUnits: 0,
    }

    this.handleSaveDrink = this.handleSaveDrink.bind(this);
  }

  handleSaveDrink(event, units) {
    event.preventDefault();
    const drinkToSave = {
      units: units,
      timeStamp: new Date().getTime(),
    }
    const unitsToSave = Number((this.state.totalUnits + drinkToSave.units).toFixed(3))
    const timeNow = new Date()
    const bedTimeToday = new Date()
    bedTimeToday.setHours(23)
    bedTimeToday.setMinutes(0)

    this.setState(() => ({
      drinkStore: [...this.state.drinkStore, drinkToSave],
      totalUnits: unitsToSave,
      bedTimeUnits: calcUnitsMetabBy(unitsToSave, bedTimeToday, timeNow)
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
        <div className="bottom-row">
          <DrinksList drinkStore={this.state.drinkStore}/>
          <BedTime bedTimeUnits={this.state.bedTimeUnits}/>
        </div>
        
      </div>
    );
  }
}

export default App;
