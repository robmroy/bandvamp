import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import FanSignupContainer from './session_form/fan_signup_container';
import BandSignupContainer from './session_form/band_signup_container';
import SelectSignup from './session_form/select_signup';
import HeaderNavContainer from './header_nav_container';
import Showcase from './showcase.jsx';
import AlbumFormContainer from './albums/album_form_container';
import AlbumContainer from './albums/album_container'
import BandContainer from './band_container';
import Footer from './footer.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';
import MusicPlayer from './media_player/music_player';

const App = () => (
  <div className ='App'>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <>
        <HeaderNavContainer suffix=''/>
        <HeaderNavContainer suffix='-dummy'/>

        <AuthRoute exact path="/signup" component={SelectSignup} />
        <AuthRoute  path="/signup/band" component={BandSignupContainer} />
        <AuthRoute  path="/signup/fan" component={FanSignupContainer} />
      <Switch>
        <Route path="/band/:bandId" component={BandContainer}/>
        <Route  path="/album/:albumId" component={AlbumContainer} />
        <ProtectedRoute  path="/album" component={AlbumFormContainer} />
        <Showcase /> 
      </Switch>
     </>
    </Switch>
    <Footer path='/' />
  </div >
)

export default App;