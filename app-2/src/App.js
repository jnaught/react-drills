import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {


constructor(){

  super();

  this.state={
    list: ['pencil',
     'pen', 
     'paper',
     'eraser',
     'white-out'
    ]



  }
}




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1><ul>{this.state.list.map((listValue) => 
          <li>{listValue}</li>
        )}</ul></h1>
      </div>
    );
  }
}

export default App;
