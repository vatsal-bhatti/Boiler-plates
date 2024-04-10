import { combineReducers } from "redux";
import { reducerfunction1 } from "./reducerfunctions/reducerfunction";
import { RegisterLoginReducer } from "./reducerfunctions/RegisterLoginReducer";
import { GeneralReducer } from "./reducerfunctions/GeneratlReducer";

const rootReducer = combineReducers({

    registerLoginReducer: RegisterLoginReducer,
    generalReducer:GeneralReducer,


});


export default rootReducer;