import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../app/assets/images/search.png';
const HeaderNav = props => {
  const logoElement = (<div className="header-logo">
    <img src={window.parallelogram} 
    className="parallelogram"/>band
    <span className="vamp">vamp</span></div>)

  const auth =  (<div className="header-links">
  <div className="black-link-container"> <div className="pad15"> </div>   
<Link to="/signup" 
className="black-link">sign up</Link> &nbsp; &nbsp;
<Link to="/login" className="black-link">log in</Link> &nbsp; &nbsp;
      </div>
  <button className="demo-button" 
    onClick={() => props.demo()}>Demo login</button>
</div>)

const logout = (
<button className="logout" 
onClick={() => props.logout()}>logout</button>

);

  return (
    <div className="header-nav">
      {logoElement}
      <div className="header-nav-right">
      <div className = 'search-logout'>
        <div className="search-bar-wrapper">
        
       <img src={searchIcon} className="search-icon"/>
        <input className="search-bar" placeholder="Search music"/>
   
        </div>
        {!props.user_id ?  auth : ""}
        </div>
      </div>
      <div className="header-nav-right-padding">
      {props.user_id? logout : ""}
      </div>
    </div>
  )
};
export default HeaderNav;