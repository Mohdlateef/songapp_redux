import React from "react";
import SongsLists from "./Components/SongsList";
import MovieDisplay from "./Components/SongsDisplay";

const App=()=>{

  return(
    <div
    style={{
      display:"flex",
      
    }}>
<SongsLists />
<MovieDisplay />

    </div>
  )
}

export default App
