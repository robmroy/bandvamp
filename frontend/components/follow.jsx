import React from 'react';
import { connect } from 'react-redux';

function follow({modal, closeModal}) {
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
    default:
      return null;
  }
  return (
    <div className = 'session-screen' onClick={closeModal}>
      <div onClick={e=>e.stopPropagation()}>{component}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sessionId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
