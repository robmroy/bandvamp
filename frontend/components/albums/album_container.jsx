import { connect } from 'react-redux';
import {fetchAlbum} from '../../actions/entities_actions';
import Album from './album';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({entities}) => (
    {entities});

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.albumId;
    return {fetchAlbum: () => dispatch(fetchAlbum(id))};
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Album));