import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import Hero from './components/home/Hero'
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
