import React, {Component} from 'react'
import Popup from './Components/Popup'


class App extends Component {
constructor(props){
    super(props);
    this.state = {marker: {x:0,y:0}};
}

showCoords(event) {
  this.setState({ marker: { x: event.screenX, y: event.screenY}});
  var coords = "X coords: " + this.state.marker.x + ", Y coords: " + this.state.marker.y;
  console.log(this.marker);
  //alert(coords);
}

  render() {
    
    return (
      <div className="App">
       <h1>Hello World!</h1>
       <div>
         <div>X={this.state.marker.x}</div>
         <div>Y={this.state.marker.y}</div>
      </div>
       <img style={{height:"550px"}} onClick={ (event) => this.showCoords(event) } img src={require('./Images/court.png')} alt=''/>
      </div>
    );
  };
};

export default App