import React, { useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import HeaderApp from './components/UI/Header/HeaderApp';
import { useTypedDispatch } from './hooks/useTypedDispatch'
import { setLoginStatus } from './store/reducers/loginSlice'

function App() {

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('uid')) {
      dispatch(setLoginStatus(true))
      navigate('/')
    } else {
      dispatch(setLoginStatus(false))
    } 

  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderApp/>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
