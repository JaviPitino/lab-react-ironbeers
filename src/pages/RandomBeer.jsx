import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

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
  if ( loading === true ) {
    return <h3>...Loading...</h3>
  }

  // 5. Renderizar
  return (
    <div>
        <Navbar />
        <h1> RandomBeer </h1> 
        <img src={randomBeer.image_url} alt="beer" width={80} />
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>

        <Link to="/random"></Link>
    </div>
  )
}

export default RandomBeer