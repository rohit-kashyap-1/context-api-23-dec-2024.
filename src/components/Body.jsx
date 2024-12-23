import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider';

export default function Body() {
   const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ height:'50vh',padding:20,background:(theme==='dark')?'#2c2c2c':'#fff',color:(theme==='dark')?'#fff':'#2c2c2c' }}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta obcaecati expedita numquam mollitia. Voluptatibus temporibus vitae quidem blanditiis repudiandae est et! Veniam, iusto dolores! Neque soluta expedita sint ea a.</p>
      <button onClick={()=>{toggleTheme()}}>Change</button>
    </div>
  )
}
