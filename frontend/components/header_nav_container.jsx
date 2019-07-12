import { connect } from 'react-redux';
import { login, logout } from '../actions/session_actions';
import HeaderNav from './header_nav';
const mapStateToProps = state => ({
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demo: () => dispatch(login(
    { 
      username: "rolling_stones", 
      password: "pass123" 
    }))
  });


export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);