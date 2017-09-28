import React from 'react';
import axios from 'axios';
import {VanillaPuddingApi} from '../components/constants';
import Client from './Client';

class Clients extends React.Component {
  constructor(props){
    super(props)

    this.state={
      clients: []
    }
  }

  getClients(){
    alert(VanillaPuddingApi)
  }

  componentDidMount(){
    axios
      .get(`${VanillaPuddingApi}/clients`)
      .then(({data}) => {
        this.setState({clients: data})
      })
      .catch((errors)=>{
        console.log(errors)
      })
    }


  render() {
    let showClients = this.state.clients.map((element) => {
        return(<Client Name={element.name}/>)
    })

    return (
      <div>
        <h3>Clients:</h3>
        <ul>
          {showClients}
        </ul>
      </div>
    );
  }
}

export default Clients;
