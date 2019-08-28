import React from 'react';
import { Link } from 'react-router-dom';

class BandSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username || '',
      password: props.password || '',
      email: props.email || '',
      band_name: props.band_name || '',
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
    this.props.processForm(user).then(() => this.props.closeModal());}
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
      return (<><span className="errors"> 
      
      Please enter your band name,  
      
        or <span 
        className = 'link link-color'
        onClick={()=>{this.props.openModal();
        this.props.history.replace({ state: {email: this.state.email,
        username: this.state.username}})}}>sign up as a fan</span>. </span>
       </>);
    }
  }
  render() {
    return (
      <div className="modal-form">
        <span className='x'
        onClick={this.props.closeModal}>{'\u2715'}</span>
        <div className="signup-header">Sign up for a Bandvamp artist account</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
   
          
          <div className="login-form">

            <div className="outer-input-wrapper">
              <label>Band Name
              
                <input type="text"
                  value={this.state.band_name}
                  onChange={this.update('band_name')}
                  className={this.emptyBandNameMessage() ? "red-border" : ""}
                />
              </label>

              {this.emptyBandNameMessage()}
            </div>
          <div className="outer-input-wrapper">
            <label >Username
             
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                  className={this.hasErr('username') ? "red-border" : ""}
              />
            </label>
              {this.errorArray("username").map(ele =>
                <span className="errors">username {ele}</span>)}
          </div>

          <div className="outer-input-wrapper">
            <label>Email
              
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                  className={this.hasErr('email') ? "red-border" : ""}
              />
            </label>
            {
              // !this.errorArray("email") ? " " : 
              this.errorArray("email").map(ele =>
              <span className="errors">email {ele}</span>)}
            
            </div>

          
          <div className="outer-input-wrapper">
            <label>Password
             
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                  className={this.hasErr('password')  ? "red-border" : ""}
              />
            </label>
            { this.errorArray("password").map(ele =>
              <span className="errors">password {ele}</span>)}
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