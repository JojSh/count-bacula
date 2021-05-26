import React from 'react'

function Clock () {
  return (
    <section className='clock'>
      <h1>Current time:</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </section>
  )
}

export default Clock
