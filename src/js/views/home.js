import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions}=useContext(Context)
	console.log(store.characters);
	return (
		<div>
			<h1>Characters</h1>
			<Card  />
			{/* vamos a crear botones dinámicos que nos lleven a la info de cada id */}
			{store.characters.map((item)=><li key={item.uid}>{item.name}
			<span><Link className="btn btn-primary" to={`/single/${item.uid}`}>Read more!</Link></span>
			</li>)}
		</div>
		
		
	);
}


