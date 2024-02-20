import { CLICKED_SONG } from "../Actions/Actiontype";
// import { clicked_song } from "../Actions/MovieAction";

let intailstate=""
const Moviereducer=(state=intailstate,action)=>{
    if(action.type==CLICKED_SONG)
    {
        return action.payload;
    }
else{
    return state;
}
}

export default Moviereducer;