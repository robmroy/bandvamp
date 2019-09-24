import { connect } from 'react-redux';
import { fetchBand, fetchUser } from '../actions/entities_actions';
import Band from './band';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let wildcard = ownProps.match.params.bandId;
    return {
        wildcard,
        band: state.entities.bands[wildcard],
        sessionId: state.session.id,
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.bandId;
    return {
        fetchBand: () => dispatch(fetchBand(id)),
        fetchUser: (id, callback) => dispatch(fetchUser(id, callback)),
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Band));