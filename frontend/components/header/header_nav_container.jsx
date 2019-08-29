import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'
import HeaderNav from './header_nav';
import {withRouter} from 'react-router';
const mapStateToProps = state => ({
  userId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: ()=> dispatch(openModal('signup')),
  logout: () => dispatch(logout()),
  demo: () => dispatch(login(
    { 
      username: "VocalVamp123", 
      password: "pass123" 
    },  user => {
      ownProps.history.push(`/user/${user.id}`)}
      ),)});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderNav));