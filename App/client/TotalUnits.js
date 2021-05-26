import React from 'react'

function TotalUnits (props) {
  return (
    <section className='total-units' aria-label='total-units'>
      <h1>Total Units</h1>
      <h1>{props.totalUnits}</h1>
    </section>
  )
}

export default TotalUnits
