import React from 'react';
import Dropdown from './Dropdown';

class EditableTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMinutes: false,
      currentTime: new Date(),
      hours: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      ],
      minutes: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59,
      ],
      seconds: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59,
      ],
    }
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(value, timeKey) {
    const newTime = this.state.currentTime
    if (timeKey === 'hour') newTime.setHours(value)
    if (timeKey === 'minute') newTime.setMinutes(value)
    this.setState({
      currentTime: newTime
    }, () => {
      this.props.handleTimeChange(this.state.currentTime)
    })
  }

  render() {
    const hour = this.state.currentTime.getHours();
    const minute = this.state.currentTime.getMinutes();
    const second = this.state.currentTime.getSeconds();
    return(
      <div className="EditableTime">
        <span className="hours">
          <Dropdown
            title='hour'
            value={hour}
            list={this.state.hours}
            toggleSelected={this.toggleSelected}
          />
        </span>
        <span className="minutes">
          :<Dropdown
            title='minute'
            value={minute}
            list={this.state.minutes}
            toggleSelected={this.toggleSelected}
          />
        </span>
        { this.state.showMinutes && <span className="seconds">
          :<Dropdown
            title='second'
            value={second}
            list={this.state.seconds}
          />
        </span> }
      </div>
    )
  }

}

export default EditableTime;
