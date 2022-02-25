//import { Link } from 'react-router-dom'
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
              <Dropdown key={elt.id} title={elt.title} content={elt.content} name='dropdown-about' nameOfClass='dropdown-menu' />))}
          </div>

        </div>
    );
}


export default About;