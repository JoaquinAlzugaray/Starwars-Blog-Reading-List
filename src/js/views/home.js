import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetsCard } from "../component/planetsCard";
import { Link } from "react-router-dom";

// img="https://starwars-visualguide.com/assets/img/characters/1.jpg"

export const Home = () => {
	const {store, actions}=useContext(Context)
	// console.log(store.characters);
	const cards = store.characters.map((item, index) => {
		return 	<CharacterCard key={index}
		// name={item.name}
		// gender={item.gender}
		// linkurl={`/single/${item.uid}`}
		dataCharacter = {{...item}}
		/>
	  })
	  console.log(store.planets);
const cardsPlanet = store.planets.map((item, index) => (
	<PlanetsCard key={index}
	name= {item.name}
	climate= {item.climate}
	population= {item.population}
	terrain= {item.terrain}
	url= {item.url}
	/>
) )
	return (
		<div>
			<div className="container mt-2">
			<h1>Characters</h1>
			</div>
			<div className="container">
				<div className="scrollmenu">
			{cards}
				</div>
			</div>
			<div className="container mt-2">
				<h1>Planets</h1>
				<div className="scrollmenu">
				{cardsPlanet}
				</div>
			</div>
			
			{/* vamos a crear botones dinámicos que nos lleven a la info de cada id */}
			{/* {store.characters.map((item)=><li key={item.uid}>{item.name}
			<span><Link className="btn btn-primary" to={`/single/${item.uid}`}>Read more!</Link></span>
			</li>)} */}
		</div>
		
		// {store.characters.map((item)=><span key={item.uid}>{item.name}</span>)}

	);
}


