import AlbumForm from './album_form';
import { connect } from 'react-redux';
import { createAlbum } from '../../actions/entities_actions';

const mapStateToProps = ({session, errors}) => ({
    session,
    errors
})

const mapDispatchToProps = dispatch => ({
    createAlbum: formData => dispatch(createAlbum(formData))
});
export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);