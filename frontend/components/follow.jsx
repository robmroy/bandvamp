import React from 'react';
import { connect } from 'react-redux';
import {createFollow, deleteFollow} from '../actions/follow_actions';
import {openModal} from '../actions/modal_actions';

class Follow extends React.Component {
  constructor(props){
    super(props);
    this.state = {hover: false}
  }


  render(){
    const {user, band_id, ver, deleteFollow, createFollow, openModal} = this.props;
    if (user && !user.followed_bands) return '';
  const followed_bands = user ? user.followed_bands : [];
  const {hover} = this.state;
  if (followed_bands.map(band => band.id).includes(
      band_id
  ))
  return (
    <div className = {`follow-${ver}`} 
    onMouseEnter={()=>this.setState({hover: true})}
    onMouseLeave={()=>this.setState({hover: false})}
    onClick = {() => deleteFollow({band_id, fan_id: user.id})}>
      {ver === '1' && !hover ? <i className = 'fas fa-check'></i> : null}
      {hover ? <span className = {`unfollow-${ver}`}>Unfollow </span> :  <span className = {`following-${ver}`}>Following</span>}
    </div>
  );
  else return <div className = {`follow-${ver}`} 
  onClick = {()=> {
    if (user) {createFollow({band_id, fan_id: user.id})}
    else {openModal('tofollow')}}}>
              Follow
            </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFollow: data => dispatch(createFollow(data)),
    deleteFollow: data => dispatch(deleteFollow(data)),
    openModal: modalType => dispatch(openModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
