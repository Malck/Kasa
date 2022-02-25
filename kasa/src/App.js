//import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from "../src/pages/Error.jsx"
import About from './pages/About'

import Header from './components/Header'
import Footer from "./components/Footer"
//import "../src/styles/index.css"

function App() {
  return (
    <Router>
      <Header />

      <Routes>

        <Route exact path="/" element={<Home />}/>

        <Route path="/About" element={<About />}/>

        <Route path="/*" element={<Error />}/>
          
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

//<Route element={<Error />}/>