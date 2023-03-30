import React from 'react';
import Button from '@mui/material/Button';
import './mainarea.css';

const MainArea = () => {

    const availableFunctions = [ 'function-1', 'function-2', 'function-3' ];

    return(
        <>
            <h1>Available functionalities</h1>
            <div className='functionsList'>
            {
                availableFunctions.map((funcName) => { return(<Button>{funcName}</Button>); })
            }
            </div>
        </>);
}

export default MainArea;