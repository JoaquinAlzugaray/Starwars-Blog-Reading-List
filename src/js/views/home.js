import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store, actions}=useContext(Context)
	console.log(store.characters);
	return (
		<div>
			<h1>Characters</h1>
			<Card  />
			{store.characters.map((item)=><li key={item.uid}>{item.name}</li>)}
		</div>
		
		
	);
}


