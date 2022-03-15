//import { Link } from 'react-router-dom'
//import MontagnesR from "../assets/MontagnesResp.png"
import "../styles/about.css"
import Montagnes from "../assets/Montagnes.png"
import aboutDatas from "../aboutText.js"
import Dropdown from "../components/Dropdown"


function About() {

    return (
        <div className="about-page">
         
          <div className="banner"> 
            
          <img className='banner-image' src={Montagnes} alt='background' />
          </div>

          <div className='details'>

            {aboutDatas.map((elt) => (
              <Dropdown key={elt.id} title={elt.title} content={elt.content} className='dropdown-about' />))}
          </div>

        </div>
    );
}


export default About;



/*<div className="banner"> 
            
<picture>
<source srcset={Montagnes} media="(min-width: 700px)" />
<source srcset={MontagnesR} media="(min-width: 320px)" />
<img src={Montagnes} alt=""/>
</picture>
</div> */ 
// Autre methode pour gerer un double format de photo