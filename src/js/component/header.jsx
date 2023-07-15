import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/logo.png";

import { useDispatch, useSelector } from "react-redux";

function Header (){

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    return (
        <div className="container-fluid bg-secondary-subtle">
            <div className="row border">
                
                <div className="col">
                    <Link to="/">
                        <img
                            src={starWarsLogo}
                            className="img-thumbnail bg-secondary-subtle border-0"
                            style={{height: "100px"}}
                        />
                    </Link>
                </div>

                <div className="col d-flex justify-content-center align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul className="dropdown-menu">
                            {favorites.map(element => {
                                return (
                                    <li key={element.id} className="m-1 border">
                                        <div className="row">
                                            <div className="col-10">{element.name}</div>
                                            <div className="col-2"><button type="button" className="btn btn-outline-danger float-end">X</button></div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;