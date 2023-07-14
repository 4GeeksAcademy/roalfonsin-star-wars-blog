import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector.js";

import PeopleCard from "../component/infoCards/peopleCard.jsx";
import VehicleCard from "../component/infoCards/vehicleCard.jsx";
import PlanetCard from "../component/infoCards/planetCard.jsx";

const listItemClasses = "list-group-item border-0";
const listGroupClasses = "list-group list-group-horizontal overflow-auto position-relative";

export function Home(){

	const characters = useSelector((state) => state.characters);

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
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
					<li className={listItemClasses}><VehicleCard/></li>
				</ul>
			</div>
			<div className="row my-4">
				<h1 className="text-danger">Planets</h1>
				<ul className={listGroupClasses}>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
					<li className={listItemClasses}><PlanetCard/></li>
				</ul>
			</div>
		</div>
	);
}
