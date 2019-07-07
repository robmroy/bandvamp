import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import FanSignupContainer from './session_form/fan_signup_container';
import BandSignupContainer from './session_form/band_signup_container';
import SelectSignup from './session_form/select_signup';
import HeaderNavContainer from './header_nav_container';
import Showcase from './showcase.jsx';
import AlbumCover from './albums/album_cover';
import Footer from './footer.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <><HeaderNavContainer path="/" />
    <AuthRoute exact path="/signup" component={SelectSignup} />
    <AuthRoute exact path="/signup/band" component={BandSignupContainer} />
    <AuthRoute exact path="/signup/fan" component={FanSignupContainer} />
    <Showcase path='/' /> </>
    </Switch>
    <AlbumCover/>
    <Footer path='/' />
  </div >
)

export default App;