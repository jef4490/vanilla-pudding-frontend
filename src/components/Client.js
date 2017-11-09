import React from 'react';
import '../App.css';

const Client = (props) => {
  return(
    <div>
      <span>{props.Name}</span><a href="#" onClick={props.editClient}>(Edit)</a><a href="#" onClick={props.deleteClient}>(Delete)</a>
    </div>
  )
}

export default Client
