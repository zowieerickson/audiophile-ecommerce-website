import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import BuyStrip from './components/shared/BuyStrip'
import Hero from './components/home/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav />
        <Hero />
        <BuyStrip />
        <Footer />
    </>
  )
}

export default App
