//This file will contain the actual function. It's like the service classes in java
import * as actionTypes from '../../../redux-config/action-types'


const getReviews = (dispatch) => {
    const reviewsData = [{ id: 1, comment: 'very good' }, { id: 2, comment: 'very good 2' }]
    dispatch({ type: actionTypes.GET_REVIEWS, payload: reviewsData })
}

export default {
    getReviews
}