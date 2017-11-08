import React from 'react';
import '../App.css';

const Client = (props) => {
  return(
    <div>
      <span>{props.Name}</span> <a href="#" onClick={props.editClient}>(Edit)</a>
    </div>
  )
}

export default Client
