import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav />
        <Hero />
        <Footer />
    </>
  )
}

export default App
