import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({dataCharacter}) => {
  const { store, actions } = useContext(Context);
  //console.log(store.characters);
  // const names = store.characters.map((item) => {
  //   return item.name
  // })
//   console.log(props);
// console.log(names);
// let {name, gender} = dataCharacter; en lugar de usar ? para arrelgar el problema y volcar la info, desestrucutamos dataCharacter
let id = dataCharacter?.url[dataCharacter?.url.length-2]
console.log(id);
console.log(dataCharacter);
  return (
    <div className="card-group">
      <div className="card" style={{ margin: "25px" }}>
        {/* <img src={props.img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{dataCharacter?.name}</h5>
          <p className="card-text">{dataCharacter?.gender}</p>
          <p className="card-text">{dataCharacter?.hair_color}</p>
          <p className="card-text">{dataCharacter?.eye_color}</p>
          <div className="container">
            <div className="row">
            <Link className="btn btn-primary" to={`/single/${id}`}>Learn More!</Link>
            </div>
            <div className="col">
            <button type="button" className="btn btn-outline-warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
            </button>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};
