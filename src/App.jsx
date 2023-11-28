import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <div className="placeholder-message">
          <h1>Hello, world!</h1>
          <sub>Introducing Audiophile E-commerce</sub>
        </div>
    </>
  )
}

export default App
