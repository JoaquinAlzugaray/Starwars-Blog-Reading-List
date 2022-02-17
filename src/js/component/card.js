import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({name,gender}) => {
  const { store, actions } = useContext(Context);
  //console.log(store.characters);
  // const names = store.characters.map((item) => {
  //   return item.name
  // })
//   console.log(props);
// console.log(names);
  return (
    <div className="card-group" style={{ margin: "25px" }}>
      <div className="card">
        {/* <img src={props.img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{gender}</p>
          {/* <a>{store.characters.map((item)=> <Link className="btn btn-primary" to={`/single/${item.uid}`}>Learn More!</Link>)}</a> */}
        </div>
      </div>
    </div>
  );
};
