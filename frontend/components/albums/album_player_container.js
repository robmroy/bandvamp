import { connect } from 'react-redux';
import { createPurchase } from '../../actions/purchase_actions';
import { openModal } from '../../actions/modal_actions';
import AlbumPlayer from './album_player';
import { withRouter } from 'react-router';



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createPurchase: () => dispatch(createPurchase(
            { album_id: ownProps.album.id, user_id: ownProps.user.id }
        )),
        openModal: () => dispatch(openModal('to-purchase'))
    }
};

export default withRouter(connect(
    null,
    mapDispatchToProps
)(AlbumPlayer));