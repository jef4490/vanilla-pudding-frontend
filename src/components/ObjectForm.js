import React from 'react';
import '../App.css';

const ObjectForm = (props) => {
  var fields = Object.keys(props.object).filter((key) => {return !props.hiddenFields.includes(key)}).map((key) => {
    let propertyValue = props.object[key]
    return <div><label>{key}</label><input onChange={props.fieldHandler.bind(null, key)}value={propertyValue} handler></input></div>
  })
  return(
    <div>
      <h3>{props.title}</h3>
      {fields}
      <button onClick={props.submitHandler}>Submit</button>
    </div>
  )
}

export default ObjectForm
