import { Link } from 'react-router-dom';
import React from 'react';

class selectSignup extends React.Component {
  constructor(props){
    super(props);
    this.state={}
    this.routeToBand=this.routeToBand.bind(this);
    this.routeToFan=this.routeToFan.bind(this);
  }

  routeToBand(){
    this.props.history.push("/signup/band");
  }

  routeToFan(){
    this.props.history.push("/signup/fan");
  }

  render(){
    return (
      <div className="modal-form selector-modal">
        <span className='x'
        onClick={this.props.closeModal}>{'\u2715'}</span>
          <div className="signup-header">
            Sign up for a Bandvamp account</div>
        <div className="height-33-wrapper">
        <div onClick = {() => this.props.openModal('signup/band')} className="button-link a1c6">
          Signup as an artist</div>
        </div>
        <div className="pad60"></div>
        <div className="height-33-wrapper">
        <div onClick = {() => this.props.openModal('signup/fan')} 
        className="button-link pea-green" >Signup as a fan</div>
        </div>
      </div>
    )
  }
}

export default selectSignup;