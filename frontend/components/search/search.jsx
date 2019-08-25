import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import searchIcon from '../../../app/assets/images/search.png';
class Search extends React.Component{
    constructor(props){
      super(props);
    this.state = {query: "", redirect: "",
  dropdown: false};
    this.handleChange=this.handleChange.bind(this);
    this.linkToShow=this.linkToShow.bind(this);
    this.renderResultItem = this.renderResultItem.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    handleChange(e){
      this.setState({dropdown: true});
      const val = e.target.value;
      this.setState({query: val});
      this.props.search(val);
    }
    handleOutsideClick(e){
      setTimeout(()=>this.setState({dropdown: false},
        () => document.getElementById('App').removeEventListener(
          'click',  this.handleOutsideClick
        )),10);
      console.dir(e);
    }
    handleClick(){
      this.setState({dropdown: true},
        () => document.getElementById('App').addEventListener(
          'click',  this.handleOutsideClick
        ));
    }
    componentWillUnmount(){
      document.getElementById('App').removeEventListener(
        'click',  this.handleOutsideClick
      )
    }
    linkToShow(result){
      const pathname = this.props.history.location.pathname;
      const push = this.props.history.push;
      return e => {
        if(result.type === "artist"){
        push(`/band/${result.id}`)
        }
        else if (result.type ==="album"){
        const bandId = result.band_id;
        if(pathname.endsWith(bandId) ){
        this.props.history.replace({pathname: `/band/${result.band_id}`,
      state: {albumId: result.id}});    }
      else {this.props.history.push({pathname: `/band/${result.band_id}`,
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
    renderResultItem(result, idx){
      const name = result.type === 'artist' ? result.band_name : result.name;
      const photoUrl =result.photoUrl; 
      return (
       <div key={idx} onClick={()=>this.linkToShow(result)()} 
       className='search-result-link'><img className='small-result-left' src={photoUrl}/> 
       <span className = 'small-result-right' >
          <div className = 'result-title'>{name}</div>
       {result.type === 'artist' ? null : <div>by {result.band_name}</div>}
       <div className='result-type'> {result.type} </div></span>
       </div> 
      )

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
        value={this.state.query} onChange={this.handleChange}
        onClick={e=>{this.handleClick(); e.stopPropagation(); }}/>
   
        </div>
        {results.length && this.state.dropdown ? 
        <div className="dropdown-content">
         
          {results.slice(0,5).map((result, idx) => 
            this.renderResultItem(result,idx))}
        </div> : null}
    </div>  
    );
          }
        }

export default Search;