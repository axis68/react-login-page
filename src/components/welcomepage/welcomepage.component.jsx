import logo from './logo.svg';

// Implementation as functional component
const WelcomePage = () => {
    return(
        <div>
            <p>A small improvement has been implemented</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );    
}

export default WelcomePage