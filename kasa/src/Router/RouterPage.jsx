import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from "../pages/Error.jsx"
import About from '../pages/About'
import LocationPage from "../pages/Location"

function RouterPage() {
    return (
      
        <Routes>
  
          <Route exact path="/" element={<Home />}/>
  
          <Route path="/About" element={<About />}/>
  
          <Route  path='/locations/:id' element={<LocationPage />}/>
          
  
          <Route path="/*" element={<Error />}/>
            
        </Routes>
        
    );
  }
  
  export default RouterPage;