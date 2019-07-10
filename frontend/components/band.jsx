import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class Band extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.fetchBand();
  }

  render(){
    const band = this.props.band || {};
    const albums = Object.values(band.albums || {});
    const bannerUrl = band.bannerUrl;
    const banner = !bannerUrl || bannerUrl.endsWith("345892746528734589234728") ?
    "" : <img src={bannerUrl} className="banner"/>;
    return (
        <div className='band-page'>  
        <div className="banner-wrapper">
            {banner}
       </div> 
      
           <div className="band-page-body"> 
               {band.band_name}
               {band.band_description}
               <div className="grid-container">
                {albums.map((album, idx) =>
                   <div key={idx} className = "grid-item"> 
                    <div>{album.name} </div>
                       <img src={album.photoUrl} className='album-small' />                    
                    </div>)}
                    {[...Array(9-albums.length).keys()].map( (_, idx) =>
                      <div key={idx + 9} className='grid-item'></div>) }
                </div>
            </div>
        </div>)
}
}

export default Band;