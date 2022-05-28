import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MoonLoader from "react-spinners/MoonLoader";

function SingleBeer() {

    // 1. Crear estado que guarda la info
    const [ beerDetails, setBeerDetails ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const navigate = useNavigate();

    const { id } = useParams()

    // 2. Acceder a componentDidMount
    useEffect(() => {
        getBeerDetails();
    })

    // 3. Conectar con la API
    const getBeerDetails = async () => {

        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(response.data)
            setBeerDetails(response.data)
            setLoading(false)
        } catch(error) { navigate("/error") }
    }

    // 4. Efecto Loading
    if ( loading === true) {
        return <MoonLoader />
    }


  // 5. Renderizar
  return (
    <div>
       <div>
        <Navbar />
      </div>
        <div className="container">
            <div className='img-container'>
                <img src={beerDetails.image_url} alt="beer" width={80} />
            </div>
            <div className='text-container'>
                <h4>{beerDetails.name}</h4>
                <h5>{beerDetails.tagline}</h5>
                <h6>{beerDetails.first_brewed}</h6>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <p>{beerDetails.contributed_by}</p>
            </div>
        </div>
        <Link to="/beers"></Link>
    </div>
  )
}

export default SingleBeer