import StarSolid from "../assets/star-solid.svg"
import StarEmpty from "../assets/star-empty.svg"

import "../styles/stars.css"

export default function Stars(props) {

    return (
        <div className="stars-content">
            
            {Array.from({length: 5 } , (item, itemKey) => itemKey < props.star ? <img key={itemKey} src={StarSolid} alt="star svg" className="starsolid" /> : <img key={itemKey} src={StarEmpty} alt="star svg" className="starsempty" />)}
        </div>

        
    )

}