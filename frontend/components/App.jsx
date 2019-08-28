import React from 'react';
import {connect} from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import FanSignupContainer from './session_form/fan_signup_container';
import BandSignupContainer from './session_form/band_signup_container';
import SelectSignup from './session_form/select_signup';
import HeaderNavContainer from './header/header_nav_container';
import ThinHeaderContainer from './header/thin_header_container';
import ShowcaseContainer from './showcase_container';
import AlbumFormContainer from './albums/album_form_container';
import AlbumContainer from './albums/album_container'
import BandContainer from './band_container';
import Footer from './footer.jsx';
import UserContainer from './user/user_container';
import Modal from './modal';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';

const App = ({session}) => (
  <div id ='App'>
  <div id = 'App-body'>
    <Modal/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <>
        
          {!session.id ? 

            
            <Switch>
          <Route exact path="/" component = {
            () => <>
        <HeaderNavContainer   suffix=''/>
        <HeaderNavContainer   suffix='-dummy'/>
        </>
        } />

        <Route path="/signup" component = {
          () => <>
      <HeaderNavContainer   suffix=''/>
      <HeaderNavContainer   suffix='-dummy'/>
      </>
      } />

          <Route component = { () => <>
            <ThinHeaderContainer  suffix=''/>
            <ThinHeaderContainer   suffix='-dummy'/></>
            }/>
        </Switch> : 
        <Route component = { () => <>
            <ThinHeaderContainer  suffix=''/>
            <ThinHeaderContainer   suffix='-dummy'/></>
            }/>
        
      }
        
       
      <Switch>
        <Route path='/user/:fanId' component = {UserContainer}/>
        <Route path="/band/:bandId" component={BandContainer}/>
        <Route  path="/album/:albumId" component={AlbumContainer} />
        <ProtectedRoute  path="/album" component={AlbumFormContainer} />
        <ShowcaseContainer /> 
      </Switch>
     </>
    </Switch>
    </div>
    <Footer path='/' />
  </div >
)

const mapStateToProps = state => ({session: state.session});

export default connect(mapStateToProps)(App);