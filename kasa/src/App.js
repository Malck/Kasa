import React from 'react'
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from "../src/pages/Error.jsx"

import Header from './components/Header'
import About from './pages/About'

//import "../src/styles/index.css"

function App() {
  return (
    <Router>
      <Header />

      <Routes>

        <Route exact path="/" element={<Home />}/>

        <Route path="/About" element={<About />}/>

        <Route path="/Error" element={<Error />}/>
        
            
      </Routes>
    </Router>
  );
}

export default App;

//<Route element={<Error />}/>