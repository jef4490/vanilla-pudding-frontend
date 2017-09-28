import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'
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

export default App;
