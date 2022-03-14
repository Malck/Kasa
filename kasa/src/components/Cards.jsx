import React from 'react';
import {Link}  from "react-router-dom";
 

function Card({cover,title,id}) {
    return(
        <div className='card' >   

            <Link to={`/locations/${id}`}>            

            <img className="card-image" src={cover} alt="cardImage" />  

            <h1 className='card-title'>{title}</h1>

            </Link> 

        </div>
    )
}

export default Card;