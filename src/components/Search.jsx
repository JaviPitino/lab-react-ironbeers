import React from 'react'
import { useState } from 'react'

function Search(props) {

    // 1. Crear Estados
   const [ search, setSearch ] = useState("")

   // 2. Eventos -> HANDLERS
    const handleSearch = (e) => {
        setSearch(e.target.value)
        props.searchList(e.target.value)
    } 

   // 3. Renderizar
  return (

    <div id="form-center" className="container-fluid">
          <div className="row col-6" id="map_section">
        <form>
            <label htmlFor="search"></label>
            <input className="form-control" type="text" name='search' placeholder='Search your beer' onChange={handleSearch} value={search} />
            <br />
        </form>
        </div>
    </div>
  )
}

export default Search