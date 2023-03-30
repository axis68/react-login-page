import {Link, useNavigate} from 'react-router-dom';

const LoginField = ({loginName, onClickLogoutHandler}) => {
    const navigate = useNavigate();
    // console.log('render-login-field: <' + loginName + ">")

    const onClickLocalLogoutHandler = () => {
        console.log('Go to welcome');
        onClickLogoutHandler();
        navigate('/react-login-page/welcome');

    };

    return(<>
        {
            <div className='navigation-item-right'>
                {
                    loginName?
                    <div>{loginName} <Link onClick={onClickLocalLogoutHandler}>Logout</Link></div>
                    :
                    <Link to='/react-login-page/login'>Login</Link>
                }
            </div>
        }
    </>);   // See here how we can use HTML fragment
}

export default LoginField