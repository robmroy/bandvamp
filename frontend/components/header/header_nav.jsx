import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import ThinHeaderContainer from './thin_header_container';
class HeaderNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {clickedDemo: false}
  }


  render(){
    let props = this.props;
  const logoElement = (
  <Link className="header-logo-big" to="/">
    <img src={window.parallelogram} 
    className="parallelogram"/>band
    <span className="vamp">vamp</span></Link>)

  const auth =  (<div className="header-links">
  <div><span className="demo" 
    onClick={() => {props.demo();
     this.setState({clickedDemo: true});}}>
       demo user</span></div>
  <div className="black-link-container">   
<span 
className="black-link" onClick = {this.props.openModal}>sign up</span> 
<span onClick={()=>this.props.history.push('/login')} className="black-link">log in</span> 
      </div>
</div>)

const logout = (
<button className="logout" 
onClick={() => props.logout()}>logout</button>

);

  return (
    <div className={"header-nav"+this.props.suffix}>
      {logoElement}
      <div className='directly-support'> Discover amazing new music and <a className='blue-highlight'>directly support</a> the artists who make it.
    </div>
      <div className="header-nav-right">
        {props.userId ? <span className = 'collection-topper black-link'
        onClick = {() => this.props.history.push(`/user/${props.userId}`)}>
        Collection</span> : ''}
      <div className = 'search-logout'>
        <SearchContainer />       
        {!props.userId ?  auth : ""}
        </div>
        {props.userId? logout : ""}
      </div>
      <div className="header-nav-right-padding">
      
      </div>
    </div>
  )
  }
}
export default HeaderNav;