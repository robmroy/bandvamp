import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import SelectSignupContainer from './select_signup_container';
import LoginFormContainer from './login_form_container';
import {openModal, closeModal} from '../../actions/modal_actions';

function toFollow({openModal, push, closeModal}) {
  
  return (
    <div className = 'modal-form to-follow-modal' >
        To follow this artist please 
        <span className = 'link link-color'
        onClick ={() => openModal('signup')}> sign up </span> 
        for a free Bandvamp account or 
        <span className = 'link link-color'
        onClick={() => {push('/login');
                closeModal();}
        }> log in </span>
        if you already have one:

        <div className='sign-log-wrapper'>
            <div className='sign-log-sign'
            onClick ={() => openModal('signup')}>Sign up</div> 
            <div className = 'sign-log-log'
            onClick ={() => {push('/login');
            closeModal();}}
            >Log in</div></div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    push: ownProps.history.push
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(toFollow));
