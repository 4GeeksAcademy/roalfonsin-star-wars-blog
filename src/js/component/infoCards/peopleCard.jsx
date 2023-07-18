import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";

function PeopleCard({characterInfo}){

    const context = useContext(AppContext);
    const favorites = context.faves;
    const listElementsClasses = "list-group-item p-0 border-0 text-start";
    const learnMoreUrl = "/learnmore/:" + characterInfo.id;
    
    let favoritesButtonClasses = "btn btn-outline-warning fw-bold";
    if (favorites.includes(characterInfo))
        favoritesButtonClasses = "btn btn-outline-warning fw-bold bg-warning-subtle";
    else
        favoritesButtonClasses = "btn btn-outline-warning fw-bold";

    const peopleInfo = {
        name: characterInfo.name,
        gender: characterInfo.gender,
        eye_color: characterInfo.eye_color,
        height: characterInfo.height,
        imageUrl: characterInfo.imageUrl
    };

    function addThisFavorite(){
        if (!context.faves.includes(characterInfo))
            context.actions.addToFaves(characterInfo);
    }

    return(
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={peopleInfo.imageUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{peopleInfo.name}</h5>
                <ul className="list-group">
                    <li className={listElementsClasses}>Gender: {peopleInfo.gender}</li>
                    <li className={listElementsClasses}>Eye Color: {peopleInfo.eye_color}</li>
                    <li className={listElementsClasses}>Height: {peopleInfo.height}</li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <Link to={learnMoreUrl}><button type="button" className="btn btn-outline-primary">Learn More</button></Link>
                <button type="button" className={favoritesButtonClasses} onClick={addThisFavorite}>♡</button>
            </div>
        </div>
    );
};

export default PeopleCard;