import React, { Component } from 'react';


class AllShots extends Component {
 
    state = { data: [] };
    URL = 'http://goodie-nba.starlineventures.com/api/allShots';
    componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        try {

            fetch('http://goodie-nba.starlineventures.com/api/allShots')
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(data => this.setState({ data: data.json }));
        } catch(ex) {
            console.log(ex);
        }
        
      }

    render() {

        return (<ul>
        {
          this.state.data.map(function(record){
            return <li key={record.id}>{record.name} - {record.x} { record.y } { record.madeMiss}</li>;
          })
        }
        </ul>);

    }

}

export default AllShots;