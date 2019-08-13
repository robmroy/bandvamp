import React from 'react';
import { Link } from 'react-router-dom';
import lunasol from '../assets/images/luna_y_sol.png';
class Showcase extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
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
         <div className = 'small-pic' style={{"background-image": 'url('+window.sidepic1+')'}}>
           </div>
           <div className = 'small-pic-text'>High Scores: Ben Prunty’s Moody, Trance-Inspired “Photographs” OST</div>
         </div>
         <div className = 'small-pic-item'>
         <div className = 'small-pic' style={{"background-image": 'url('+window.sidepic2+')'}}>
           </div>
           <div className = 'small-pic-text'>Gabe 'Nandez Finds a Home in Hip-Hop</div>
         </div>
         <div className = 'small-pic-item'>
         <div className = 'small-pic' style={{"background-image": 'url('+window.sidepic3+')'}}>
           </div>
           <div className = 'small-pic-text'>Text3</div>
         </div>
       </div>
       </div>
     )

  }
}

export default Showcase;