import { useState } from "react"
import NextSVG from "../assets/chevron-right.svg"
import PrevSVG from "../assets/chevron-left.svg"
import "../styles/carrousel.css"

export default function Carrousel(props) {

    let [currentSlide, setCurrentSlide] = useState(0)

    const prevPicture = () => {
        setCurrentSlide(currentSlide = currentSlide - 1)
        
        
        if (currentSlide < 0) {
            setCurrentSlide(props.img.length - 1)
            return
        }
    }

    const nextPicture = () => {
        console.log(currentSlide, props.img.length);
        setCurrentSlide(currentSlide = currentSlide + 1)
        if (currentSlide + 1 > props.img.length) {
            setCurrentSlide(0)
        }
    }


    return (
        <div className="carrousel">

            <img className="picture" src={props.img && props.img[currentSlide]} alt="firstPicture" />

            <div className="carrousel-options">

                <p className="carrousel-state">{(currentSlide) ? currentSlide + 1 : 1}/{props.img && props.img.length}</p>

                <button className={`carrousel-prev ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={prevPicture}>
                    <img src={PrevSVG} alt="chevronleft" />
                </button>

                <button className={`carrousel-next ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={nextPicture}>
                    <img src={NextSVG} className="colorwhite" alt="chevronright"></img>
                </button>

            </div>

        </div>
    )

}