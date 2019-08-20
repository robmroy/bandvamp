import React from 'react';
import {Link} from 'react-router-dom';
import Follow from '../follow';


class User extends React.Component {
    constructor(props) {
      super(props);
        const fan = props.fan;
      this.state = {editing: false,
        desc: fan && fan.purchased_albums ? fan.user_description : undefined
    }
    
      this.renderDesc = this.renderDesc.bind(this);
    }
    componentDidMount(){
        window.scrollTo(0,0);
        const {user, fan, sessionId, fetchUser, wildcard} = this.props;
        if(sessionId && (!user || !user.purchased_albums)) fetchUser(sessionId);
        if (!fan || !fan.purchased_albums){fetchUser(wildcard, 
            (fan) => this.setState({desc: fan.user_description}));}
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
        if (!fan.followed_bands.length && user && fan.id ===user.id){
            return <div> <div className = 'center-500'> You're not following any bands yet!</div>
            <div className = 'center-500 bottom-50'>Try the homepage or search bar to find some.</div>
            </div>
        }
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
    editFan(){
        this.props.editUser({id: this.props.wildcard,
        user_description: this.state.desc})
    }
    renderDesc(){
        const {user, fan} = this.props;
        if (!user || user.id !== fan.id){
            return   <div className ='fanpage-about'>{fan.user_description} </div>
        }
        if(!this.state.editing){
            return   <div className ='fanpage-about'>{fan.user_description}
            <span className = 'link link-color' onClick={() => this.setState({editing: true})}> Edit </span></div>
        }
        return <div className ='fanpage-about'>
        <textarea className = 'desc-text' onChange = {e=> {this.setState({desc: e.target.value})}} value={this.state.desc || ''}
        placeholder='description here'/>
        <div className = 'pointer' onClick={() => {this.editFan();
        this.setState({editing: false});}}>Submit change</div>
        <div className = 'pointer'
        onClick ={ () => this.setState({editing: false})} >Cancel</div>
        </div>
    }

    render(){
        const props = this.props;
        const {fan, user} = props;
        if (!fan) return '';
        // if (!fan.purchased_albums) return '';
        if (this.state.desc === undefined) return '';
        return <div> 
            <div className = 'fan-banner'></div>
            <div className = 'fan-bio'>
            <img className = 'fan-bio-photo' src = {fan.photoUrl} />
            <div className = 'fan-bio-right'>
                <div className='fanpage-name'>{fan.username}</div>
            {this.renderDesc()}
            </div>
            </div>
            <div className = 'link-tabs'>
                <Link to={`/user/${fan.id}`} 
                className={'link-tab'+ (props.tab === 'collection' ? ' selected-tab' : '')}>Collection</Link>
                <Link className={'link-tab'+ (props.tab === 'follows' ? ' selected-tab': '')}
                to={`/user/${fan.id}/follows`}> Follows</Link>
            </div>
            {props.tab === 'collection' ? this.renderCollection() :
            this.renderFollows()}           
        </div>
    }
}

export default User;