import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { message: "Loading..." };

  // Load some data from the server to demonstrate communication between
  // the client and Node
  async componentDidMount() {
    try {
      const data = await fetch('/example-path');
      const json = await data.json();
      this.setState(json);
    } catch (e) {
      console.log("Failed to fetch message", e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
