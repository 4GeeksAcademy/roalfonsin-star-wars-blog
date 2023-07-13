import React from "react";

import vehicleImage from "../../../img/vehicles/att.jpg";

function VehicleCard(){

    const listElementsClasses = "list-group-item p-0 border-0 text-start";

    const peopleInfo = {
        name: "Sand Crawler",
        vehicle_class: "assault walker",
        crew: "1",
        passengers: "10",
    };

    return(
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={vehicleImage} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{peopleInfo.name}</h5>
                <ul className="list-group">
                    <li className={listElementsClasses}>Vehicle Class: {peopleInfo.vehicle_class}</li>
                    <li className={listElementsClasses}>Crew: {peopleInfo.crew}</li>
                    <li className={listElementsClasses}>Passengers: {peopleInfo.passengers}</li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <button type="button" className="btn btn-outline-primary">Learn More</button>
                <button type="button" className="btn btn-outline-warning fw-bold">♡</button>
            </div>
        </div>
    );
};

export default VehicleCard;