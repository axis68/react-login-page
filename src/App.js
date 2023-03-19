import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { lazy } from 'react';

import './App.css';

import LoginPage from './components/loginpage/loginpage.component';
import Navigation from './routes/navigation/navigation.component';
const WelcomePage = lazy(() => import('./routes/welcomepage/welcomepage.component'));

// const LoginPage = lazy(() => import('./components/loginpage/loginpage.component'));
// Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI 
// to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.

const App = () => {
    const [userName, setUserName] = useState('');

    // Handlers login field
    const onClickLogoutHandler = (event) => {
      setUserName('');
    }

    // Handlers login page
    const onClickPageLoginConnectHandler = (event) => {
      setUserName(event);
    }

    return (
      <div className="App">
        <header className="MyApplication">
        
        <Routes>
          <Route path='/' element={<Navigation loginName={userName} onClickLogoutHandler={onClickLogoutHandler}/>}>
            <Route index element={<WelcomePage />}/>
            <Route path='login' element={<LoginPage connectHandler={onClickPageLoginConnectHandler}/>}/>
          </Route>
        </Routes>

        </header>
      </div>
    );
}

export default App;
