import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import searchIcon from '../../app/assets/images/search.png';
import SearchContainer from './search/search_container';
class HeaderNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {clickedDemo: false}
  }


  render(){
    let props = this.props;
  
  const logoElement = (
  <Link className="header-logo" to="/">
    <img src={window.parallelogram} 
    className="parallelogram"/>band
    <span className="vamp">vamp</span></Link>)

  const auth =  (<div className="header-links">
  <button className="demo-button" 
    onClick={() => {props.demo();
     this.setState({clickedDemo: true});}}>
       Demo login</button>
  <div className="black-link-container"> <div className="pad15"> </div>   
<span 
className="black-link" onClick = {this.props.openModal}>sign up</span> 
<Link to="/login" className="black-link">log in</Link> 
      </div>
      <div className='hpad-20'> </div>
</div>)

const logout = (
<button className="logout" 
onClick={() => props.logout()}>logout</button>

);

  return (
    <div className={"header-nav"+this.props.suffix}>
      {/* {this.state.clickedDemo && props.userId ? 
  <Redirect to={`/user/${props.userId}/follows`}/>
  :
  ""
  } */}
      {logoElement}
      <div className="header-nav-right">
      <div className = 'search-logout'>
        <SearchContainer />       
        {!props.userId ?  auth : ""}
        </div>
      </div>
      <div className="header-nav-right-padding">
      {props.userId? logout : ""}
      </div>
    </div>
  )
  }
}
export default HeaderNav;