import { connect } from 'react-redux'
import Filter from '../components/index';
import filterActions from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    updateFilterState: (values, form) => {
        filterActions.updateFilterState(dispatch, values, form);
    }
})

export default connect(null, mapDispatchToProps)(Filter)
