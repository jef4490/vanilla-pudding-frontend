import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar.js';




class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      showPopover: false
    }

    this.togglePopover = this.togglePopover.bind(this)
  }

  togglePopover(){
    this.setState({showPopover: !this.state.showPopover})
  }

  render() {
    return (
      <Navbar togglePopover={this.togglePopover} showMenu={this.state.showPopover}/>
    );
  }
}

export default App
