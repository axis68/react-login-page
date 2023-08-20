import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { lazy, Suspense } from 'react';

import './App.css';

import { createSlice, configureStore } from '@reduxjs/toolkit';

import Navigation from './routes/navigation/navigation.component';
import MainArea from './components/mainarea/mainarea.component';
const WelcomePage = lazy(() => import('./routes/welcomepage/welcomepage.component'));
const LoginPage = lazy(() => import('./components/loginpage/loginpage.component'));

// Redux

const navigationSlice = createSlice({
  name: 'pageStatus',
  initialState: {
    value: 'Welcome',
    page: '/react-login-page/main'
  }, reducers: {
    clickLoginPage: state => {
      state.value = 'LoginPage';
      state.page = '/react-login-page/login';
    },
    logout: state => {
      state.value = 'Welcome'
      state.page = '/react-login-page/welcome';
    },
    validateLogin: state => {
      state.value = 'MainPage';
      state.page = '/react-login-page/main';
    },
  }
});

export const { clickLoginPage, logout, validateLogin } = navigationSlice.actions;

const store = configureStore({
  reducer: navigationSlice.reducer
});

store.subscribe(() => {
    console.log('Storevalue = ' + store.getState().value + ', page ' + store.getState().page);
    // const navigate = useNavigate();
    // navigate(store.getState().page);
  });
//store.dispatch(clickLoginPage());
//store.dispatch(logout());
//store.dispatch(validateLogin());

console.log('Current state: ' + store.getState().value);

const App = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Handlers login field
    const onClickLogoutHandler = (event) => {
      console.log('>>> onClickLogoutHandler');
      setUserName('');
    }

    // Handlers login page
    const onClickPageLoginConnectHandler = (event) => {
      setUserName(event);
      console.log('>>>onClickPageLogin');
      // navigate('/react-login-page/main');
      store.dispatch(validateLogin());
      navigate(store.getState().page);
    }

    const location = useLocation();
    console.log(location.pathname);

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
            <Route path='welcome' element={
              <Suspense fallback={<h1>Loading...</h1>}>
                  <WelcomePage />
              </Suspense>  
              }/>
            <Route path='login' element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <LoginPage userName={userName} connectHandler={onClickPageLoginConnectHandler}/>
              </Suspense>
            }/>
            <Route path='main' element={
              <MainArea/>
            }/>
          </Route>
        </Routes>

        </header>
      </div>
    );
}

export default App;
