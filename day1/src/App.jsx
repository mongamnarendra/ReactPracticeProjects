import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'


function App() {
  const cardData = [{
    title: "Biriyani",
    imageUrl: "",
    price: 355
  },
  {
    title: "Panner",
    imageUrl: "",
    price: 255
  },
  {
    title: "ice cream",
    imageUrl: "",
    price: 55
  }
]
  return (
    <>
      {cardData.map((val)=> (
        <Card title={val.title} imageUrl={val.imageUrl} price={val.price} />
      ))}
    </>
  )
}

export default App
