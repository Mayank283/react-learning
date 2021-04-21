import { connect } from 'react-redux'
import formComponent from './form'
import formActions from './actions'

const mapStateToProps = (state, ownProps) => ({
    formValues: (state && state.formReducer && state.formReducer['example']) || {}
})

const mapDispatchToProps = dispatch => ({
    updateFormState: (values, form) => {
        formActions.updateFormState(dispatch, values, form);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(formComponent)
