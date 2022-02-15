import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
	<nav className="navbar navbar-light bg-light">
	<div className="container">
		<Link to="/">
		  <img className="navbar-brand mb-0 h1" src="https://img.icons8.com/ios/50/000000/star-wars.png"></img>
		</Link>
		<div className="d-flex dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
	</div>
  </nav>
  );
};

