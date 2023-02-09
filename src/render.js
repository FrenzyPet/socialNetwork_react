import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPostState } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPostState={addPostState}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export { rerender };
