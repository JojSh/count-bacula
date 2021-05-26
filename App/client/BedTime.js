import React from 'react'

function BedTime (props) {
  return (
    <section className='bed-time'>
      <h1>Bed time: 23:00</h1>
      <h1>Units remaining: {props.bedTimeUnits}</h1>
    </section>
  )
}

export default BedTime
