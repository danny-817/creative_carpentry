import { useState } from 'react'
import bannerPic from './assets/banner_pic.jpg';
import Banner from "./assets/components/Banner.jsx"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        
       <Banner /> 
      
      <h1>Creative Carpentry of Saddeworth</h1>
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
