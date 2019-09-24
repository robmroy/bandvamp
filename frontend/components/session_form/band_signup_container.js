import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import BandSignupForm from './band_signup_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';

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
    clearErrors: () => dispatch(clearErrors()),
    openModal: () => dispatch(openModal('signup/fan'))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BandSignupForm));