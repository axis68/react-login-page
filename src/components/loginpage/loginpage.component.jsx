import {Component} from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

/* Props:
    cancelHandler
    connectHandler= (loginName)
*/
class LoginPage extends Component {

    constructor()
    {
      super();
      this.state = {
        userName: '',
        password: ''
      }
    }

    onClickConnect = () => {        
        console.log('Execute click Connect handler')
        this.props.connectHandler({loginName: this.state.userName });
    };

    render() {
        return(
            <div>
                <div><TextField label='Login name' onChange={(event) => this.setState({userName: event.target.value})}/></div>
                <div><TextField label='Password'/></div>
                <div><Button onClick={this.onClickConnect}>Connect</Button><Button onClick={this.props.cancelHandler}>Cancel</Button></div>
            </div>
        );
    }
}

export default LoginPage