import React, { useState } from 'react';

import './App.css';
import LoginField from './components/loginfield/loginfield.component'

import LoginPage from './components/loginpage/loginpage.component'
import WelcomePage from './components/welcomepage/welcomepage.component'

const App = () => {                                       // What about the notation "function App() { }" ?

  const [currentPage, setCurrentPage] = useState('');
  const [userName, setUserName] = useState('');           // Do I nead a separate hook?

  // Handlers Login field

  const onClickLogin = (event) => {
    console.log('Clicked login');
    setCurrentPage('LoginPage');
  }
  
  const onClickLogout = (event) => {
    setCurrentPage('');
    setUserName('');
  }

  // Handlers login page

  const onClickPageLoginCancel = (event) => {
    setCurrentPage('');
  }

  const onClickPageLoginConnect = (event) => {
    setCurrentPage('');
    setUserName(event);
  }

  return(
    <div className="App">
      <header className="MyApplication">

        <LoginField loginName={userName} loginClickHandler={onClickLogin} logoutClickHandler={onClickLogout}/>

          { currentPage &&
              <LoginPage connectHandler={onClickPageLoginConnect} cancelHandler={onClickPageLoginCancel}/>
          }
          { !currentPage &&
              <WelcomePage/>
          }
      </header>
    </div>
  );
}

export default App;
