import React from 'react';
import { calcUnits } from './Calculations';

class UnitsCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: '',
      abv: '',
      units: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const units = calcUnits(this.state.quantity, this.state.abv)
    this.setState({
      units: units
    });
    event.preventDefault();
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: Number(value)
    });
  }

  render() {
    return (
      <div className="UnitsCalculator">
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Calculate units" className="calc-units" />
          <div>Calculated units =</div>
          <div className="units-display" aria-label="units-display" >{this.state.units}</div>
        </form>
      </div>
    );
  }
}

export default UnitsCalculator;
