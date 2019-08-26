import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectSignup from './select_signup';
import {openModal, closeModal} from '../../actions/modal_actions';



const mapDispatchToProps = dispatch => {
  return {
    openModal: modalType => () => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(SelectSignup);