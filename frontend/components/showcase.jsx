import React from 'react';
import { Link } from 'react-router-dom';
import NotablesContainer from './notables_container';
import SellingNow from './selling_now';
class Showcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brightness: [null, '','','']};
  }

  brighten(i){
    let brightness = this.state.brightness;
    brightness[i] = '-bright';
    return () => this.setState({brightness});
  }
  darken(i){
    let brightness = this.state.brightness;
    brightness[i] = '';
    return () => this.setState({brightness});
  }

  componentDidMount(){
    this.props.fetchAllAlbums();
}
  featureClickHandler(album, faveTrackNum){
    this.props.history.push({pathname: `/band/${album.band_id}`,
        state: {albumId: album.album_id,
          faveTrackNum
        }});  
  }
  render(){
    const wtc = this.props.albums.find(alb =>
      alb.name === "Bach: Well​-​Tempered Clavier, Book 1")
      if (!wtc) return '';
    const faveTrackNum = 5;
   
    const [brighten, darken]=[this.brighten.bind(this), this.darken.bind(this)];

    return 	(
      <div className = 'showcase'>
    <div className = 'showcase-pics-container'>
    <div className='showcase-large' >
      <img className = 'showcase-large-pic' src = {window.shura}/>
      <div className='showcase-pic-main-text'>On "forever," Shura Keeps Love Center Stage</div>

      <a target="_blank" href="https://daily.bandcamp.com/2019/08/12/shura-forevher-interview/">
      <div className='read-more-container'> 
      <div className='read-more'>read more</div>
       <div className='read-more-external-link'> external link </div>
       </div>
       </a>

       </div>
       <div className = 'small-pics-container'>
         <div className = 'small-pic-item'>
         <div className = {'small-pic'+this.state.brightness[1]} style={{backgroundImage: 'url('+window.sidepic1+')'}}
         onMouseEnter={() => {brighten(1)(); }}
         onMouseLeave={() => darken(1)()}
         onClick = {()=>this.featureClickHandler(wtc, 5)}
         >
           </div>
           <div className = 'small-pic-text'
           onMouseEnter={() => {brighten(1)()}} onMouseLeave={() => darken(1)()}>High Scores: Ben Prunty’s Moody, Trance-Inspired “Photographs” OST</div>
         </div>

         <div className = 'small-pic-item'>
         <div className = {'small-pic'+this.state.brightness[2]} style={{backgroundImage: 'url('+window.sidepic2+')'}}
         onMouseEnter={() => {brighten(2)(); }}
         onMouseLeave={() => darken(2)()}
         onClick = {()=>this.featureClickHandler(wtc, 5)}
         >
           
           </div>
           <div className = 'small-pic-text'
           onMouseEnter={() => {brighten(2)()}}
           onMouseLeave={() => darken(2)()}>Gabe 'Nandez Finds a Home in Hip-Hop</div>
         </div>

         <div className = 'small-pic-item'>
         <div className = {'small-pic'+this.state.brightness[3]} style={{backgroundImage: 'url('+window.sidepic3+')'}}
         onMouseEnter={() => {brighten(3)(); }}
         onMouseLeave={() => darken(3)()}
         onClick = {()=>this.featureClickHandler(wtc, 5)}
         >
           </div>
           <div className = 'small-pic-text'
           onMouseEnter={() => {brighten(3)()}}
           onMouseLeave={() => darken(3)()}>Gabber Modus Operandi Galvanize Indonesian Folk Into Feverish Footwork</div>
         </div>

       </div>
       </div>

       <div className = 'blue-body'>
         <SellingNow albums={this.props.albums}/>
       <NotablesContainer/>
       </div>
       </div>
     )

  }
}

export default Showcase;