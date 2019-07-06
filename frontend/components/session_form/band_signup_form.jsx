import React from 'react';
import { Link } from 'react-router-dom';

class BandSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      band_name: '',
      toggled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorArray = this.errorArray.bind(this);
    this.emptyBandName = this.emptyBandName.bind(this);
    this.emptyBandNameMessage = this.emptyBandNameMessage.bind(this);
    this.hasErr = this.hasErr.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({toggled: true});
    const user = Object.assign({}, this.state);
    if (!this.emptyBandName()){
    this.props.processForm(user);}
  }

  
  errorArray(message) {
    return this.props.errors[message] || [];
  }
  hasErr(message){
    return (this.errorArray(message).length > 0);
  }
  emptyBandName(){
    return (this.state.band_name.length === 0);
  }
  emptyBandNameMessage (){
  
    if (!this.emptyBandName() || !this.state.toggled){
      return;
    }
    else {
      return (<><span className="errors"> <br/> 
      Please enter your band name.</span> <br/> (
        Or, 
       <Link to="/signup/fan"> sign up as a fan</Link>.)
        <div className="pad12"></div>
       </>);
    }
  }
  render() {
    return (
      <div className="modal-form">
        <div className="signup-header">Sign up for a Bandvamp artist account</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          
          <div className="login-form">
            <br />

            <div className="input">
              <label>Band Name
              <br />
                <input type="text"
                  value={this.state.band_name}
                  onChange={this.update('band_name')}
                  className={this.emptyBandNameMessage() ? "red-border" : ""}
                />
              </label>

              {this.emptyBandNameMessage()}
              <br />
            </div>
          <div className="input">
            <label >Username
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                  className={this.hasErr('username') ? "red-border" : ""}
              />
            </label>
              {this.errorArray("username").map(ele =>
                <span className="errors"><br />username {ele}</span>)}
            <br />
          </div>

          <div className="input">
            <label>Email
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                  className={this.hasErr('email') ? "red-border" : ""}
              />
            </label>
            {
              // !this.errorArray("email") ? " " : 
              this.errorArray("email").map(ele =>
              <span className="errors"><br />email {ele}</span>)}
            
            </div>

          
          <div className="input">
            <label>Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                  className={this.hasErr('password')  ? "red-border" : ""}
              />
            </label>
            { this.errorArray("password").map(ele =>
              <span className="errors"><br />password {ele}</span>)}
            <br />
          </div>

            <div className="input">
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            
           <div className="login-hint"> Already have an account?
            <Link to="/login"> Log in.</Link> </div>
          </div>
            
        </form>

      </div>
    );
  }
}

export default BandSignupForm;