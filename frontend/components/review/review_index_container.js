import { connect } from "react-redux";
import { fetchReviews, deleteReview } from "../../actions/review_actions";
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.session.id,
        ownProps
    });
};

const mDTP = dispatch => {
    return ({
        fetchReviews: () => dispatch(fetchReviews()),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    });
};

export default connect(mSTP, mDTP)(ReviewIndex);