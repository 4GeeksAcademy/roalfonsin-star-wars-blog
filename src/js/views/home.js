import React from "react";

import PeopleCard from "../component/infoCards/peopleCard.jsx";
import VehicleCard from "../component/infoCards/vehicleCard.jsx";
import PlanetCard from "../component/infoCards/planetCard.jsx";

export const Home = () => (
	<div className="text-center container-fluid">
		<div className="row">
			<PeopleCard/>
			<VehicleCard/>
			<PlanetCard/>
		</div>
	</div>
);
