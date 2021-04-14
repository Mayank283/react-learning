import { combineReducers } from "redux";
import reviewReducer from '../app-modules/review-dashboard/reducer/reducer'

const rootReducer = combineReducers({
    reviewReducer : reviewReducer
})

export default rootReducer;