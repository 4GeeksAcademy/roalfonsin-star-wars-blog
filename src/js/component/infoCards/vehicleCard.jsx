import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../store/slices/favoritesSlice";

function VehicleCard({newVehicleInfo}){

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const listElementsClasses = "list-group-item p-0 border-0 text-start";
    const learnMoreUrl = "/learnmore/:" + newVehicleInfo.id;

    let favoritesButtonClasses = "btn btn-outline-warning fw-bold";
    if (favorites.includes(newVehicleInfo))
        favoritesButtonClasses = "btn btn-outline-warning fw-bold bg-warning-subtle";
    else
        favoritesButtonClasses = "btn btn-outline-warning fw-bold";

    const vehicleInfo = {
        name: newVehicleInfo.name,
        vehicle_class: newVehicleInfo.vehicle_class,
        crew: newVehicleInfo.crew,
        passengers: newVehicleInfo.passengers,
        imageUrl: newVehicleInfo.imageUrl
    };

    function addThisFavorite(){
        if (!favorites.includes(newVehicleInfo))
            dispatch(addFavorite(newVehicleInfo));
    }

    return(
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={vehicleInfo.imageUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{vehicleInfo.name}</h5>
                <ul className="list-group">
                    <li className={listElementsClasses}>Vehicle Class: {vehicleInfo.vehicle_class}</li>
                    <li className={listElementsClasses}>Crew: {vehicleInfo.crew}</li>
                    <li className={listElementsClasses}>Passengers: {vehicleInfo.passengers}</li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <Link to={learnMoreUrl}><button type="button" className="btn btn-outline-primary">Learn More</button></Link>
                <button type="button" className={favoritesButtonClasses} onClick={addThisFavorite}>♡</button>
            </div>
        </div>
    );
};

export default VehicleCard;