import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop.jsx";
// import Banner from "./assets/components/Banner.jsx"
// import About from "./assets/components/About.jsx"
// import Projects from "./assets/components/Projects.jsx"
// import Contact from "./assets/components/Contact.jsx"
// import Navbar from './assets/components/Navbar.jsx'
// import Projects from './assets/components/Projects.jsx';
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import OutdoorProjectsPage from "./pages/Outdoor_Projects.jsx";
import KitchenFittingPage from "./pages/Kitchen_Fitting.jsx";
import StorageSolutionsPage from "./pages/Storage_Solutions.jsx";
import CustomDesignsPage from "./pages/Custom_Designs.jsx";

// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="outdoorprojects" element={<OutdoorProjectsPage />} />
          <Route path="kitchenfitting" element={<KitchenFittingPage />} />
          <Route path="storagesolutions" element={<StorageSolutionsPage />} />
          <Route path="customdesigns" element={<CustomDesignsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
