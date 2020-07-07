import React from 'react';

class Calculator extends React.Component {
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
    const units = (this.state.quantity * this.state.abv) / 1000
    console.log('units =' , units);
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
      <div className="Calculator">
        <form onSubmit={this.handleSubmit}>
          <label>
              Quantity
              <input
                type="number"
                name="quantity"
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
                value={this.state.abv}
                onChange={this.handleInputChange}
              />
              %
          </label>
          <input type="submit" value="Calculate units" className="calc-units" />
          <div> Calculated units =</div>
          <div className="units-display" >{this.state.units}</div>
        </form>
      </div>
    );
  }
}

export default Calculator;
