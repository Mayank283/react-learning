import { combineReducers } from "redux";
import reviewReducer from '../app-modules/review-dashboard/reducer/reducer'
import formReducer from '../app-modules/form/reducer'

const rootReducer = combineReducers({
    reviewReducer: reviewReducer,
    formReducer: formReducer
})

export default rootReducer;