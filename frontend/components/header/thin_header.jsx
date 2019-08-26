import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import Dropdown from './dropdown.jsx';
class ThinHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {clickedDemo: false}
  }


  render(){
    let props = this.props;
    const {user, logout} = props;
  const logoElement = (
  <Link className="header-logo" to="/">
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

const dropdown = 
  <Dropdown push={this.props.history.push}
        user = {user}
        logout = {logout}/> ;



  return (
    <div className={"thin-header-nav"+this.props.suffix}>
      {logoElement}
      <div className="header-nav-right">
        {/* {props.user ? <span className = 'collection-topper black-link'
        onClick = {() => this.props.history.push(`/user/${props.user.id}`)}>
        Collection</span> : ''} */}
      <div className = 'search-logout'>
        <SearchContainer />       
        {!props.user ?  auth : ""}
        </div>
      {props.user ? dropdown : ""}
      </div>
      <div className="header-nav-right-padding">
      </div>
    </div>
  )
  }
}
export default ThinHeader;