import React from 'react';
import axios from 'axios';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import Button from 'material-ui/Button';


import {VanillaPuddingApi} from '../components/constants';
import { getClients, editClient, updateClient, deleteClient, addClient } from '../actions'
import Client from './Client';
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
          <ObjectForm object={this.state.activeClient}
                      title="Edit Client"
                      fieldHandler={this.handleField}
                      submitHandler={this.updateClient}
                      hiddenFields={["clientId", "contacts"]}/>
        </Modal>
        <h3>Clients:</h3>
        <ul>
          {showClients}
        </ul>
        <button onClick={this.newClient}>Create New</button>
        <Button raised color="primary"  onClick={()=>{console.log('hi')}}>
         Hello World
       </Button>
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
