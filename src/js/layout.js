import React from "react";
import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCharacter } from "./store/slices/charactersSlice";

import ScrollToTop from "./component/scrollToTop";
import Header from "./component/header.jsx";

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
						name: characterInformationToScrape.name,
						birth_year: characterInformationToScrape.birth_year,
						gender: characterInformationToScrape.gender,
						height: characterInformationToScrape.height,
						skin_color: characterInformationToScrape.skin_color,
						eye_color: characterInformationToScrape.eye_color
				};
				dispatch(addCharacter(characterInfo));
			}
			
			
		}
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
						</Routes>
					</ScrollToTop>
				</BrowserRouter>
			</div>
	);
};

export default Layout;
