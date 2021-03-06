import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import ThinHeader from './thin_header';
import { withRouter } from 'react-router';
const mapStateToProps = state => ({
  user: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: () => dispatch(openModal('signup')),
  logout: () => dispatch(logout()),
  demo: () => dispatch(login(
    {
      username: "VocalVamp123",
      password: "pass123"
    }, user => {
      ownProps.history.push(`/user/${user.id}`)
    }
  ))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThinHeader));