import { connect } from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => {
      dispatch(login(user, (user) => ownProps.history.push(user.band_name ? 
        `band/${user.id}` : `user/${user.id}`) ));
      
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));