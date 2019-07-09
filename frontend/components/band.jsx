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
    const photoUrl = band.photoUrl;
    const banner = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
    "" : <img src={photoUrl} className="banner"/>;
    return (
        <div className='band-page'>  
        <div className="banner-wrapper">
                        {banner}
       </div> 
      
           <div className="band-page-body"> 
               {band.band_name}
               {band.band_description}
                Albums will go here.
            </div>
        </div>)
}
}

export default Band;