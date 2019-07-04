
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import BandSignupForm from './band_signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandSignupForm);