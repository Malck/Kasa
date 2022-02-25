import React from 'react';
import { useState } from 'react' 

import "../styles/dropdown.css"
import chevrondown from "../assets/chevrondown.svg"
import chevronup from "../assets/chevronup.svg"

//import aboutDatas from "../aboutText" , pas besoin on fait passer title et content du parent about.jsx a Dropdown.jsx dans sa function Dropdown

function Dropdown({title, content}) {
    const [isClose, setIsClose] = useState(true)
    
    return  (
        <div className="apropos"> 
            <h1>{title}</h1> 
            <span 
            className='chevronDown'
            onClick={() => setIsClose(!isClose)}>
               {isClose ? <img className='fermer' src={chevrondown} alt="chevron"/> : <img className='ouvert' src={chevronup} alt="chevron"/> } 
            </span>

          {!isClose && <div className='textpropos'>
              <p>{content}</p>
          </div>}

        </div>
    )
}

export default Dropdown;