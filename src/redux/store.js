import { createStore } from "redux";
import Moviereducer from "./Reducers/Moviereducer";
const store=createStore(Moviereducer);


export default store;