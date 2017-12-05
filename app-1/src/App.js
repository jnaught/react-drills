import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
      super()

      this.state = {
        userInput: ''

      }
   
    }
handleChange(value){
  this.setState({userInput: value});

}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>REACT-DRILLS</h2>
        </div>
        <input type='text'onChange={(event) => this.handleChange(event.target.value)}></input>
        <h1>{this.state.userInput}</h1>
        
      </div>
    );
  }
}

export default App;
