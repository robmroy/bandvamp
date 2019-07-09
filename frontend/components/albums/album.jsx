import React from 'react';
import MusicPlayer from '../media_player/music_player';

class Album extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
       this.props.fetchAlbum();
    }
    
    render(){
        const album = this.props.album;
        const photoUrl = album ? album.photoUrl : null;
        const image = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
        "" : <img src={photoUrl} className="album-cover"/>;
        return (
            <div className='album-page'>   
               <div className="album-page-body"> 
                   <div className="album-page-c1">
                   <h2> {album.name} </h2> by 
                     {album.band ? " " + album.band.band_name : ""}
                    <MusicPlayer/>
                    <div> Track list will be displayed here </div>
                 </div>
                    <div className="album-page-c2">
                    <div className="album-cover-wrapper">
                        {image}
                    </div>
                    </div>
                </div>
            </div>)
    }
}
export default Album;