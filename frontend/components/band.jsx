import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import AlbumPlayer from './albums/album_player';
class Band extends React.Component {
  constructor(props) {
    super(props);
    const lstate = props.location.state || {};
    const {albumId, songId, faveTrackNum} = lstate;
    this.state = { albumId, songId, faveTrackNum}
  }

  componentDidMount(){
      this.props.fetchBand();
  }

  componentDidUpdate(prevProps){
    const lstate = this.props.location.state || {};
    const {albumId, songId} = lstate;

    const plstate = prevProps.location.state ||{};

    if (this.props.wildcard !== prevProps.wildcard
      ){
        return this.props.fetchBand();
    }

    if (albumId !== plstate.albumId || 
      songId !== plstate.songId){
        this.setState({songId, albumId});
    }
  
  }
  clickAlbum(album){
    this.setState({albumClicked: true, albumId: album.id})
  }

  render(){
    if (!this.props.band) return '';
    const {albumId, songId, faveTrackNum} = this.state;
    const band = this.props.band;
    const albums = Object.values(band.albums);
    const album = albums.length ? albums.find(a=>(a.id === albumId)) || albums[0] : '';
    const bannerUrl = band.bannerUrl;
    const photoUrl = band.photoUrl;
    const banner = !bannerUrl || bannerUrl.endsWith("345892746528734589234728") ?
    "" : <img src={bannerUrl} className="banner"/>;
    const photo = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
    "" : <img src={photoUrl} className="band-photo"/>;
    return (
        <div className='band-page' style={{backgroundColor: band.background_color || "white"}}> 
        <div className = 'band-page-content'>
        
        <div className="banner-wrapper">
            {banner}
       </div> 
      
           <div className="band-page-body"> 
           <div className = 'band-page-columns-container'>
              {this.props.wildcard === this.props.sessionId + '' ? (<Link to='/album' className ='link-to-create-album-page'> Create album</Link>)
             : ''}

                <AlbumPlayer album={album} band={band} songId = {songId}
                faveTrackNum={faveTrackNum}/>

                <div className = 'band-column-3'>
                  <div className='band-name-col-3'> {band.band_name}</div>
                {band.band_description} 
                {photo}

                {albums.length ? (<><div> discography</div>

                <div className = "band-albums"> {albums.map(alb => (
                  <div onClick={()=>{this.setState({albumId: alb.id})}}>
                  <img className = {'album-120'} src = {alb.photoUrl}/>
                  <div style={{fontSize: '12px'}}>{alb.name}</div>
                  </div>
                ))}</div></>) : ''}

                </div>
               
                </div>
            </div>
            </div> 
        </div>)
}
}

export default Band;