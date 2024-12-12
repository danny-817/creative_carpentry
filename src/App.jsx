import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./assets/components/Banner.jsx"
// import About from "./assets/components/About.jsx"
// import Projects from "./assets/components/Projects.jsx"
// import Contact from "./assets/components/Contact.jsx"
import Navbar from './assets/components/Navbar.jsx'
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './assets/components/Projects.jsx';

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>  
        {/* <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='projects' element={Projects}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </Layout> */}
      
           
          <Routes>
            <Route path='/' element={<Layout />}> 
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Route>

          </Routes>
          {/* <Banner /> 
          <Navbar/>
          <section>
          <About />
          <Projects/>
          <Contact/>
       */}


          {/* </section> */}
          {/* </Routes> */}
        
       
      
      
    </BrowserRouter>
  )
}

export default App
