import React from 'react';
import axios from 'axios';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {VanillaPuddingApi} from '../components/constants';
import { getClients, editClient, submitActiveClient, deleteClient } from '../actions'
import Client from './Client';
import Modal from 'react-modal';

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
      }
    }

    this.handleName = this.handleName.bind(this)
    this.submitActiveClient = this.submitActiveClient.bind(this)
  }

  handleName(fieldName, event){
    debugger;
    this.setState({activeClient: Object.assign({}, this.state.activeClient, {[fieldName]: event.target.value})})
  }

  submitActiveClient(){
    this.props.submitActiveClient(this.state.activeClient)
  }

  componentDidMount(){
    this.props.getClients()
    }

  componentWillReceiveProps(nextProps){
    this.setState({activeClient: nextProps.activeClient})
  }


  render() {
    let showClients = this.props.clients.clients.map((element) => {
        return(<Client key={element.clientId} Name={element.name} editClient={this.props.editClient.bind(null, element.clientId)} deleteClient={this.props.deleteClient.bind(null, element.clientId)}/>)
    })

    return (
      <div>
        <Modal
          isOpen={this.props.showDialog}
          contentLabel="Edit Client"
          shouldCloseOnOverlayClick={true}
        >
          <h3>Edit Client</h3>
          <div>
            <label>Email Address</label> <input type='textbox' value={this.state.activeClient.emailAddress}></input>
          </div>
          <div>
            <label>Name</label> <input type='textbox' onChange={this.handleName.bind(null, "name")} value={this.state.activeClient.name}></input>
          </div>
          <div>
            <label>Phone Number</label> <input type='textbox' value={this.state.activeClient.phoneNumber}></input>
          </div>
          <div>
            <label>Notes</label> <input type='textbox' value={this.state.activeClient.notes}></input>
          </div>
          <div>
            <button onClick={this.submitActiveClient}>Submit</button>
          </div>
        </Modal>
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
    clients: state.clients,
    showDialog: state.clients.editClient.showDialog,
    activeClient: state.clients.editClient.client
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClients: getClients,
    editClient: editClient,
    deleteClient: deleteClient,
    submitActiveClient: submitActiveClient
  }, dispatch)
}

const ConnectedClients = connect(mapStateToProps, mapDispatchToProps)(Clients)

export default ConnectedClients
