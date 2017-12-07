import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {  bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css';
import Navbar from './components/Navbar.js';

import Test from './test.js'
import Clients from './components/Clients.js'
import Orders from './components/Orders.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      showPopover: true
    }

    this.togglePopover = this.togglePopover.bind(this)
  }

  togglePopover(){
    this.setState({showPopover: !this.state.showPopover})
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar togglePopover={this.togglePopover} showMenu={this.state.showPopover}/>
        <Route exact path='/' component={Test} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/orders' component={Orders} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    clients: state.clients,
    orders: state.orders
  })
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//
//   }, dispatch)
// }

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
