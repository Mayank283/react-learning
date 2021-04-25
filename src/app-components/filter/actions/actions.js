import * as ActionTypes from '../../../redux-config/action-types'

const updateFilterState = (dispatch, values, form) => {
    dispatch({ type: ActionTypes.UPDATE_FILTER_STATE, payload: values, form })
}

const filterActions = {
    updateFilterState: updateFilterState
}

export default filterActions;