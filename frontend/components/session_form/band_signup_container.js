
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import BandSignupForm from './band_signup_form';
import {closeModal} from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
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

export default connect(mapStateToProps, mapDispatchToProps)(BandSignupForm);