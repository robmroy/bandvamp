import React from 'react';
import Album from '../albums/album';


class User extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount(){
        const {user, fan, sessionId, fetchUser, wildcard} = this.props;
        if(sessionId && (!user || !user.purchased_albums)) fetchUser(sessionId);
        if (!fan || !fan.purchased_albums){fetchUser(wildcard);}
    }

    render(){
        const {fan, user} = this.props;
        if (!fan) return '';
        if (!fan.purchased_albums) return '';
        return <div> 
            <div className = 'fan-banner'></div>
            <div className = 'fan-bio'>
            <img className = 'fan-bio-photo' src = {fan.photoUrl} />
            </div>
            {fan.purchased_albums.map(
               alb =>  <div>{alb.name}
               <img src={alb.photoUrl}/></div>)}
            {fan.followed_bands.map(band =>{
                const name = band.band_name;
              return (<div> {name}
              <img src={name==="My Bubba & Mi" 
              ? window.bubba : band.photoUrl}/></div>)})}
        </div>
    }
}

export default User;