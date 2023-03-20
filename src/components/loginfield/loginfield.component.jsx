import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';

const LoginField = ({loginName, loginClickHandler, onClickLogoutHandler}) => {

    return(<>
        {
            loginName?
                <div>USER &lt;{loginName}&gt;<Button onClick={onClickLogoutHandler}>Logout</Button></div>
                :
                <div className='login-field'>
                    <Link className='nav-login' to='/react-login-page/login'>
                        Login
                    </Link>
                </div>
        }
    </>);   // See here how we can use HTML fragment
}

export default LoginField