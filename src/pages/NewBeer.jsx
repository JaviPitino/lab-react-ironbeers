import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  // 1. Creamos los estados
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuation] = useState(0);
  const [contributed_by, setContribuited] = useState("");

  // navigate para Redireccionar
  const navigate = useNavigate();

  // 2. Eventos -> HANDLERS
  const handleNameChange = (e) => setName(e.target.value);
  const handleTagLineChange = (e) => setTagline(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value);
  const handleAttenuationChange = (e) => setAttenuation(e.target.value);
  const handleContributedChange = (e) => setContribuited(e.target.value);

  // 3. Conectar con la API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };

      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      navigate("/error");
    }
  };

  // 4. renderizar -> FORM
  return (
    <div>
      <Navbar />
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <strong>Name: </strong>
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="tagline">
          <strong>Tagline: </strong>
        </label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagLineChange}
        />
        <br />
        <label htmlFor="description">
          <strong>Description: </strong>
        </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <label htmlFor="first_brewed">
          <strong>First Brewed: </strong>
        </label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirstBrewedChange}
        />
        <br />
        <label htmlFor="brewers_tips">
          <strong>Brewers Tips: </strong>
        </label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBrewersTipsChange}
        />
        <br />
        <label htmlFor="attenuation_level">
          <strong>Attenuation Level : </strong>
        </label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuationChange}
        />
        <br />
        <label htmlFor="contributed_by">
          <strong>Contributed by: </strong>
        </label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributedChange}
        />
        <br />
        <button> ADD NEW </button>
      </form>
    </div>
  );
}

export default NewBeer;
