import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.error_array = this.error_array.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    if (this.props.modal){
      this.props.closeModal();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  error_array(message) {
    return this.props.errors[message] || [];
  }

  
  render() {
    const logoElement = (
      <Link className="header-logo" to="/">
        <img src={window.parallelogram} 
        className="parallelogram"/>band
        <span className="vamp">vamp</span></Link>)
    return (
      <div className="login-page">
        <div className = "login-page-top">
        {logoElement}
        </div>
      
      <div className="login-content">

        <div className="login-form-box">
          <div className="login-header">Log in</div>
          <div className="login-divider"></div>
         
          <form onSubmit={this.handleSubmit} className="login-form">

            <div className="input-wrapper">
              <span className="login-label">Username</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
             <span className="login-label"></span>

            </div>
            
            <div className="input-wrapper">
              <span className="login-label">Password</span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
             <span className="login-label"></span>
            </div>

          {this.props.errors.login ? 
            <span className="input-wrapper errors">
            {this.props.errors.login}
            </span> : null}

            <div className="input-wrapper">
              <input className="login-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        <div>
        
        <div className="login-hint"> Don't have an account? Sign up 
        as an <Link to="/signup/band">artist </Link>
        or a  <Link to="/signup/fan">fan</Link>.</div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default LoginForm;