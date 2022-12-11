import { combineReducers } from "redux";
import { myReducer,inputReducer } from "./reducer";


const  rootReducer = combineReducers({ourStore:myReducer,inputReducer:inputReducer});
export default rootReducer;