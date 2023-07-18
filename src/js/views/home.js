import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector.js";

import PeopleCard from "../component/infoCards/peopleCard.jsx";
import VehicleCard from "../component/infoCards/vehicleCard.jsx";
import PlanetCard from "../component/infoCards/planetCard.jsx";

const listItemClasses = "list-group-item border-0";
const listGroupClasses = "list-group list-group-horizontal overflow-auto position-relative";

export function Home(){

	const characters = useSelector((state) => state.characters);
	const planets = useSelector((state) => state.planets);
	const vehicles = useSelector((state) => state.vehicles);
	const favorites = useSelector((state) => state.favorites);

	return(
		<div className="text-center container-fluid">
			<div className="row my-4">
				<h1 className="text-danger">Characters</h1>
				<ul className={listGroupClasses}>
					{characters.map(element => {
						return (
								<li className={listItemClasses} key={element.name}>
									<PeopleCard characterInfo ={element}/>
								</li>);	
					})}
				</ul>
			</div>
			<div className="row my-4">
				<h1 className="text-danger">Vehicles</h1>
				<ul className={listGroupClasses}>
					{vehicles.map(element => {
						return (
								<li className={listItemClasses} key={element.name}>
									<VehicleCard newVehicleInfo ={element}/>
								</li>);	
					})}
				</ul>
			</div>
			<div className="row my-4">
				<h1 className="text-danger">Planets</h1>
				<ul className={listGroupClasses}>
					{planets.map(element => {
						return (
								<li className={listItemClasses} key={element.name}>
									<PlanetCard newPlanetInfo ={element}/>
								</li>);	
					})}
				</ul>
			</div>
		</div>
	);
}
