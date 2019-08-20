import { connect } from 'react-redux';
import {fetchUser, editUser} from '../../actions/entities_actions';
import User from './user';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let wildcard = ownProps.match.params.fanId;
    return {wildcard,
        fan: state.entities.users[wildcard],
    sessionId: state.session.id,
    user: state.session.id ? 
    state.entities.users[state.session.id] : undefined,
    tab: 
    ownProps.location.pathname.endsWith('follows') ?
    'follows' : 'collection'
    }}

const mapDispatchToProps = dispatch => ({    
     fetchUser: (id, callback) => dispatch(fetchUser(id, callback)),
     editUser: user => dispatch(editUser(user))
});

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(User));