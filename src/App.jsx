import { useState } from 'react'
import Banner from "./assets/components/Banner.jsx"
import About from "./assets/components/About.jsx"
import Projects from "./assets/components/Projects.jsx"
import Contact from "./assets/components/Contact.jsx"
import Navbar from './assets/components/Navbar.jsx'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        
       <Banner /> 
       <Navbar/>
       <section>
        <About />
        <Projects/>
        <Contact/>
      


       </section>
        
       
      
      
    </>
  )
}

export default App
