import React from 'react';
import axios from 'axios';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {VanillaPuddingApi} from '../components/constants';
import { getClients } from '../actions'
import Client from './Client';

class Clients extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.getClients();
    }


  render() {
    let showClients = this.props.clients.clients.map((element) => {
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

const mapStateToProps = (state) => {
  return ({
    clients: state.clients
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClients: getClients
  }, dispatch)
}

const ConnectedClients = connect(mapStateToProps, mapDispatchToProps)(Clients)

export default ConnectedClients
