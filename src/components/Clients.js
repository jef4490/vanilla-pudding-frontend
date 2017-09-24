import React from 'react';
import axios from 'axios';
import {VanillaPuddingApi} from '../components/constants';

class Clients extends React.Component {
  constructor(props){
    super(props)

    this.state={
      clients: []
    }
  }

  getClients(){
    debugger;
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
      debugger;
        return(<li>
          {element.name}
        </li>)
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
