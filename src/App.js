import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello World!</h1>
       { <img style={{height:"550px"}} img src={require('./Images/court.png')} alt=''/>   }
      </div>
    );
  }
}

export default App;
