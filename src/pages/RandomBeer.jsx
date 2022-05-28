import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
import MoonLoader from "react-spinners/MoonLoader";

function RandomBeer() {

  // 1. Crear estado que guarda la info
  const [ randomBeer, setRanbdomBeer ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const navigate = useNavigate()

  // 2. Acceder a componentDidMount
  useEffect(() => {
    getRandomBeer()
  }, [])

  // 3. Conectar con la API
  const getRandomBeer = async () => {

    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      setRanbdomBeer(response.data)
      setLoading(false)

    } catch(error) { navigate("/error") }
  }

  // 4. Efecto loading
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
          <img src={randomBeer.image_url} alt="beer" width={80} />
        </div>
        <div className='text-container'>
          <h4>{randomBeer.name}</h4>
          <h5>{randomBeer.tagline}</h5>
          <h6>{randomBeer.first_brewed}</h6>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
        <Link to="/random"></Link>
      </div>
    </div>
  )
}

export default RandomBeer