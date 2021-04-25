import * as ActionTypes from '../../../redux-config/action-types'

const filterReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case ActionTypes.UPDATE_FILTER_STATE:
            return {
                ...state,
                [action.form]: action.payload
            }
        default:
            return { ...state }
    }
}

export default filterReducer;