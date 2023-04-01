import {Link} from 'react-router-dom';

const LoginField = ({loginName, onClickLogoutHandler}) => {
    return(<>
        {
            <div className='navigation-item-right'>
                {
                    loginName?
                    <div>{loginName} <Link to='/react-login-page/welcome' onClick={onClickLogoutHandler}>Logout</Link></div>
                    :
                    <Link to='/react-login-page/login'>Login</Link>
                }
            </div>
        }
    </>);   // See here how we can use HTML fragment
}

export default LoginField