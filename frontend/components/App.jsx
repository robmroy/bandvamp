import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import FanSignupContainer from './session_form/fan_signup_container';
import BandSignupContainer from './session_form/band_signup_container';
import SelectSignup from './session_form/select_signup';
import AuthNavContainer from './auth_nav_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <AuthNavContainer path="/" />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SelectSignup} />
    <AuthRoute exact path="/signup/band" component={BandSignupContainer} />
    <AuthRoute exact path="/signup/fan" component={FanSignupContainer} />
  </div >
)

export default App;