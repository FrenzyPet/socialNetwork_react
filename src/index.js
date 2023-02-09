import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPostState, updateNewPostText, subscriber } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPostState={addPostState} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerender();
subscriber(rerender);