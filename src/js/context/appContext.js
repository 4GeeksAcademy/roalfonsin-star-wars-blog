import { element } from "prop-types";
import React, { useState } from "react";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
    
    const [faves, setFaves] = useState([]);

    const [actions] = useState({
        
        addToFaves: title => {
            setFaves(faves => [...faves, title]);
        },

        removeFromFaves: title => {
            setFaves(faves => {
                let newFaves = [];
                for (let element of faves)
                    if (element != title)
                        newFaves.push(element);
                return newFaves;
            });
        }

    });

    return (
        <AppContext.Provider value={{faves, actions}}>
            {props.children}
        </AppContext.Provider>
    );
}