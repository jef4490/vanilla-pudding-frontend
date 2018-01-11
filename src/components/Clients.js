import React from 'react';
import axios from 'axios';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'

import {VanillaPuddingApi} from '../components/constants';
import { getClients, editClient, updateClient, deleteClient, addClient } from '../actions'
import Client from './Client';
import ClientDataTable from './ClientDataTable';
import ObjectForm from './ObjectForm';

class Clients extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeClient: {
        clientId: 0,
        emailAddress: "",
        name: "",
        notes: "",
        phoneNumber: ""
      },
      showDialog: false
    }
  }

  componentDidMount(){
    this.props.getClients()
    }

  render() {
    return (
      <div>
        <ClientDataTable clients={this.props.clients.clients}/>
        <Link to={'/clients/new'}>
          <Button raised color="primary"  style={{marginTop: "1em"}} onClick={this.newClient}>
           Create New
          </Button>
        </Link>
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
    getClients: getClients,
    deleteClient: deleteClient,
    updateClient: updateClient,
    addClient: addClient
  }, dispatch)
}

const ConnectedClients = connect(mapStateToProps, mapDispatchToProps)(Clients)

export default ConnectedClients
