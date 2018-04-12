import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Plane from './js/components/plane/plane-view'
import Cloud from './js/components/cloud/cloud-view'
import cloudActionDispatcher from './js/actions/cloud-actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        avajgdasydga
        <p className="App-intro" onClick={this.state.onAddFuel( { id: "aaa" })}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <Plane />
        <Plane />
        <Cloud />
        <Plane />
        <Cloud />
        <Plane />

      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      clouds: state.clouds
    }
  },
  cloudActionDispatcher
)(App);
