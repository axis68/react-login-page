import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import LoginField from '../../components/loginfield/loginfield.component';

const Navigation = ({loginName, onClickLogoutHandler}) => {
    return(
        <Fragment>
            <div className='navigation'>
                <div>My program</div>
            </div>
            <LoginField loginName={loginName} onClickLogoutHandler={onClickLogoutHandler}/>
        
            <Outlet/>
        </Fragment>
    );  // The rest of the application will be rendered at 'Outlet'
}

export default Navigation;