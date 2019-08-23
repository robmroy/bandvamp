import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SelectSignupContainer from './session_form/select_signup_container';
import FanSignupContainer from './session_form/fan_signup_container';
import BandSignupContainer from './session_form/band_signup_container';
import LoginFormContainer from './session_form/login_form_container';
import ToFollow from './session_form/to_follow';
import ToPurchase from './session_form/to_purchase';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SelectSignupContainer />;
      break;
    case 'signup/fan':
      component = <FanSignupContainer/>;
      break;
    case 'signup/band':
      component = <BandSignupContainer />;
      break;
    case 'to-follow':
        component = <ToFollow />;
        break;
    case 'to-purchase':
      component = <ToPurchase />;
      break;
    default:
      return null;
  }
  return (
    <div className = 'overlay' onClick={closeModal}>
      <div onClick={e=>e.stopPropagation()}>{component}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
