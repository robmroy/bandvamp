import { Link } from 'react-router-dom';
import React from 'react';

const selectSignup = () => {
  return (
    <div>
    <Link to="/signup/band" >Signup as an artist</Link> &nbsp; &nbsp;
    <Link to="/signup/fan" >Signup as a fan</Link>
    </div>
  )
}

export default selectSignup;