import { combineReducers } from "redux";
import { reducerfunction1 } from "./reducerfunctions/reducerfunction";


const rootReducer = combineReducers({

reducer1: reducerfunction1,


});


export default rootReducer;