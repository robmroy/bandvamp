
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import FanSignupForm from './fan_signup_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    location: ownProps.location,
    formType: 'Sign up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FanSignupForm);