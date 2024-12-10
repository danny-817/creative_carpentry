import { useState } from 'react'
import Banner from "./assets/components/Banner.jsx"
import About from "./assets/components/About.jsx"

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        
       <Banner /> 
       <About />
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
