import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectSignup from './select_signup';
import {openModal} from '../../actions/modal_actions';



const mapDispatchToProps = dispatch => {
  return {
    openModal: modalType => () => dispatch(openModal(modalType)),
  };
};

export default connect(null, mapDispatchToProps)(SelectSignup);