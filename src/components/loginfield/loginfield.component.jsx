import {Link } from 'react-router-dom';

const LoginField = ({loginName, loginClickHandler, onClickLogoutHandler}) => {

    return(<>
        {
            <div className='navigation-item-right'>
                {
                    loginName?
                    <div>{loginName} <Link onClick={onClickLogoutHandler}>Logout</Link></div>
                    :
                    <Link to='/react-login-page/login'>Login</Link>
                }
            </div>
        }
    </>);   // See here how we can use HTML fragment
}

export default LoginField