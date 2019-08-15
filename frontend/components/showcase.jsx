import React from 'react';
import { Link } from 'react-router-dom';
import lunasol from '../assets/images/luna_y_sol.png';
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
  render(){
    
   
    const [brighten, darken]=[this.brighten.bind(this), this.darken.bind(this)];

    return 	(
    <div className = 'showcase-pics-container'>
    <div className='showcase-large' >
      <img className = 'showcase-large-pic' src = {window.shura}/>
      <div className='showcase-pic-main-text'>On "forever," Shura Keeps Love Center Stage</div>

      <a target="_blank" href="https://daily.bandcamp.com/2019/08/12/shura-forevher-interview/">
      <div className='read-more-container'> 
      <div className='read-more'>Read More</div>
       <div className='read-more-external-link'> external link </div>
       </div>
       </a>

       </div>
       <div className = 'small-pics-container'>
         <div className = 'small-pic-item'>
         <div className = {'small-pic'+this.state.brightness[1]} style={{backgroundImage: 'url('+window.sidepic1+')'}}
         onMouseEnter={() => {brighten(1)(); }}
         onMouseLeave={() => darken(1)()}>
           </div>
           <div className = 'small-pic-text'
           onMouseEnter={() => {brighten(1)()}} onMouseLeave={() => darken(1)()}>High Scores: Ben Prunty’s Moody, Trance-Inspired “Photographs” OST</div>
         </div>

         <div className = 'small-pic-item'>
         <div className = {'small-pic'+this.state.brightness[2]} style={{backgroundImage: 'url('+window.sidepic2+')'}}
         onMouseEnter={() => {brighten(2)(); }}
         onMouseLeave={() => darken(2)()}>
           </div>
           <div className = 'small-pic-text'
           onMouseEnter={() => {brighten(2)()}}
           onMouseLeave={() => darken(2)()}>Gabe 'Nandez Finds a Home in Hip-Hop</div>
         </div>

         <div className = 'small-pic-item'>
         <div className = {'small-pic'+this.state.brightness[3]} style={{backgroundImage: 'url('+window.sidepic3+')'}}
         onMouseEnter={() => {brighten(3)(); }}
         onMouseLeave={() => darken(3)()}>
           </div>
           <div className = 'small-pic-text'
           onMouseEnter={() => {brighten(3)()}}
           onMouseLeave={() => darken(3)()}>Gabber Modus Operandi Galvanize Indonesian Folk Into Feverish Footwork</div>
         </div>




         {/* <div className = 'small-pic-item'>
         <div className = 'small-pic' style={{"background-image": 'url('+window.sidepic2+')'}}>
           </div>
           <div className = 'small-pic-text'>Gabe 'Nandez Finds a Home in Hip-Hop</div>
         </div>
         <div className = 'small-pic-item-3'>
         <div className = 'small-pic' style={{"background-image": 'url('+window.sidepic3+')'}}>
           </div>
           <div className = 'small-pic-text'>Gabber Modus Operandi Galvanize Indonesian Folk Into Feverish Footwork</div>
         </div> */}
       </div>
       </div>
     )

  }
}

export default Showcase;