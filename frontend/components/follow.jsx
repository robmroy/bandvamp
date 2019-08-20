import React from 'react';
import { connect } from 'react-redux';
import {createFollow, deleteFollow} from '../actions/follow_actions';

function follow({user, band_id, ver}) {
  const followed_bands = user ? user.followed_bands : [];
  if (followed_bands.map(band => band.id).includes(
      band_id
  ))
  return (
    <div className = {`unfollow-btn-${ver}`} >
      {ver === '1' ? <i className = 'fas fa-check'></i> : null}
      Following
    </div>
  );
  else return <div className = {`follow-btn-${ver}`} >
              Follow
            </div>
}

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFollow: data => dispatch(createFollow(data)),
    deleteFollow: data => dispatch(deleteFollow(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(follow);
