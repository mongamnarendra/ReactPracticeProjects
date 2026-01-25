import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import View from './View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <View></View>
      <Counter></Counter>
    </>
  )
}

export default App
