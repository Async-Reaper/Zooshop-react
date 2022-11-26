import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';
import './firebase'
import './index.css'
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);
