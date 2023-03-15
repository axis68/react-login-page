import Button from '@mui/material/Button';

const LoginField = ({loginName, loginClickHandler, logoutClickHandler}) => {
    return(<>
        {
            loginName?
                <div>USER &lt;{loginName}&gt;<Button onClick={logoutClickHandler}>Logout</Button></div>
                :
                <div><Button onClick={loginClickHandler}>Login</Button></div>
        }  
    </>);   // See here how we can use HTML fragment
}

export default LoginField