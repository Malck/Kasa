import Falaise from "../assets/Falaise.png"
//import Header from "../components/Header"
import "../styles/home.css"

function Home() {
    return ( 
       <div className="home-page">
         
          <div className="banner"> 
            <img className='banner-image' src={Falaise} alt='background' />
            <h1 className="slogan">Chez vous, partout et ailleurs</h1>
          </div>

          <div className="card">

              les differents hotel ici

          </div>

        </div>
       
      
    );
  }
  
export default Home;