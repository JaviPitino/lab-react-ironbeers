import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useParams } from 'react'

function ListBeers() {

    const navigate = useNavigate()

    // 1. ---- ESTADOS ----
    const [ listBeer, setListBeer ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    // 2. ---- Buscar la info ----
    useEffect(() => {
        getListBeer()
    }, [])

    // 3. ---- Conectar a la api ----
    const getListBeer = async() => {

        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response)
            setListBeer(response.data)
            setLoading(false)
        } catch(error) {
            navigate("/error")
        }
    }

    // 4. Error
    if ( loading === true) {
        return <h3>...loading...</h3>
    }

  return (

    <div>
        <div className="navbar" >
            <Navbar />
        </div>
        {
            listBeer.map((eachBeer) => {
                return (
                    <li key={eachBeer._id}>
                        <Link to={`/${eachBeer._id}`}>{eachBeer.name}</Link>
                    </li>
                )
            })
        }
    </div>
  )
}

export default ListBeers