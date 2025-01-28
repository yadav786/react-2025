import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './assets/css/app.scss';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Jira from './Jira';
import CallBackAndMemo from './CallBackAndMemo';
import HOCClassLifeCycle from './HOCClassLifeCycle'
import { UserContext } from './Context';
import { RouterApp } from './RouterApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BrowserRouter>
    <RouterApp>
    <UserContext.Provider value="Pankaj">
      <Routes>
        <Route  path='/'  element={<App />} />
        <Route  path='/user'  element={<CallBackAndMemo />} />
        <Route  path='/jira'  element={<Jira />} />
        <Route  path='/hoc'  element={<HOCClassLifeCycle />} />
      </Routes>
    </UserContext.Provider>
    </RouterApp>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
