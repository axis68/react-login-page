import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginPage = ({userName, connectHandler}) => {                        // Instead of "props" it is better to use specific variables

    const [credentials, setCredentials] = useState('');
    const navigate = useNavigate();

    const onClickConnect = () => {        
        connectHandler(credentials);
    };

    const onClickCancel = () => {
        navigate('/react-login-page');
    };

    const onLoginNameChanged = (event) => setCredentials(event.target.value); // a bit more performant than instantiating everytimes the function

    if (userName.length !== 0) {
        return(<>
            <p>You are already logged in, '{userName}'.</p>
            <Link to='/react-login-page'>Home page</Link> 
        </>);
    }

    return(
        <>
            <div><TextField label='Login name' onChange={onLoginNameChanged}/></div>
            <div><TextField label='Password'/></div>
            <div>
                <Button onClick={onClickConnect}>Connect</Button>
                <Button onClick={onClickCancel}>Cancel</Button>
            </div>
        </>
    );
}

export default LoginPage