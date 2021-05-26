import React from 'react'
import './Dropdown.scss'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleOpen () {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render () {
    const { list } = this.props
    return (
      <span className='Dropdown'>
        <span
          className='dropdown-header'
          onClick={() => this.toggleOpen()}
        >
          {this.props.value ? this.props.value : this.props.title}
        </span>

        {this.state.open && <ul className='dropdown-list'>
          {list.map((item, idx) => (
            <li
              className='dd-list-item'
              key={idx}
              onClick={() => this.props.toggleSelected(idx, this.props.title)}
            >{item}
            </li>
          ))}
        </ul>}
      </span>
    )
  }
}

export default Dropdown
