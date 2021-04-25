import { combineReducers } from "redux";
import filterReducer from "../app-components/filter/reducer/reducer";
import reviewReducer from '../app-modules/review-dashboard/reducer/reducer'


const rootReducer = combineReducers({
    reviewReducer: reviewReducer,
    filterReducer: filterReducer
})

export default rootReducer;