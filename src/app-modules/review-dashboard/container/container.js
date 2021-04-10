import { connect } from 'react-redux'
import reviewDashboard from '../components/index'
import ReviewActions from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({
    reviewList:state.reviewReducer.reviewList
})

const mapDispatchToProps = dispatch => ({
        getReviews : () => {
            ReviewActions.getReviews(dispatch);
        }
});

export default connect(mapStateToProps, mapDispatchToProps)(reviewDashboard)
