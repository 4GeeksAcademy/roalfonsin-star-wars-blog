import React from "react";

function PeopleCard({characterInfo}){

    const listElementsClasses = "list-group-item p-0 border-0 text-start";

    const peopleInfo = {
        name: characterInfo.name,
        gender: characterInfo.gender,
        eye_color: characterInfo.eye_color,
        height: characterInfo.height,
        imageUrl: characterInfo.imageUrl
    };

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
                <button type="button" className="btn btn-outline-primary">Learn More</button>
                <button type="button" className="btn btn-outline-warning fw-bold">♡</button>
            </div>
        </div>
    );
};

export default PeopleCard;