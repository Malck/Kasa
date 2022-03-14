import data from "../data"
import Falaise from "../assets/Falaise.png"
import Card from "../components/Cards"

import "../styles/home.css"
import "../styles/card.css"

function Home() {
    return ( 

       <div className="home-page">
         
          <div className="banner"> 
            <img className='banner-image' src={Falaise} alt='background' />
            <h1 className="slogan">Chez vous, partout et ailleurs</h1>
          </div>

          <div className="cardall-page">

          {data.map((elt) => (
                        <div key={elt.id} className='location'>
                            <Card title={elt.title} cover={elt.cover} id={elt.id} />
                        </div>
                    ))}

          </div>

        </div>
           
    );
  }
  
export default Home;