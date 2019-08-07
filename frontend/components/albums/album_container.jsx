import { connect } from 'react-redux';
import {fetchAlbum} from '../../actions/entities_actions';
import Album from './album';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const payload = state.entities.albums[ownProps.match.params.albumId] || {};
    const {album, band, songs} = payload;
    return  {album: album || {}, band: band || {}, songs: songs || [],
    errors: state.errors, wildcard: ownProps.match.params.albumId}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.albumId;
    return {fetchAlbum: () => dispatch(fetchAlbum(id))}
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Album));