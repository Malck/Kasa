//import './Tags.css'

export default function Tags(props) {

    return (
        <div className="tags">
            {
                props.tags && props.tags.map((tag, index) => {
                    return <div className="tag" key={'tag'+index}><p>{tag}</p></div>
                })
            }
        </div>
    )

}


/*

dans Location.jsx on pourrait ecrire 
                    <div className='tag-container'>
                        {location.tags.map((tag, index) => (
                            <Tags content={tag} key={index} />
                        ))}
                    </div>


dans Tags.jsx on ecrirait alors 

import React from 'react';

function Tags({tag}) {
    
        
        return (
            <div className='tags'>{tag}
            </div>
        );
}

export default Tags;
*/