const formReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'updateFormState':
            return {
                ...state,
                [action.form]: action.payload
            }
        default:
            return { ...state }
    }
}

export default formReducer;