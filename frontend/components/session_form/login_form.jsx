import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.error_array = this.error_array.bind(this);
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
    return (
      <div className="login-content">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-header">Log in</div>
          
          <div className="login-form">
            <br />

            <label className="input-wrapper">
              <span className="login-label">Username</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label className="input-wrapper">
              <span className="login-label">Password</span>
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <span className="input-wrapper">
            {this.props.errors.login}
            </span>
            <br />
            <div className="input-wrapper">
              <input className="login-submit" type="submit" value={this.props.formType} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;