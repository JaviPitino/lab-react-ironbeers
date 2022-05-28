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
    <div>
        <form>
            <label htmlFor="search">Search Beer: </label>
            <input type="text" name='search' onChange={handleSearch} value={search} />
        </form>
    </div>
  )
}

export default Search