import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.character);
	useEffect(()=>{
		actions.loadCharacter(params.theid)
	},[])
	return (
    <div className="jumbotron container">
      <div className="row row-col-2 mt-5 mb-5">
        <div className="col">
          <img
            className="singleImg"
            src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768"
          ></img>
        </div>
        <div className="col text-center">
          <h4>{store.character?.properties?.name}</h4>
          <div>
            <p>Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="container mt-2 mb-5">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Birth Year</th>
              <th scope="col">Gender</th>
              <th scope="col">Height</th>
			  <th scope="col">Hair Color</th>
			  <th scope="col">Eye Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{store.character?.properties?.name}</td>
              <td>{store.character?.properties?.birth_year}</td>
              <td>{store.character?.properties?.gender}</td>
              <td>{store.character?.properties?.height}</td>
			  <td>{store.character?.properties?.hair_color}</td>
			  <td>{store.character?.properties?.eye_color}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Single.propTypes = {
	match: PropTypes.object
};

{/* <h1 className="display-4">This will show the name of: {store.character?.properties?.name}</h1> */}