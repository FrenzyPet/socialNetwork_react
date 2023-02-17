import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerender();
store.subscribe(rerender);