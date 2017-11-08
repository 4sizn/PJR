import React, { Component } from 'react';
import logo from '../logo.svg';
import {Header} from '../components';
import Login from '../containers/Login'
import Register from '../containers/Register'

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>  
        <Login></Login>
        <Register></Register>
      </div>
    );
  }
}

export default App;
