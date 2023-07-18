import { element } from "prop-types";
import React, { useState } from "react";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
    
    const [faves, setFaves] = useState([]);

    const [actions] = useState({
        
        addToFaves: title => {
            setFaves([...faves, title]);
        },

        removeFromFaves: title => {
            let newFaves = [];
            for (element of faves)
                if (element != title)
                    newFaves.push(element);
            setFaves(newFaves);
        }

    });

    return (
        <AppContext.Provider value={{faves, actions}}>
            {props.children}
        </AppContext.Provider>
    );
}