import { connect } from 'react-redux';
import { fetchAllAlbums } from '../actions/entities_actions';
import Notables from './notables';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return { albums: state.entities.albums }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { fetchAllAlbums: () => dispatch(fetchAllAlbums()) }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Notables));