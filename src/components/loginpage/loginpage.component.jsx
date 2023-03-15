import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginPage = ({connectHandler, cancelHandler}) => {    // Instead of "props" it is better to use specific variables

    const [credentials, setCredentials] = useState('');

    const onClickConnect = () => {        
        console.log('Execute click Connect handler')
        connectHandler(credentials);
    };

    const onLoginNameChanged = (event) => setCredentials(event.target.value); // a bit performanter than instantiating everytimes the function

    return(
        <>
            <div><TextField label='Login name' onChange={onLoginNameChanged}/></div>
            <div><TextField label='Password'/></div>
            <div><Button onClick={onClickConnect}>Connect</Button><Button onClick={cancelHandler}>Cancel</Button></div>
        </>
    );
}

export default LoginPage