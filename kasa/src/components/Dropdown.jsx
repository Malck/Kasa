import React from 'react';
import { useState } from 'react' 

import "../styles/dropdown.css"
import chevrondown from "../assets/chevrondown.svg"
import chevronup from "../assets/chevronup.svg"


function Dropdown({title, content}) {
    const [isClose, setIsClose] = useState(true)

    console.log(Array.isArray(content))
    
    return  (
        <div className="apropos"> 


          <div className='dropHead'>
            <h1>{title}</h1> 

            <span 
            className='chevronDown'
            onClick={() => setIsClose(!isClose)}>

               {isClose ? <img className='fermer' src={chevrondown} alt="chevron"/> : <img className='ouvert' src={chevronup} alt="chevron"/> } 
               
            </span>
          </div>


          {!isClose && <div className='textpropos'>

            {Array.isArray(content) ? 
               <ul className='dropText'>  {content.map(item => <li className='litext'>{item}</li> ) }   </ul>
               :
               <p className='dropText'>{content}</p>
            }
              
          </div>}

        </div>
    )
}

export default Dropdown;
