import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albumClicked: false, albumId: null}
  }

  componentDidMount(){
      this.props.fetchBand();
  }
  clickAlbum(album){
    this.setState({albumClicked: true, albumId: album.id})
  }
  render(){
    
    const band = this.props.band || {};
    const albums = Object.values(band.albums || {});
    const bannerUrl = band.bannerUrl;
    const banner = !bannerUrl || bannerUrl.endsWith("345892746528734589234728") ?
    "" : <img src={bannerUrl} className="banner"/>;
    return (
        <div className='band-page'>  
        {this.state.albumClicked ? 
    <Redirect to={`/album/${this.state.albumId}`} />
      :
      ""}
        <div className="banner-wrapper">
            {banner}
       </div> 
      
           <div className="band-page-body"> 
              <div className="band-name"> {band.band_name} </div>
               {band.band_description}
               <div className=
               {albums.length >= 3 ?
                "grid-container"
                :
                "couple-albums"
              }>
                {albums.slice(0,9).map((album, idx) =>
                   <div key={idx} className = "grid-item"> 
                    {/* <div>{album.name} </div> */}
                       <img src={album.photoUrl} className='album-small' 
                       onClick = {() => this.clickAlbum(album)}/>                    
                    </div>)}
                    {[...Array(Math.max(0, 9-albums.length)).keys()].map( (_, idx) =>
                      <div key={idx + 9} className='grid-item'></div>) }
                </div>
            </div>
        </div>)
}
}

export default Band;