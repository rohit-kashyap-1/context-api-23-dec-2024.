import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ height:'50px',padding:20,background:(theme=='dark')?'#2c2c2c':'#fff',color:(theme=='dark')?'#fff':'#2c2c2c' }}>
      <h4>Header component</h4>
    </header>
  )
}
