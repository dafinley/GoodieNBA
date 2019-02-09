import React, { Component } from 'react';
import Form from './Components/Form';
import Radio from './Components/Radio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello World!</h1>
       <Form/>
       <Radio/>
      </div>
    );
  }
}

export default App;
