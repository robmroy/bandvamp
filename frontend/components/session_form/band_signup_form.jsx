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
      return;
    }
    else {
      return (<> <br/> Please enter the name of your band/artist </>);
    }
  }
  render() {
    return (
      <div className="modal-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Sign up for a Bandvamp artist account
          <br />
          
          
          <div className="login-form">
            <br />


            <div className="input">
              <label>Band Name
              <br />
                <input type="text"
                  value={this.state.band_name}
                  onChange={this.update('band_name')}
                  className="login-input"
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
                className="login-input"
              />
            </label>
            {this.state.username ? "" : this.error_array("username").map(ele =>
              <div>username {ele}</div>)}
            <br />
          </div>

          <div className="input">
            <label>Email
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            {this.state.email? "" : this.error_array("email").map(ele =>
              <div>email {ele}</div>)}
            <br />
            </div>

          
          <div className="input">
            <label>Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {this.state.password.length > 5 ? "" : this.error_array("password").map(ele =>
              <div>password {ele}</div>)}
            <br />
          </div>

            <input className="session-submit" type="submit" value={this.props.formType} />
            <br /> 
            Already have an account? <Link to="/login">Log in.</Link>
          </div>
        </form>

      </div>
    );
  }
}

export default BandSignupForm;