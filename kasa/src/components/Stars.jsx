import StarSolid from "../assets/star-solid.svg"
import StarEmpty from "../assets/star-empty.svg"

import "../styles/stars.css"

export default function Stars(props) {

    return (
        <div className="stars-content">
            
            {Array.from({length: 5 } , (v, ids) => ids < props.star ? <img key={ids} src={StarSolid} alt="star svg" className="starsolid" /> : <img key={ids} src={StarEmpty} alt="star svg" className="starsempty" />)}
        </div>

        
    )

}