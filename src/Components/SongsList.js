import React from "react";

import songsData from "../Data/Songsdata";
import { useDispatch,useSelector } from "react-redux";
import clicked_song from "../redux/Actions/MovieAction";

const SongsLists=()=>{
let dispatch=useDispatch();

    return(
        <div>
            {songsData.map((iteam)=>(
              <p key={iteam.id} onClick={()=>{
                dispatch(clicked_song(iteam));
              }}>{iteam.name}</p>
            ))
            }
        </div>
    )
}
export default SongsLists;