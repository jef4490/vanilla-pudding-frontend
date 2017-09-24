import React from 'react';
import {Link} from 'react-router-dom'

const Test = () => {
  return (
      <div>
        <p>Links:</p>
        <Link to={'/clients'}>Clients</Link>
      </div>
  )
}

export default Test
