
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import FanSignupForm from './fan_signup_form';
import {withRouter} from 'react-router';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    location: ownProps.location,
    formType: 'Sign up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FanSignupForm));