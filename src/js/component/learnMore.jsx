import React from "react";
import { useParams } from "react-router";

function LearnMore(){

    const id = useParams();
    
    
    if (id.contains("character")){

    }

    if (id.contains("planet")){

    }

    if (id.contains("vehicle")){
        
    }

    return (
        <h1>Success</h1>
    );
}

export default LearnMore;