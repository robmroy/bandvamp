import AlbumForm from './album_form';
import { connect } from 'react-redux';
import { createAlbum, createSong } from '../../actions/entities_actions';

const mapStateToProps = ({session, errors}) => ({
    session,
    errors
})

const mapDispatchToProps = dispatch => ({
    createAlbum: album => dispatch(createAlbum(album)),
    createSong: song => dispatch(createSong(song))
});
export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);