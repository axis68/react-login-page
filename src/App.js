import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { lazy, Suspense } from 'react';

import './App.css';

// import LoginPage from './components/loginpage/loginpage.component';
import Navigation from './routes/navigation/navigation.component';
const WelcomePage = lazy(() => import('./routes/welcomepage/welcomepage.component'));

const LoginPage = lazy(() => import('./components/loginpage/loginpage.component'));
// Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI 
// to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.

const App = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Handlers login field
    const onClickLogoutHandler = (event) => {
      setUserName('');
    }

    // Handlers login page
    const onClickPageLoginConnectHandler = (event) => {
      setUserName(event);
      navigate('/react-login-page');
    }

    return (
      <div className="App">
        <header className="MyApplication">
        
        <Routes>
          <Route path='/react-login-page' element={<Navigation loginName={userName} onClickLogoutHandler={onClickLogoutHandler}/>}>
            <Route index element={<WelcomePage />}/>
            <Route path='login' element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <LoginPage userName={userName} connectHandler={onClickPageLoginConnectHandler}/>
              </Suspense>
            }/>
          </Route>
        </Routes>

        </header>
      </div>
    );
}

export default App;
