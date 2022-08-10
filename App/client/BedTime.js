import React from 'react'

function BedTime (props) {
  return (
    <section className='bed-time' aria-label="total-bed-time-units">
      <h1>Bed time: 22:00</h1>
      <h1>Units remaining: {props.bedTimeUnits}</h1>
    </section>
  )
}

export default BedTime
