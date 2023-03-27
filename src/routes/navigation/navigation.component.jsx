import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import LoginField from '../../components/loginfield/loginfield.component';

import './navigation.css';

const Navigation = ({loginName, onClickLogoutHandler}) => {
    return(
        <Fragment>
            <div className='navigation'>
                <div className='navigation-item-left'>My program</div>
                <div className='navigation-item'>Middle</div>      
                <LoginField loginName={loginName} onClickLogoutHandler={onClickLogoutHandler}/>
            </div>
            <Outlet/>
        </Fragment>
    );  // The rest of the application will be rendered at 'Outlet'
}

export default Navigation;