import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { lazy, Suspense } from 'react';

import './App.css';

import Navigation from './routes/navigation/navigation.component';
const WelcomePage = lazy(() => import('./routes/welcomepage/welcomepage.component'));
const LoginPage = lazy(() => import('./components/loginpage/loginpage.component'));

const App = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Handlers login field
    const onClickLogoutHandler = (event) => {
      console.log('setUserNameHandler');
      setUserName('');
    }

    // Handlers login page
    const onClickPageLoginConnectHandler = (event) => {
      console.log('onClickPage');
      setUserName(event);
      navigate('/react-login-page');
    }

    console.log('render-app');

    return (
      <div className="App">
        <header className="MyApplication">
        
        <Routes>
          <Route path='/react-login-page' element={<Navigation loginName={userName} onClickLogoutHandler={onClickLogoutHandler}/>}>
            <Route index element={
              <Suspense fallback={<h1>Loading...</h1>}>
                  <WelcomePage />
              </Suspense>  
              }/>
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
