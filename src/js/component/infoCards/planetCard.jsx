import React from "react";

import planetImage from "../../../img/planets/hoth.jpg";

function PlanetCard(){

    const listElementsClasses = "list-group-item p-0 border-0 text-start";

    const planetInfo = {
        name: "Hoth",
        diameter: "7200",
        orbital_period: "549",
        climate: "frozen",
    };

    return(
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={planetImage} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{planetInfo.name}</h5>
                <ul className="list-group">
                    <li className={listElementsClasses}>Diameter: {planetInfo.diameter}</li>
                    <li className={listElementsClasses}>Orbital Period: {planetInfo.orbital_period}</li>
                    <li className={listElementsClasses}>Climate: {planetInfo.climate}</li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <button type="button" className="btn btn-outline-primary">Learn More</button>
                <button type="button" className="btn btn-outline-warning fw-bold">♡</button>
            </div>
        </div>
    );
};

export default PlanetCard;