import React, { Component } from "react";
import Select from "react-select";

let basketballPlayers = [
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

    state = { players: []}

    componentDidMount() {
        fetch('http://goodie-nba.starlineventures.com/api/players')
        .then(results => results.json())
        .then(data => {
            console.log(data);
            this.setState({ players: data });
        })

      }

  render() {
    return (
      <div className="form">
        <div className="container">
          <Select options={this.state.players} onChange={opt => console.log(opt.label, opt.value)} />
         
        </div>
      </div>
    );
  }
}

export default Form;
