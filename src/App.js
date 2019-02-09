import React, {Component} from 'react'
import Popup from './Components/Popup'


class App extends Component {
    render(){
        return(
            <div>
                        <img style={{ height: "550px" }} img src={require('./Images/court.png')} alt='' />

                <div>
NBA ALLSTAR                <Popup/>
            </div>
        </div>
        )
    }
}

export default App