// import logo from './logo.svg';

import {ReactComponent as MyAvatar} from '../../assets/face.svg';

// Implementation as functional component
const WelcomePage = () => {
    return(
        <div>
            <p>Hi guy!</p>
            <MyAvatar className='logo'/>
        </div>
    );    
}

export default WelcomePage