import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = props => {
  const logoElement = (<div className="header-logo">
    <img src={window.parallelogram} 
    className="parallelogram"/>band
    <span className="vamp">vamp</span></div>)
if (props.user_id === null){
  return (
    <div className="header-nav">
      {logoElement}
      <div className="header-links">
    <Link to="/login">Login</Link> &nbsp; &nbsp;
    <Link to="/signup">Signup</Link> &nbsp; &nbsp;
    <button className="demo-button" onClick={() => props.demo()}>Demo login</button>
      </div>
     
    </div>
  )
}
else {
  return (
    <div className="header-nav">{logoElement}
  <button onClick={() => props.logout()}>logout</button>
    </div>
    
  )
}
};
export default HeaderNav;