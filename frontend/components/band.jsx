import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import AlbumPlayer from './albums/album_player';
class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albumClicked: false, albumId: null,
    wildcard: this.props.wildcard}
  }

  componentDidMount(){
      this.props.fetchBand();
  }

  componentDidUpdate(){
    if (this.props.wildcard != this.state.wildcard){
        this.setState({wildcard: this.props.wildcard});
        this.props.fetchBand();
    }
}
  clickAlbum(album){
    this.setState({albumClicked: true, albumId: album.id})
  }

  render(){
    if (!this.props.band) return '';
    const band = this.props.band;
    console.log(band)
    const albums = Object.values(band.albums);
    console.log(`albums: ${albums}`)
    const album = albums.length ? albums[0] : '';
    const bannerUrl = band.bannerUrl;
    const photoUrl = band.photoUrl;
    const banner = !bannerUrl || bannerUrl.endsWith("345892746528734589234728") ?
    "" : <img src={bannerUrl} className="banner"/>;
    const photo = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
    "" : <img src={photoUrl} className="band-photo"/>;
    return (
        <div className='band-page' style={{backgroundColor: band.background_color || "white"}}> 
        <div className = 'band-page-content'>
        {this.state.albumClicked ? 
    <Redirect to={`/album/${this.state.albumId}`} />
      :
      ""}
        <div className="banner-wrapper">
            {banner}
       </div> 
      
           <div className="band-page-body"> 
           <div className = 'band-page-columns-container'>
              {this.props.wildcard === this.props.sessionId + '' ? (<Link to='/album' className ='link-to-create-album-page'> Create album</Link>)
             : ''}

                <AlbumPlayer album={album} band={band}/>

                <div className = 'band-column-3'>
                {band.band_description} band descriptors
                {photo}
                </div>
               
                </div>
            </div>
            </div> 
        </div>)
}
}

export default Band;