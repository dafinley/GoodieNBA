import React, { Component } from 'react';
import Form from './Components/Form';
import Radio from './Components/Radio';
import AllShots from './Components/AllShots';
import './App.css';
import Popup from './Components/Popup'
import { Button, Modal } from 'react-bootstrap';


class App extends Component {
constructor(props){
    super(props);
    this.state = {marker: {x:0,y:0}, dotStyle: {}, show: false, showAllShots: false};
    this.dotStyle = {};
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowShots = this.handleShowShots.bind(this);
}

showCoords(event) {
  this.setState({ marker: { x: event.clientX, y: event.clientY}});
  this.dotStyle = { top: event.screenX, left: event.screenY };
  var coords = "X coords: " + this.state.marker.x + ", Y coords: " + this.state.marker.y;
  
  console.log(this.state.marker);
  this.handleShow();

}

  handleClose() {
    this.setState({ show: false, showAllShots: false });
  }

  handleShow() {
    this.setState({ show: true, showAllShots: false });
  }

  handleShowShots() {
    this.setState({ showAllShots: true });
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
       <h1>Software Chasers!</h1>
       {/* <Form/> */}
       {/* <Radio/>
       <div>
         <div>X={this.state.marker.x}</div>
         <div>Y={this.state.marker.y}</div>
         
      </div> */}
      <Button onClick={ this.handleShowShots }>Show Shots</Button>
      <span class="dot" style={ dotStyle }></span>
       <img style={{height:"550px"}} onClick={ (event) => this.showCoords(event) } img src={require('./Images/court.png')} alt='' />
       <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Players</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form />
                <input type="radio" value="Shots Missed" name="basketball"/> Shots Missed
                <input type="radio" value="Shots Made" name="basketball"/> Shots Made</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.showAllShots} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>All Shots</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <AllShots />
            </Modal.Body>
             <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  };
};

export default App
