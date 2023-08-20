import React from 'react';
import Button from '@mui/material/Button';
import './mainarea.css';

const getFunctions = require('../../services/functions');

const MainArea = () => {

    return(
        <>
            <h1>Available functionalities</h1>
            <div className='functionsList'>
            {
                getFunctions().map((funcName) => { return(<Button key={funcName}>{funcName}</Button>); })
            }
            </div>
        </>);
}

export default MainArea;