import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class Band extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }

  render(){
    
     return <img src={window.lunaURL}/> ;
  }
}

export default withRouter(Band);