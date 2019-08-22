import { connect } from 'react-redux';
import {createPurchase} from '../../actions/purchase_actions';
import AlbumPlayer from './album_player';



const mapDispatchToProps = (dispatch, ownProps) => {
    return {createPurchase: () => dispatch(createPurchase(
        {album_id: ownProps.album.id, user_id: ownProps.user.id}
    ))}
};

export default connect(
    null,
    mapDispatchToProps
    )(AlbumPlayer);