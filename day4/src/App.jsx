import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const names = ['Narendra', 'Leisha', 'Geetha', 'Hari Bavagaru','lei']
  const [inputValue, setInputValue] = useState('')
  const [error,setError] = useState('');


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


  return (
    <>
      <h1>Search Filter</h1>
      <input type="text" value={inputValue} name='name' onChange={handleChange} />
      {error && <p style={{color:'red'}}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {filteredData.map((name, index)=>{
          return <li key={index}>{name}</li>
        })}
      </ul>
    </>
  )
}

export default App
