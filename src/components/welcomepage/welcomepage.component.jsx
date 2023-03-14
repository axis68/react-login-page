import logo from './logo.svg';

// Implementation as functional component
const WelcomePage = () => {
    return(
        <div>
            <p>Welcome my son, welcome to the machine - this time with functional components</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );    
}

export default WelcomePage