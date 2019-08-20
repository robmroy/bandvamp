import React from 'react';
import { Link } from 'react-router-dom';

class FanSignupForm extends React.Component {
  constructor(props) {
    super(props);
    console.dir(props);
    const username = props.location.state ? 
    props.location.state.username
    : '';
    const email = props.location.state ? 
    props.location.state.email
    : '';
    this.state = {
      username,
      password: '',
      email
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorArray=this.errorArray.bind(this);
    this.hasErr=this.hasErr.bind(this);
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=>this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul>
        {/* {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))} */}
        {Object.keys(this.props.errors).map(message => 
          <li>{message}</li>)}
      </ul>
    );
  }
  errorArray(message){
    return this.props.errors[message] || [];  
  }

  hasErr(message){
    return (this.errorArray(message).length > 0);
  }
  render() {
    return (
      <div className="modal-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="signup-header">Sign up for a Bandvamp fan account</div>
          <br />
          {/* {this.renderErrors()} */}
          <div className="login-form">
            <br />
            <div className="outer-input-wrapper">
            <label>Username <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                  className={this.hasErr('username') ? "red-border" : ""}
              />
            </label>
              <br />
            {this.errorArray("username").map(ele =>
              <div className="errors">username {ele}</div>)}
            <br />
            </div>

            <div className="outer-input-wrapper">
            <label>Email <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className={this.hasErr('email') ? "red-border" : ""}
              />
            </label>
              <br />
            {this.errorArray("email").map(ele =>
              <div className="errors">email {ele}</div>)}
            <br />
            </div>

            <div className="outer-input-wrapper">
            
            <label>Password <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={this.hasErr('password') ? "red-border" : ""}
              />
            </label>
          
              <br />
            {this.errorArray("password").map(ele =>
              (<div className="errors">password {ele}</div>))}
            <br />
            </div>
           
          <div className="input-wrapper">
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            
          
          </div>

        </form>

        <div className="login-hint"> Already have an account?
            <Link to="/login"> Log in.</Link> </div>
      </div>
    );
  }
}

export default FanSignupForm;