import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">sign up instead</Link>,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => {
      dispatch(login(user, user => ownProps.history.push(
        `user/${user.id}`)))
    },
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));