import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter';
import HeaderApp from './components/UI/Header/HeaderApp';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const {cart} = useTypedSelector(state => state.cart)

  localStorage.setItem('cart', JSON.stringify(cart))
  
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
