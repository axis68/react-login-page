import Button from '@mui/material/Button';

const LoginField = (props) => {

    let content;
    if (props.loginName) {
        content = <div>USER &lt;{props.loginName}&gt;<Button onClick={props.logoutClickHandler}>Logout</Button></div>;
    } else {
        content = <div><Button onClick={props.loginClickHandler}>Login</Button></div>;
    }
    return(content);
}

export default LoginField