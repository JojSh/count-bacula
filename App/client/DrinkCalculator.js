import React from 'react'
import { calcUnits } from './Calculations'
import EditableTime from './generic/EditableTime'

class DrinkCalculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 500,
      abv: 4,
      units: '',
      drinkTime: new Date().getTime(),
      totalUnits: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  updateUnits () {
    const units = calcUnits(this.state.quantity, this.state.abv)
    this.setState({ units })
  }

  handleInputChange (event) {
    const { target } = event
    const { value, name } = target

    this.setState({
      [name]: Number(value)
    }, () => {
      this.updateUnits(event)
    })
  }

  handleTimeChange (newTime) {
    this.setState({ drinkTime: newTime })
  }

  componentDidMount () {
    this.updateUnits()
  }

  render () {
    return (
      <section className='DrinkCalculator'>
        <form onSubmit={event => this.props.handleSaveDrink(event, this.state.units, this.state.drinkTime)}>
          <label>
            Quantity
            <input
              type='number'
              name='quantity'
              aria-label='quantity-input'
              value={this.state.quantity}
              onChange={this.handleInputChange}
            />
            ml
          </label>
          <label>
            Abv
            <input
              type='number'
              name='abv'
              aria-label='abv-input'
              value={this.state.abv}
              onChange={this.handleInputChange}
            />
            %
          </label>
          <label>
            <EditableTime handleTimeChange={this.handleTimeChange} />
          </label>
          <div
            className='units-display'
            aria-label='units-display'
          >= {this.state.units}
          </div>
          <input type='submit' value='Add drink' className='save-drink' />
          {
            this.state.totalUnits > 0
              ? (<div className='total-units'>Total units = {this.state.totalUnits}</div>)
              : null
          }
        </form>
        <button onClick={() => this.props.handleRemoveLastDrink()}> Remove the last drink</button>
      </section>
    )
  }
}

export default DrinkCalculator
