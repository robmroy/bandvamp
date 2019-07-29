import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import searchIcon from '../../../app/assets/images/search.png';
class Search extends React.Component{
    constructor(props){
      super(props);
    this.state = {query: "", redirect: ""};
    this.handleChange=this.handleChange.bind(this);
    this.linkToShow=this.linkToShow.bind(this);
    }
    handleChange(e){
      const val = e.target.value;
      this.setState({query: val});
      this.props.search(val);
    }
    linkToShow(result){
      return e => {
        if(result.type === "band"){
          this.setState({redirect: 
          < Redirect to={`/band/${result.id}`} /> });
        }
        else if (result.type ==="album"){
          this.setState({redirect: 
          < Redirect to={`/album/${result.id}`} />})     
        }
        else {  
          this.setState({redirect: 
          < Redirect to={`/album/${result.album_id}`} />
        }) 
          console.log(this.state.redirect)
        }
      }
    }
    render(){
    let props = this.props || {};
    let results = props.results || [];
    return (
        <div className = "dropdown">
          {this.state.redirect}
        <div className="search-bar-wrapper">
        
       <img src={searchIcon} className="search-icon"/>
        <input className="search-bar" placeholder="Search music"
        value={this.state.query} onChange={this.handleChange}/>
   
        </div>
        <div className="dropdown-content">
         
          {results.map((result, idx) => 
            <p key={idx} onClick={this.linkToShow(result)}>
            {result.name || result.band_name}</p>)}
          </div>
        </div>
    );
    }
}

export default Search;