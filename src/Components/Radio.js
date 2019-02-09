import React, { Component } from "react";




class Radio extends Component {
  
    setShot(event) {
      console.log(event.target.value);
    }
    
    render() {
      return ( 
        <div onChange={this.setShot.bind(this)}>
          <input type="radio" value="Shots Missed" name="basketball"/> Shots Missed
          <input type="radio" value="Shots Made" name="basketball"/> Shots Made


          <button type="save" form="form1" value="Save">Save</button>
        </div>

            
       );
    }
  }

  export default Radio