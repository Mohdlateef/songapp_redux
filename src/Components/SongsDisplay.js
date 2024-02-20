import React from "react";
import {  useSelector } from "react-redux";

const MovieDisplay=()=>{

    
    let data=useSelector(state=>state);
    console.log(data);
    return(
        
        <div>
            <h3>Display Songs</h3>
{
    data&& <div>
        <div>{data.name}</div>
        <div>{data.artist}</div>
        <div>{data.album}</div>

    </div>
}
        </div>
    )
}
export default MovieDisplay;