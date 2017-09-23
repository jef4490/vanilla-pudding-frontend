import React from 'react';
import axios from 'axios';
import {VanillaPuddingApi} from '../components/constants';

class Clients extends React.Component {
  constructor(){
    super()

    this.state={
      clients: []
    }
  }

  componentDidMount(){
    debugger;
    axios
      .get(`${VanillaPuddingApi}/clients`)
      .then(({data}) => {
        debugger;
      })
      .catch((errors)=>{
        console.log(errors)
      })
    }


  render() {
    return (
      <div>
        HERE ARE THE CLIENTS!
      </div>
    );
  }
}

export default Clients
