import React from 'react';
import {Link} from 'react-router-dom';
import Follow from '../follow';
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

    renderCollection(){
        const linkToAlbum = (album) => this.props.history.push({pathname: `/band/${album.band_id}`,
        state: {albumId: album.id}});   

        const {fan, user} = this.props;
       return <div className='collection-container'> {fan.purchased_albums.map(
            alb =>  <div key = {alb.id}  className='collection-item-container'>
                <div className = 'collection-item'>
            <img className = 'collection-album link' src={alb.photoUrl}
            onClick={() =>linkToAlbum(alb)}/>
            <div className='link' onClick={() =>linkToAlbum(alb)}>
            <div className='collection-alb-name'>{alb.name}</div>
            <div className = 'collection-band-name'> by {alb.band_name} </div>
            </div>
            </div>
            </div>)}</div>
    }

    renderFollows(){
        const props = this.props;
        const {fan, user} = props;
      return  <div className = 'follows-container'> 
      {fan.followed_bands.map(band =>{
            const name = band.band_name;
          return (<div key ={band.id} className='follow-item'> 
          <div className = 'follow-item-pic-wrapper'> 
          <img className = 'follow-item-pic link' 
          onClick={() => props.history.push(`/band/${band.id}`)}
          src={name==="My Bubba & Mi" 
          ? window.bubba : band.photoUrl}/>
          </div>
          <div className = 'follow-item-right'>
          <div className='fan-follow-name link'
          onClick={() => props.history.push(`/band/${band.id}`)}>{name}</div>
          <Follow ver='1' band_id = {band.id}/>
          </div>
          </div>)})}</div>
    }

    render(){
        const props = this.props;
        const {fan, user} = props;
        if (!fan) return '';
        if (!fan.purchased_albums) return '';
        return <div> 
            <div className = 'fan-banner'></div>
            <div className = 'fan-bio'>
            <img className = 'fan-bio-photo' src = {fan.photoUrl} />
            <div className = 'fan-bio-right'>
                <div className='fanpage-name'>{fan.username}</div>
            <div className ='fanpage-about'>about</div>
            </div>
            </div>
            <div className = 'link-tabs'>
                <Link className={'link-tab'+ (props.tab === 'follows' ? ' selected-tab': '')}
                to={`/user/${fan.id}/follows`}> Follows</Link>
                <Link to={`/user/${fan.id}`} 
                className={'link-tab'+ (props.tab === 'collection' ? ' selected-tab' : '')}>Collection</Link>
            </div>
            {props.tab === 'collection' ? this.renderCollection() :
            this.renderFollows()}
            
           
        </div>
    }
}

export default User;