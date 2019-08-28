import { connect } from 'react-redux';
import {fetchAllAlbums} from '../actions/entities_actions';
import Showcase from './showcase'
import {withRouter} from 'react-router-dom';
import {openModal} from '../actions/modal_actions';

const mapStateToProps = (state) => {
    return {albums: state.entities.albums,
    modal: state.ui.modal}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    openModal: modalType => dispatch(openModal(modalType))}
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Showcase));