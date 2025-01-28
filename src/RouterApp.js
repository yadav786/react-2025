import React, { useContext } from 'react';
import Header from './Header';
import { ThemeContext } from './context/ThemeContext';


const blackTheme = {backgroundColor: '#a492d4', minHeight: '100vh', color: 'white'};
const whiteTheme = {backgroundColor: '#9db297', minHeight: '100vh', color: 'black'};


export const RouterApp = ({ children }) => {
const { theme } = useContext(ThemeContext);
  return (
  <div style={theme ? blackTheme : whiteTheme}>
    <Header/>
    {children}
    </div>
)

}