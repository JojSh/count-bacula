import React from 'react';
import { calcUnits } from './Calculations';

class UnitsCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: '',
      abv: '',
      units: '',
      drinkStore: [],
      totalUnits: 0,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveDrink = this.handleSaveDrink.bind(this);
  }

  updateUnits(event) {
    const units = calcUnits(this.state.quantity, this.state.abv)
    this.setState({
      units: units
    });
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: Number(value)
    }, () => {
      this.updateUnits(event);
    });
  }

  handleSaveDrink(event) {
    const drinkToSave = {
      units: this.state.units,
      timeStamp: new Date().getTime(),
    }
    const drinksSoFar = this.state.drinkStore
    const unitsSoFar = this.state.totalUnits
    event.preventDefault();
    this.setState({
      drinkStore: [...drinksSoFar, drinkToSave],
      totalUnits: unitsSoFar + drinkToSave.units
    });
  }



  render() {
    return (
      <div className="UnitsCalculator">
        <form onSubmit={this.handleSaveDrink}>
          <label>
              Quantity
              <input
                type="number"
                name="quantity"
                aria-label="quantity-input"
                value={this.state.quantity}
                onChange={this.handleInputChange}
              />
              ml
          </label>
          <label>
            Abv
              <input
                type="number"
                name="abv"
                aria-label="abv-input"
                value={this.state.abv}
                onChange={this.handleInputChange}
              />
              %
          </label>
          <div
            className="units-display"
            aria-label="units-display"
          >= {this.state.units}</div>
          <input type="submit" value="Add drink" className="save-drink" />
          {
            this.state.totalUnits > 0
            ? (<div className="total-units" aria-label="total-units">Total units = {this.state.totalUnits}</div>)
            : null
          }
        </form>
      </div>
    );
  }
}

export default UnitsCalculator;
