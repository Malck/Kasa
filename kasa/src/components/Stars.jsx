import StarSolid from "../assets/star-solid.svg"
import StarEmpty from "../assets/star-empty.svg"

import "../styles/stars.css"

export default function Stars(props) {
//premier Array remplis d'etoiles solid selon le nombre de ratings sur le logement , le deuxieme calcul 5 - celui ci pour remplir le reste d'etoiles vide/grises
    return (
        <div className="stars-content">
            
            {Array.from({length: 5 } , (v, ids) => ids < props.star ? <img key={ids} src={StarSolid} alt="star svg" className="starsolid" /> : <img key={ids} src={StarEmpty} alt="star svg" className="starsempty" />)}
        </div>

        
    )

}