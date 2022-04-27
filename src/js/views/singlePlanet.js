import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
  console.log(store.planet);
	useEffect(()=>{
		actions.loadPlanet(params.theid)
	},[])
	return (
    <div className="jumbotron container">
      <div className="row row-col-2 mt-5 mb-5">
        <div className="col">
          <img
            className="singleImg"
            src="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_1633e73f.jpeg?region=164%2C0%2C953%2C536&width=768"
          ></img>
        </div>
        <div className="col text-center">
          <h4>{store.planet.properties?.name}</h4>
          <div>
            <p>Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="container mt-2 mb-5">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Climate</th>
              <th scope="col">Population</th>
              <th scope="col">Orbital Period</th>
			  <th scope="col">Rotation Period</th>
			  <th scope="col">Diameter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
			  <td>{store.planet.properties?.name}</td>
			  <td>{store.planet.properties?.climate}</td>
              <td>{store.planet.properties?.population}</td>
              <td>{store.planet.properties?.orbital_period}</td>
              <td>{store.planet.properties?.rotation_period}</td>
              <td>{store.planet.properties?.diameter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};