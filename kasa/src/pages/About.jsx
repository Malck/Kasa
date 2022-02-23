//import { Link } from 'react-router-dom'
import "../styles/about.css"
import Montagnes from "../assets/Montagnes.png"
//import aboutDatas from "../aboutText"


function About() {
    
    return (
        <div className="about-page">
         
          <div className="banner"> 
            <img className='banner-image' src={Montagnes} alt='background' />
          </div>

        </div>
    );
}


export default About;