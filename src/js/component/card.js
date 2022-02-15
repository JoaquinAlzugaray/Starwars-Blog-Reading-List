import React, {useContext} from "react";
import { Context } from "../store/appContext";


export const Card = () => {
  const {store, actions}=useContext(Context)
    return (
      <div className="card-group" style={{margin:"25px"}}>
<div className="card">
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">
    {store.characters.map((item)=><span key={item.uid}>{item.name}</span>)}
    </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    );
}
