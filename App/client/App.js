import React from 'react'
import DrinkCalculator from './DrinkCalculator'
import { calcUnitsMetabBy } from './Calculations'
import TotalUnits from './TotalUnits'
import Clock from './Clock'
import DrinksList from './DrinksList'
import BedTime from './BedTime'
import './App.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drinkStore: [],
      totalUnits: 0,
      bedTimeUnits: 0
    }

    this.handleSaveDrink = this.handleSaveDrink.bind(this)
    this.handleRemoveLastDrink = this.handleRemoveLastDrink.bind(this)
  }

  handleSaveDrink (event, units, timeStamp) {
    event.preventDefault()
    const drinkToSave = {
      units: units,
      timeStamp: timeStamp
    }

    const unitsToSave = Number((this.state.totalUnits + drinkToSave.units).toFixed(3))

    this.setState(() => ({
      drinkStore: [...this.state.drinkStore, drinkToSave],
      totalUnits: unitsToSave,
      bedTimeUnits: calcUnitsMetabBy(unitsToSave, this.getBedTimeToday(), timeStamp)
    }))
  }

  handleRemoveLastDrink () {
    const { drinkStore, totalUnits } = this.state
    if (!drinkStore.length) return
    const indexOfDrinkToRemove = drinkStore.length - 1
    const drinkToBeRemoved = drinkStore[indexOfDrinkToRemove]
    const drinksAfterLastRemoved = drinkStore.slice(0, indexOfDrinkToRemove)
    const unitsToSave = Number((totalUnits - drinkToBeRemoved.units).toFixed(3))
    this.setState(() => ({
      drinkStore: drinksAfterLastRemoved,
      totalUnits: unitsToSave
    }))
  }

  getBedTimeToday () {
    const bedTimeToday = new Date()
    bedTimeToday.setHours(23)
    bedTimeToday.setMinutes(0)
    return bedTimeToday
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <p aria-label='app-title'>
            Count BACula
          </p>
        </header>
        <div className='top-row'>
          <DrinkCalculator onSaveDrink={this.handleSaveDrink} onRemoveLastDrink={this.handleRemoveLastDrink} />
          <TotalUnits totalUnits={this.state.totalUnits} />
          <Clock />
        </div>
        <div className='bottom-row'>
          <DrinksList drinkStore={this.state.drinkStore} />
          <BedTime bedTimeUnits={this.state.bedTimeUnits} />
        </div>

      </div>
    )
  }
}

export default App
