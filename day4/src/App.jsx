import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContext from './ThemeContext'
import Child from './child'

function App() {
  const names = ['Narendra', 'Leisha', 'Geetha', 'Hari Bavagaru','lei']
  const [inputValue, setInputValue] = useState('')
  const [error,setError] = useState('');
   const [toggleState, setToggleState] = useState('dark');


  const filteredData = names.filter((name)=>{
      return name.toLowerCase().includes(inputValue.toLowerCase())
  })

  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  const handleSubmit = (e)=>{
    if(inputValue.trim() === ''){
      setError('Input cannot be empty');
    }
    else {
      setError('');
    }
  }

   const toggle = () => {
        setToggleState(toggleState === 'dark' ? 'light' : 'dark');
    }

  return (
    <>
      <button onClick={toggle}>Toggle Theme</button>

      <h1>Search Filter</h1>
      <input type="text" value={inputValue} name='name' onChange={handleChange} />
      {error && <p style={{color:'red'}}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {filteredData.map((name, index)=>{
          return <li key={index}>{name}</li>
        })}
      </ul>
      <ThemeContext.Provider value={toggleState}>
        <Child />
      </ThemeContext.Provider>
      
    </>
  )
}

export default App;
