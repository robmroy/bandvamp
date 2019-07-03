import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = props => {
if (props.user_id === null){
  return (
    <div>
    <Link to="/login">Login</Link> &nbsp; &nbsp;
    <Link to="/signup">Signup</Link> &nbsp; &nbsp;
    <button onClick={() => props.demo()}>Demo Login</button>
    </div>
  )
}
else {
  return (
  <button onClick={() => props.logout()}>logout</button>
  )
}
};
export default AuthNav;