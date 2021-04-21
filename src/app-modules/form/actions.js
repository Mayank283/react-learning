const updateFormState = (dispatch, values, form) => {
    dispatch({ type: 'updateFormState', payload: values, form })
}

const formActions = {
    updateFormState: updateFormState
}

export default formActions;