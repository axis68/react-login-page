import { Component } from 'react'
import './App.css';
import LoginField from './components/loginfield/loginfield.component'

import LoginPage from './components/loginpage/loginpage.component'
import WelcomePage from './components/welcomepage/welcomepage.component'

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      currentPage: '',
      userName: ''
    }
  }

  // Handlers Login field

  onClickLogin = (event) => {
    console.log('Clicked login');
    this.setState({currentPage: 'LoginPage'});
  }
  
  onClickLogout = (event) => {
    this.setState({currentPage: '', userName: ''})
  }

  // Handlers login page

  onClickPageLoginCancel = (event) => {
    this.setState({currentPage: ''});
  }

  onClickPageLoginConnect = (event) => {
    this.setState({
      currentPage: '', 
      userName: event.loginName
    });
  }


  render() {
    return (
      <div className="App">
        <header className="MyApplication">
  
          <LoginField loginName={this.state.userName} loginClickHandler={this.onClickLogin} logoutClickHandler={this.onClickLogout}/>

            { this.state.currentPage &&
                <LoginPage connectHandler={this.onClickPageLoginConnect} cancelHandler={this.onClickPageLoginCancel}/>
            }
            { !this.state.currentPage &&
                <WelcomePage/>
            }

  
        </header>
      </div>
    );
  
  }


}

export default App;
