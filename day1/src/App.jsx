import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Counter from './Counter'


function App() {
  const cardData = [{
    id:1,
    title: "Biriyani",
    imageUrl: "",
    price: 355
  },
  {
    id:2,
    title: "Panner",
    imageUrl: "",
    price: 255
  },
  {
    id:3,
    title: "ice cream",
    imageUrl: "",
    price: 55
  }
]
  return (
    <>
      {cardData.map((val)=> (
        <Card key={val.id} title={val.title} imageUrl={val.imageUrl} price={val.price} />
      ))}

      <Counter />

    </>
  )
}

export default App
