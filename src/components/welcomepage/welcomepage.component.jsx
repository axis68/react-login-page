import {Component} from 'react'
import logo from './logo.svg';

class WelcomePage extends Component {

    render() {
        return(
        <div>
            <p>Welcome to the machine!</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        );
    }
    
}

export default WelcomePage