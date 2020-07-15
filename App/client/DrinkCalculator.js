import React from 'react';
import { calcUnits } from './Calculations';

class DrinkCalculator extends React.Component {
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

  render() {
    return (
      <section className="DrinkCalculator">
        <form onSubmit={(event) => this.props.handleSaveDrink(event, this.state.units)}>
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
            ? (<div className="total-units" >Total units = {this.state.totalUnits}</div>)
            : null
          }
        </form>
      </section>
    );
  }
}

export default DrinkCalculator;
