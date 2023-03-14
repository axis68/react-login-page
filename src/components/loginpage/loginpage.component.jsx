import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

/* Implementation as functional component
   Props:
    cancelHandler = (event) => {}
    connectHandler = (loginName) => {}
*/
const LoginPage = (props) => {

    const [credentials, setCredentials] = useState('');

    const onClickConnect = () => {        
        console.log('Execute click Connect handler')
        props.connectHandler(credentials);
    };

    return(
        <div>
            <div><TextField label='Login name' onChange={(event) => setCredentials(event.target.value)}/></div>
            <div><TextField label='Password'/></div>
            <div><Button onClick={onClickConnect}>Connect</Button><Button onClick={props.cancelHandler}>Cancel</Button></div>
        </div>
    );
}

export default LoginPage