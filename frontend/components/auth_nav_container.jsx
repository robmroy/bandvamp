import { connect } from 'react-redux';
import { login, logout } from '../actions/session_actions';
import AuthNav from './auth_nav';
const mapStateToProps = state => ({
  user_id: state.session.id
});

const demoUser = {username: "rolling_stones", password: "pass123"};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demo: () => dispatch(login({ username: "rolling_stones", password: "pass123" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);