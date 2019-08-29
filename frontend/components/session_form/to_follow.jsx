import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {openModal, closeModal} from '../../actions/modal_actions';
import {login} from '../../actions/session_actions';

function toFollow({openModal, push, closeModal, demo}) {
  
  return (
    <div className = 'modal-form to-follow-modal ta-center' >
       <span className='x'
        onClick={closeModal}>{'\u2715'}</span>
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

            <div className = 'or-demo'>Or, log in as a <span 
            className = 'link link-color'
            onClick = {() => {demo(); closeModal();}}
            >demo user</span>.</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    push: ownProps.history.push
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    demo: () => dispatch(login(
        { 
          username: "VocalVamp123", 
          password: "pass123" 
        },  user => {
          ownProps.history.push(`/user/${user.id}`)}
          ),)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(toFollow));
