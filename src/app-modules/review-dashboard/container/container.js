import { connect } from 'react-redux'
import reviewDashboard from '../components/index'
import ReviewActions from '../actions/actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    reviewList:state.reviewReducer.reviewList
})

const mapDispatchToProps = dispatch => ({
        getReviews : () => {
            ReviewActions.getReviews(dispatch);
        }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reviewDashboard));
