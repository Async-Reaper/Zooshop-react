import './App.scss';
import AppRouter from './components/appRouter/AppRouter';
import HeaderApp from './components/UI/Header/headerApp/HeaderApp';

function App() {

    return (
        <div className="App">
            <HeaderApp/>
            <AppRouter/>
        </div>
    );
}

export default App;
