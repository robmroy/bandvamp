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
                {albums.map((album, idx) =>
                   <div key={idx}> 
                    <div>{album.name} </div>
                    <div> <img src={album.photoUrl} /> </div>                    
                    </div>)}
            </div>
        </div>)
}
}

export default Band;