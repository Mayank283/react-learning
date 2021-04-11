import * as types from '../../../redux-config/action-types';

const reviewReducer = (state = {}, action) => {

    switch (action.type) {
        case types.GET_REVIEWS:
            return { ...state, reviewList: action.payload }
        default:
            return {...state}
    }
}

export default reviewReducer;