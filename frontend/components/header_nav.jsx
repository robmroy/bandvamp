import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../app/assets/images/search.png';
const HeaderNav = props => {
  const logoElement = (<div className="header-logo">
    <img src={window.parallelogram} 
    className="parallelogram"/>band
    <span className="vamp">vamp</span></div>)
if (props.user_id === null){
  return (
    <div className="header-nav">
      {logoElement}
      <div className="header-nav-right">
        <div className="search-bar-wrapper">
        
        <div className="search-bar-container"> 
        <input className="search-bar" placeholder="Search music"/>
        </div>
        </div>
      <div className="header-links">
          <div className="black-link-container"> <div className="pad15"> </div>   
      <Link to="/signup" 
      className="black-link">sign up</Link> &nbsp; &nbsp;
    <Link to="/login" className="black-link">log in</Link> &nbsp; &nbsp;
              </div>
          <button className="demo-button" 
            onClick={() => props.demo()}>Demo login</button>
      </div>
      </div>
      <div className="header-nav-right-padding">
        <img src={searchIcon} className="search-icon"/>
      </div>
    </div>
  )
}
else {
  return (
    <div className="header-nav">{logoElement}
          <div className="header-nav-right">
          <div className="black-link-container">
            <div className="pad42"/>
  <button className="float-right" 
  onClick={() => props.logout()}>logout</button>
          </div>
    </div>
      </div>
    
  )
}
};
export default HeaderNav;