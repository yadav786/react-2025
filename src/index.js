import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Jira from './Jira';
import HOCClassLifeCycle from './HOCClassLifeCycle';
import './assets/css/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <UserContext.Provider value="Pankaj">
      <Routes>
        <Route  path='/'  element={<App />} />
        <Route  path='/jira'  element={<Jira />} />
        <Route  path='/hoc'  element={<HOCClassLifeCycle />} />
      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
