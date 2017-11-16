import React from 'react';
import axios from 'axios';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {VanillaPuddingApi} from '../components/constants';
import { getClients, editClient, updateClient, deleteClient, addClient } from '../actions'
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
      },
      showDialog: false
    }

    this.handleField = this.handleField.bind(this)
    this.updateClient = this.updateClient.bind(this)
    this.editClient = this.editClient.bind(this)
    this.newClient = this.newClient.bind(this)
  }

  handleField(fieldName, event){
    this.setState({activeClient: Object.assign({}, this.state.activeClient, {[fieldName]: event.target.value})})
  }

  updateClient(){
    this.setState({showDialog: false})

    if(this.state.activeClient.clientId == 0){
      this.props.addClient(this.state.activeClient)
    }else{
      this.props.updateClient(this.state.activeClient)
    }

  }

  componentDidMount(){
    this.props.getClients()
    }

  componentWillReceiveProps(nextProps){
  }

  editClient(clientId){
    this.setState({showDialog: true, activeClient: this.props.clients.clients.find((client) => {return client.clientId === clientId})})
  }

  newClient(){
    this.setState({
      activeClient: {
        clientId: 0,
        emailAddress: "",
        name: "",
        notes: "",
        phoneNumber: ""
      },
      showDialog: true
    })
  }

  render() {
    let showClients = this.props.clients.clients.map((element) => {
        return(<Client key={element.clientId} Name={element.name} editClient={this.editClient.bind(null, element.clientId)} deleteClient={this.props.deleteClient.bind(null, element.clientId)}/>)
    })

    return (
      <div>
        <Modal
          isOpen={this.state.showDialog}
          contentLabel="Edit Client"
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => {this.setState({showDialog: false})}}
        >
          <h3>Edit Client</h3>
          <div>
            <label>Email Address</label> <input type='textbox' onChange={this.handleField.bind(null, "emailAddress")} value={this.state.activeClient.emailAddress}></input>
          </div>
          <div>
            <label>Name</label> <input type='textbox' onChange={this.handleField.bind(null, "name")} value={this.state.activeClient.name}></input>
          </div>
          <div>
            <label>Phone Number</label> <input type='textbox' onChange={this.handleField.bind(null, "phoneNumber")} value={this.state.activeClient.phoneNumber}></input>
          </div>
          <div>
            <label>Notes</label> <input type='textbox' onChange={this.handleField.bind(null, "notes")} value={this.state.activeClient.notes}></input>
          </div>
          <div>
            <button onClick={this.updateClient}>Submit</button>
          </div>
        </Modal>
        <h3>Clients:</h3>
        <ul>
          {showClients}
        </ul>
        <button onClick={this.newClient}>Create New</button>
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
