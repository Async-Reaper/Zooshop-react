import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderApp from './components/UI/Header/HeaderApp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderApp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
