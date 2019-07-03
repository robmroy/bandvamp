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
    this.error_array = this.error_array.bind(this);
    this.emptyBandName = this.emptyBandName.bind(this);
    this.emptyBandNameMessage = this.emptyBandNameMessage.bind(this);
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

  
  error_array(message) {
    return this.props.errors[message] || [];
  }
  emptyBandName(){
    return (this.state.band_name.length === 0);
  }
  emptyBandNameMessage (){
  
    if (!this.emptyBandName() || !this.state.toggled){
      return (<div></div>)
    }
    else {
      return (<div>Please enter the name of your band/artist</div>)
    }
  }
  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Bandvamp!
          <br />
          Please {this.props.formType} or <Link to="/login">log in instead</Link>
          
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            {this.error_array("username").map(ele =>
              <div>username {ele}</div>)}
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            {this.error_array("email").map(ele =>
              <div>email {ele}</div>)}
            <br />
            <label>Band Name:
              <input type="text"
                value={this.state.band_name}
                onChange={this.update('band_name')}
                className="login-input"
              />
            </label>
            {this.emptyBandNameMessage()}
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {this.error_array("password").map(ele =>
              <div>password {ele}</div>)}
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default BandSignupForm;