import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import AuthNav from './auth_nav';
const mapStateToProps = state => ({
  user_id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);