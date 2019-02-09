import React, { Component } from "react";
import Select from "react-select";

const basketballPlayers = [
  { label: "Lebron James", value: 1 },
  { label: "Kobe Bryant", value: 2 },
  { label: "Stephen Curry", value: 3 },
  { label: "Michael Jordan", value: 4 },
  { label: "Kyrie Irving", value: 5 },
  { label: "Allen Iverson", value: 6 },
  { label: "Dwyane Wade", value: 7},
  { label: "Shaquille O'Neal", value: 8},
  { label: "Charles Barkley", value: 9},
  { label: "Carmelo Anthony", value: 10},
  { label: "Kevin Durant", value: 11},
  { label: "James Harden", value: 12},
  { label: "Anthony Davis", value: 13},
  { label: "Chris Paul", value: 14},
  { label: "Russell Westbrook", value: 15},

];

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="container">
          <Select options={basketballPlayers} onChange={opt => console.log(opt.label, opt.value)} />
         
        </div>
      </div>
    );
  }
}

export default Form;
