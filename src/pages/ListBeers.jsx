import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

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

    <div className="list-beer">
        <div >
            <Navbar />
        </div>
        {
            listBeer.map((eachBeer) => {
            return (
                <div className='container' key={eachBeer._id}>
                    <div>
                    <Link to={`/${eachBeer._id}`}>
                        <img src={eachBeer.image_url} alt="image" width={30} />
                    </Link>
                    </div> 
                    <div>
                        <p>{eachBeer.name}</p>
                        <p>{eachBeer.tagline}</p>
                        <p>{eachBeer.contributed_by}</p>  
                        <hr />
                    </div> 
                    
                </div>
            )
            })
        }
      
    </div>
  )
}

export default ListBeers