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
          {/* <button onClick={this.routeToBand}
          className="selector-button">Signup as an artist</button>
          <button onClick={this.routeToFan}>Signup as a fan</button> */}
          <div className="signup-header">
            Sign up for a Bandvamp account</div>
        <div className="height-33-wrapper">
        <Link to="/signup/band" className="button-link a1c6">
          Signup as an artist</Link>
        </div>
        <div className="pad60"></div>
        <div className="height-33-wrapper">
        <Link to="/signup/fan" 
        className="button-link pea-green" >Signup as a fan</Link>
        </div>
      </div>
    )
  }
}

export default selectSignup;