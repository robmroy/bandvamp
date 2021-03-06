import AlbumForm from './album_form';
import { connect } from 'react-redux';
import { createAlbum, createSong, clearReceivedAlbumId } from '../../actions/entities_actions';

const mapStateToProps = ({ session, errors, entities }) => ({
    session,
    errors,
    albumId: entities.albums.receivedId
})

const mapDispatchToProps = dispatch => {
    return {
        createAlbum: (album, cb) => dispatch(createAlbum(album, cb)),
        createSong: song => dispatch(createSong(song)),
        clearReceivedAlbumId: () => dispatch(clearReceivedAlbumId())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);