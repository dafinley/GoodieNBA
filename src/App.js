import React, { Component } from 'react';
import Form from './Components/Form';
import Radio from './Components/Radio';
import './App.css';
import Popup from './Components/Popup'


class App extends Component {
constructor(props){
    super(props);
    this.state = {marker: {x:0,y:0}, dotStyle: {}};
    this.dotStyle = {};
}

showCoords(event) {
  this.setState({ marker: { x: event.clientX, y: event.clientY}});
  this.dotStyle = { top: event.screenX, left: event.screenY };
  var coords = "X coords: " + this.state.marker.x + ", Y coords: " + this.state.marker.y;
  
  console.log(this.state.marker);

}

  render() {
    const dotStyle = {
      left: this.state.marker.x - 9, 
      right: this.state.marker.x - 9, 
      top: this.state.marker.y - 9,
      bottom: this.state.marker.y - 9,
    }; 
    return (
      <div className="App">
       <h1>Hello World!</h1>
       <Form/>
       <Radio/>
       <div>
         <div>X={this.state.marker.x}</div>
         <div>Y={this.state.marker.y}</div>
         <span class="dot" style={ dotStyle }></span>
      </div>
       <img style={{height:"550px"}} onClick={ (event) => this.showCoords(event) } img src={require('./Images/court.png')} alt='' />
      
      </div>
    );
  };
};

export default App
