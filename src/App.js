import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        username: '',
        placeholderUsername: 'username...'
    }

    setUsernameHandler = (event) => {
        this.setState(
            {username: event.target.value}
        )
    }

    render() {
        return (
            <div className="App">
                <UserInput
                    placeholderUsername={this.state.placeholderUsername}
                    setUsername={this.setUsernameHandler}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
