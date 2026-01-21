import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  const nameref = useRef();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  const handleUncontrolled = (e) => {
    e.preventDefault();
    console.log(nameref.current.value)
  }

  return (
    <div>
      <h1>Controlled Form</h1>
      <form>
        <input type="text" name='name' placeholder='Enter Name' value={user.name} onChange={handleChange} />
        <br />
        <input type="email" name='email' placeholder='Enter Email' value={user.email} onChange={handleChange} />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>


      <h1>Uncontrolled Form</h1>
      <form>
        <input type="text" name='name' placeholder='Enter Name' ref={nameref} />
        <br />
        <button onClick={handleUncontrolled}>Submit</button>
      </form>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </div>

    </div>
  )
}

export default App
