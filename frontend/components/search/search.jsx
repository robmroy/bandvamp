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
      const pathname = this.props.history.location.pathname;
      return e => {
        if(result.type === "band"){
          this.setState({redirect: 
          < Redirect to={`/band/${result.id}`} /> });
        }
        else if (result.type ==="album"){
          // this.setState({redirect: 
          // < Redirect to={`/album/${result.id}`} />
        // })
        const bandId = result.band.id;
        if(pathname.endsWith(bandId) ){
        this.props.history.replace({pathname: `/band/${result.band.id}`,
      state: {albumId: result.id}});    }
      else {this.props.history.push({pathname: `/band/${result.band.id}`,
      state: {albumId: result.id}});}

        }
        else {  
          const bandId = result.album.band_id;
          if(pathname.endsWith(bandId) ){
          this.props.history.replace({pathname: `/band/${result.album.band_id}`,
          state: {albumId: result.album_id, songId: result.id}});   
          }
          else  {
            this.props.history.push({pathname: `/band/${result.album.band_id}`,
            state: {albumId: result.album_id, songId: result.id}});   
            }

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
        
        <input className="search-bar" placeholder="Search music"
        value={this.state.query} onChange={this.handleChange}/>
       <img src={searchIcon} className="search-icon"/>
   
        </div>
        {results.length ? 
        <div className="dropdown-content">
         
          {results.map((result, idx) => 
            <p key={idx} onClick={()=>this.linkToShow(result)()} className='search-result-link'>
            {result.name || result.band_name}</p>)}
          </div>
          : ''}
        </div>
    );
    }
}

export default Search;