import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
//import Home from './pages/Home'
//import Error from "../src/pages/Error.jsx"
//import About from './pages/About'
//import LocationPage from "../src/pages/Location"

import Header from './components/Header'
import Footer from "./components/Footer"
import "../src/styles/index.css"

import RouterPage from "../src/Router/RouterPage"


function App() {
  return (

    <Router>
      
      <Header />

      <RouterPage />

      <Footer />

    </Router>

  );
}

export default App;


