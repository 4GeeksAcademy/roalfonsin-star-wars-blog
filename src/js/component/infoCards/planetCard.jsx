import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../store/slices/favoritesSlice";

function PlanetCard({newPlanetInfo}){
    
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const listElementsClasses = "list-group-item p-0 border-0 text-start";
    const learnMoreUrl = "/learnmore/:" + newPlanetInfo.id;

    let favoritesButtonClasses = "btn btn-outline-warning fw-bold";
    if (favorites.includes(newPlanetInfo))
        favoritesButtonClasses = "btn btn-outline-warning fw-bold bg-warning-subtle";
    else
        favoritesButtonClasses = "btn btn-outline-warning fw-bold";

    const planetInfo = {
        name: newPlanetInfo.name,
        diameter: newPlanetInfo.diameter,
        orbital_period: newPlanetInfo.orbital_period,
        climate: newPlanetInfo.climate,
        imageUrl: newPlanetInfo.imageUrl
    };

    function addThisFavorite(){
        if (!favorites.includes(newPlanetInfo))
            dispatch(addFavorite(newPlanetInfo));
    }

    return(
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={planetInfo.imageUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{planetInfo.name}</h5>
                <ul className="list-group">
                    <li className={listElementsClasses}>Diameter: {planetInfo.diameter}</li>
                    <li className={listElementsClasses}>Orbital Period: {planetInfo.orbital_period}</li>
                    <li className={listElementsClasses}>Climate: {planetInfo.climate}</li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-around">
            <Link to={learnMoreUrl}><button type="button" className="btn btn-outline-primary">Learn More</button></Link>
                <button type="button" className={favoritesButtonClasses} onClick={addThisFavorite}>♡</button>
            </div>
        </div>
    );
};

export default PlanetCard;