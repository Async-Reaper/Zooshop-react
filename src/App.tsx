import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import HeaderApp from './components/UI/Header/HeaderApp';

function App() {
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
