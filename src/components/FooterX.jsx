import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider';

export default function FooterX() {
   const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <footer style={{ borderTop: '2px solid red', padding: 20, background: (theme === 'dark') ? '#2c2c2c' : '#fff', color: (theme === 'dark') ? '#fff' : '#2c2c2c' }}>
            <h6>Footer Component</h6>


        </footer>
    )
}
