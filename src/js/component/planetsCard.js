import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsCard = (props) => {
  const { store, actions } = useContext(Context);
console.log("hola");
let id = props.url[props.url.length-2]
console.log(id);
// console.log(props.url);
// console.log(store.favorites.length);
// console.log(store.favorites);  
  //console.log(store.characters);
  // const names = store.characters.map((item) => {
  //   return item.name
  // })
//   console.log(props);
// console.log(names);
// let {name, gender} = dataCharacter; en lugar de usar ? para arrelgar el problema y volcar la info, desestrucutamos dataCharacter
// let id = dataCharacter?.url[dataCharacter?.url.length-2]
// console.log(id);
// console.log(dataCharacter);
  return (
    <div className="card-group">
      <div className="card" style={{ margin: "25px", width: "20rem" }}>
        {/* <img src={dataCharacter?.img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Population: {props.population} </p>
          <p className="card-text">Terrain: {props.terrain} </p>
          <div className="container">
            <div className="row row-cols-2">
              <div className="col">
              <Link className="btn btn-primary" to={`/singlePlanet/${id}`}>
                Learn More!
              </Link>
              </div>
              <div className="col d-flex justify-content-end">
              <button type="button" className="btn btn-outline-warning" onClick={()=>actions.addToFavorites(props)}>
              <i className="bi bi-heart"></i>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};