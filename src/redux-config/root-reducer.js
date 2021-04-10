import { combineReducers } from "redux";
import reviewReducer from '../app-modules/review-dashboard/reducers/reducer'

const rootReducer = combineReducers({
    reviewReducer : reviewReducer
})

export default rootReducer;