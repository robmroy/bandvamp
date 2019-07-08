import React from 'react';

class Album extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const that = this;
       this.props.fetchAlbum();
    }
    render(){
        const album = this.props.album;
        const photoUrl = album.photoUrl;
        return (
            <div className='album-page'>   
               <div> 
                   <h2> {album.name} </h2> by 
                {album.band ? " " + album.band.band_name : ""} 
                <img src={photoUrl} className="album-cover"/>
                </div>
            </div>)
    }
}
export default Album;