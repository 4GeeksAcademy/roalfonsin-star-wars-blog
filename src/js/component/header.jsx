import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/logo.png";

function Header (){
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
                            Falta agregar funcionalidad
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;