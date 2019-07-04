import React from 'react';
import { Link } from 'react-router-dom';

class Showcase extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    
     return <img src={window.lunaURL}/> ;
  }
}

export default Showcase;