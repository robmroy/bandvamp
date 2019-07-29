import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import searchIcon from '../../../app/assets/images/search.png';
class Search extends React.Component{
    constructor(props){
      super(props);
    this.state = {query: ""};
    this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
      const val = e.target.value;
      this.setState({query: val});
      this.props.search(val);
    }

    render(){
    let props = this.props || {};
    let results = props.results || [];
    return (
        <div className = "dropdown">
        <div className="search-bar-wrapper">
        
       <img src={searchIcon} className="search-icon"/>
        <input className="search-bar" placeholder="Search music"
        value={this.state.query} onChange={this.handleChange}/>
   
        </div>
        <div className="dropdown-content">
         
          {results.map((result, idx) => 
            <p key={idx}>{result.name || result.band_name}</p>)}
          </div>
        </div>
    );
    }
}

export default Search;