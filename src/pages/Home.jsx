import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Bienvenidos a Beers</h1>
        <NavLink to="/beers" >
        <img src="../beers.png" alt="Cerveza" />
         <h2>All Beers</h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nulla, dicta, omnis deserunt minus nemo ipsum provident eligendi enim, error magni. Deleniti, quisquam? Possimus reprehenderit ab ratione pariatur! Numquam laboriosam magni voluptatibus repellendus omnis vitae, dolores voluptatum. Blanditiis, suscipit et.</p>
         </NavLink>
        <NavLink to="/random" > 
        <img src="../random-beer.png" alt="Cerveza" />
         <h2>Random Beer</h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nulla, dicta, omnis deserunt minus nemo ipsum provident eligendi enim, error magni. Deleniti, quisquam? Possimus reprehenderit ab ratione pariatur! Numquam laboriosam magni voluptatibus repellendus omnis vitae, dolores voluptatum. Blanditiis, suscipit et.</p>
        </NavLink>
        <NavLink to="/new-beer" >
        <img src="../new-beer.png" alt="Cerveza" />
         <h2>New Beer</h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nulla, dicta, omnis deserunt minus nemo ipsum provident eligendi enim, error magni. Deleniti, quisquam? Possimus reprehenderit ab ratione pariatur! Numquam laboriosam magni voluptatibus repellendus omnis vitae, dolores voluptatum. Blanditiis, suscipit et.</p>
        </NavLink>
    </div>
  )
}

export default Home