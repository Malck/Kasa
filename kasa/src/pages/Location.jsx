import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'

import data from "../data";
import Dropdown from "../components/Dropdown";
import Avatar from "../components/Avatar";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Stars from "../components/Stars"

import '../styles/location.css'
import "../styles/avatar.css"



export default function LocationPage() {

    const [location, setLocation] = useState({})

    const { id } = useParams()

    let navigate = useNavigate();

    useEffect(() => {

        const article = data.filter((logement) => logement.id === id)[0]

        console.log(article)

        if (!article){
            return navigate("/*");
        }

        setLocation(article)  

    }, [id, navigate])


    return (
        <div>
            
            <main className='container-locations'>

                
              <Carrousel img={location.pictures} />

              <div className="ensemble">

                <div>
                <h1 className='title-of-location'>{location.title}</h1>
                <h2 className='place-of-location'> {location.location} </h2>

                <Tags tags={location.tags} />
                </div>


                <div className='profile-container'>

                  <Avatar img={location.host && location.host.picture} name={location.host && location.host.name} />
                  <Stars star={location.rating} />
                </div>

              </div>


                <section className='details-container'>
                    <Dropdown  title='Description' content={location.description} />
                    <Dropdown  title='Équipements' content={location.equipments} />
                </section>


            </main>
            
        </div>
    )

}