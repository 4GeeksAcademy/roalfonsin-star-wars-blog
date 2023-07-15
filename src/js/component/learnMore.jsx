import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { element } from "prop-types";

function LearnMore(){

    const params = useParams();
    const characters = useSelector((state) => state.characters);
	const planets = useSelector((state) => state.planets);
	const vehicles = useSelector((state) => state.vehicles);
    
    const id = params.id.substring(1);
    let infoLabels = {};
    let imageUrl = "";
    
    if (id.includes("character")){
        for (let index in characters){
            const currentCharacter = characters[index];
            if (currentCharacter.id == id){
                infoLabels["Name"] = currentCharacter.name;
                infoLabels["Birth Year"] = currentCharacter.birth_year;
                infoLabels["Gender"] = currentCharacter.gender;
                infoLabels["Height"] = currentCharacter.height;
                infoLabels["Sking Color"] = currentCharacter.skin_color;
                infoLabels["Eye Color"] = currentCharacter.eye_color;
                imageUrl = currentCharacter.imageUrl;
            }
        }
    }

    if (id.includes("planet")){
        for (let index in planets){
            const currentPlanet = planets[index];
            if (currentPlanet.id == id){
                infoLabels["Name"] = currentPlanet.name;
                infoLabels["Diameter"] = currentPlanet.diameter;
                infoLabels["Orbital Period"] = currentPlanet.orbital_period;
                infoLabels["Climate"] = currentPlanet.climate;
                infoLabels["Terrain"] = currentPlanet.terrain;
                infoLabels["Gravity"] = currentPlanet.gravity;
                imageUrl = currentPlanet.imageUrl;
            }
        }
    }

    if (id.includes("vehicle")){
        for (let index in vehicles){
            const currentVehicle = vehicles[index];
            if (currentVehicle.id == id){
                infoLabels["Name"] = currentVehicle.name;
                infoLabels["Model"] = currentVehicle.model;
                infoLabels["Crew"] = currentVehicle.crew;
                infoLabels["Passengers"] = currentVehicle.passengers;
                infoLabels["Vehicle Class"] = currentVehicle.vehicle_class;
                infoLabels["Cargo Capacity"] = currentVehicle.cargo_capacity;
                imageUrl = currentVehicle.imageUrl;
            }
        }
    }


    return (
        <div className="container-fluid">
            
            <div className="row m-2">

                <div className="col d-flex justify-content-center align-items-center m-2">
                    <img src={imageUrl}/>
                </div>

                <div className="col m-2">

                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            <h1>{infoLabels["Name"]}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center flex-column">
                            <p>
                                Legend has it that the xyloplasm was created by ancient beings as a gift to the world, imbued with the essence of nature and magic. It is rumored to be found deep within enchanted forests or hidden in secret, forgotten corners of the world.
                            </p>
                            <p>
                            The xyloplasm is highly sought after by musicians, collectors, and seekers of mystical artifacts, as its musical vibrations are believed to possess healing properties and the ability to unlock hidden potential in individuals. It is said that those who have the privilege of encountering the xyloplasm are forever changed, their creativity and inner harmony enhanced.
                            </p>
                        </div>
                        <div className="col-1"></div>
                    </div>

                </div>

            </div>

            <div className="row border-top border-danger m-2">
                {Object.keys(infoLabels).map(infoKey => {
                    return(
                        <div className="col text-center" key={infoKey}>
                            <h2 className="text-danger">{infoKey}</h2>
                            <p className="fs-4">{infoLabels[infoKey]}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default LearnMore;