import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {  bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css';
import Test from './test.js'
import Clients from './components/Clients.js'
import Orders from './components/Orders.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Vanilla Pudding</h2>
          </div>
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
