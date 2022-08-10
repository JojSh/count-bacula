import React from 'react'
// import Dropdown from './Dropdown'

class EditableTime extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showMinutes: false,
      currentTime: new Date()
    }
    this.toggleSelected = this.toggleSelected.bind(this)
    this.handleEditTime = this.handleEditTime.bind(this)
  }

  toggleSelected (value, timeKey) {
    const newTime = this.state.currentTime
    if (timeKey === 'hour') newTime.setHours(value)
    if (timeKey === 'minute') newTime.setMinutes(value)
    this.setState({
      currentTime: newTime
    }, () => {
      this.props.onTimeChange(this.state.currentTime.getTime())
    })
  }

  handleEditTime (event) {
    const { target } = event
    const { value, name } = target
    const newTime = this.state.currentTime

    if (name === 'hour') newTime.setHours(value)
    if (name === 'minute') newTime.setMinutes(value)
    newTime.setSeconds(0)

    this.setState({
      currentTime: newTime
    }, () => {
      this.props.onTimeChange(this.state.currentTime)
    })

    // this.setState({
    //   hour: Number(value)
    // }, () => {
    //   this.updateUnits(event);
    // });
  }

  render () {
    const hour = this.state.currentTime.getHours()
    const minute = this.state.currentTime.getMinutes()
    // const second = this.state.currentTime.getSeconds()
    return (
      <div className='EditableTime'>
        <span className='hours'>
          <input
            type='number'
            name='hour'
            aria-label='hour-input'
            value={hour}
            onChange={this.handleEditTime}
          />
        </span>
        <span className='minutes'>
          <input
            type='number'
            name='minute'
            aria-label='minute-input'
            value={minute}
            onChange={this.handleEditTime}
          />
        </span>
        {/* <span className="minutes">
          :<Dropdown
            title='minute'
            value={minute}
            list={this.state.minutes}
            toggleSelected={this.toggleSelected}
          />
        </span> */}

        {/* { this.state.showMinutes && <span className="seconds">
          :<Dropdown
            title='second'
            value={second}
            list={this.state.seconds}
          />
        </span> } */}
      </div>
    )
  }
}

export default EditableTime
