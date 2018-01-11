import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import ObjectForm from './ObjectForm';
import { addClient, updateClient } from '../actions'

class NewClient extends React.Component {
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
  }

  editClient(clientId){
    this.setState({showDialog: true, activeClient: this.props.clients.clients.find((client) => {return client.clientId === clientId})})
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

    this.props.history.push('/clients')
  }

  render(){
    return(
          <div>
            <ObjectForm
               object={this.state.activeClient}
               title="Edit Client"
               fieldHandler={this.handleField}
               submitHandler={this.updateClient}
               hiddenFields={["clientId", "contacts"]}
             />
          </div>
        )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addClient: addClient,
    updateClient: updateClient
  }, dispatch)
}

const ConnectedNewClient = connect(null, mapDispatchToProps)(NewClient)

export default ConnectedNewClient
