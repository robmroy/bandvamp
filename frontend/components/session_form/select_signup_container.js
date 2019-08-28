import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectSignup from './select_signup';
import {openModal, closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router';



const mapDispatchToProps = dispatch => {
  return {
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SelectSignup));