import React from "react";
import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCharacter } from "./store/slices/charactersSlice";
import { addPlanet } from "./store/slices/planetsSlice";
import { addVehicle } from "./store/slices/vehiclesSlice";

import ScrollToTop from "./component/scrollToTop";
import Header from "./component/header.jsx";
import LearnMore from "./component/learnMore.jsx";

import { Home } from "./views/home";


//create your first component
const Layout = () => {

	const dispatch = useDispatch();
	
	useEffect( () => {
		
		const fetchCharacters = async () => {
			for (let index = 1; index<=10; index++){
			    const characterUrl = "https://www.swapi.tech/api/people/"+index;
				const response = await fetch(characterUrl);
				const responseAsObject = await response.json();
				const characterInformationToScrape = await responseAsObject.result.properties;
				const characterInfo = {
						id: "character"+characterInformationToScrape.name.replace(" ","_"),
						name: characterInformationToScrape.name,
						birth_year: characterInformationToScrape.birth_year,
						gender: characterInformationToScrape.gender,
						height: characterInformationToScrape.height,
						skin_color: characterInformationToScrape.skin_color,
						eye_color: characterInformationToScrape.eye_color,
						imageUrl: "https://starwars-visualguide.com/assets/img/characters/"+ String(index) +".jpg"
				};
				dispatch(addCharacter(characterInfo));
			}
			
			
		}

		const fetchPlanets = async () => {
			for (let index = 2; index<=11; index++){
			    const planetUrl = "https://www.swapi.tech/api/planets/"+index;
				const response = await fetch(planetUrl);
				const responseAsObject = await response.json();
				const planetInformationToScrape = await responseAsObject.result.properties;
				const planetInfo = {
						id: "planet"+planetInformationToScrape.name.replace(" ","_"),
						name: planetInformationToScrape.name,
						diameter: planetInformationToScrape.diameter,
						orbital_period: planetInformationToScrape.orbital_period,
						climate: planetInformationToScrape.climate,
						terrain: planetInformationToScrape.terrain,
						gravity: planetInformationToScrape.gravity,
						imageUrl: "https://starwars-visualguide.com/assets/img/planets/"+ String(index) +".jpg"
				};
				dispatch(addPlanet(planetInfo));
			}
			
			
		}

		const fetchVehicles = async () => {
			const vehiclesIndex = ["4", "6", "7", "14", "16", "18", "19", "20", "24"]
			for (let index of vehiclesIndex){
			    const vehicleUrl = "https://www.swapi.tech/api/vehicles/"+index;
				const response = await fetch(vehicleUrl);
				const responseAsObject = await response.json();
				const vehicleInformationToScrape = await responseAsObject.result.properties;
				const vehicleInfo = {
						id: "vehicle"+vehicleInformationToScrape.name.replace(" ","_"),
						name: vehicleInformationToScrape.name,
						model: vehicleInformationToScrape.model,
						crew: vehicleInformationToScrape.crew,
						passengers: vehicleInformationToScrape.passengers,
						vehicle_class: vehicleInformationToScrape.vehicle_class,
						cargo_capacity: vehicleInformationToScrape.cargo_capacity,
						imageUrl: "https://starwars-visualguide.com/assets/img/vehicles/" + index + ".jpg"
				};
				dispatch(addVehicle(vehicleInfo));
			}
			
			
		}
		fetchVehicles();
		fetchPlanets();
		fetchCharacters();

	},[]);

	return (
			<div>
				<BrowserRouter>
					<ScrollToTop>
						<Header/>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<h1>Not found!</h1>} />
							<Route path="/learnmore/:id" element ={<LearnMore/>} ></Route>
						</Routes>
					</ScrollToTop>
				</BrowserRouter>
			</div>
	);
};

export default Layout;
