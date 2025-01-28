import React, {useContext} from "react";
import { ThemeContext } from './context/ThemeContext'

export const ThemeSwitcher = () => {
const { theme, toggleTheme } = useContext(ThemeContext);
return(<>
    <div>Current Theme: {theme ? 'Black': 'Gray'}</div>
    <button style={{cursor: 'pointer', padding: '8px', margin: '10px 10px'}} 
    onClick={() => toggleTheme()}>Theme Switcher</button>
    </>
)
}