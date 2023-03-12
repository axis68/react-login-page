import { Component } from 'react'
import Button from '@mui/material/Button';

class LoginField extends Component {

    render() {
        let content;
        if (this.props.loginName) {
            content = <div>USER &lt;{this.props.loginName}&gt;<Button onClick={this.props.logoutClickHandler}>Logout</Button></div>;
        } else {
            content = <div><Button onClick={this.props.loginClickHandler}>Login</Button></div>;
        }
        return (content);
    }
    
}

export default LoginField