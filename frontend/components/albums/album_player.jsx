import React from 'react';
import MusicPlayer from '../media_player/music_player';
import {Link} from 'react-router-dom';
class AlbumPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTrackNumber: 1,
            wildcard: props.wildcard
        }
    }

    // componentDidMount(){
    //     this.props.fetchAlbum();
    //  }

    songClick(idx){
        this.setState({currentTrackNumber: idx + 1});
    }
    
    render(){
        const album = this.props.album;
        const band = this.props.band;
        console.dir(band);
        const songs = album.songs;
        const currentSong=songs[this.state.currentTrackNumber - 1] || {};
        const photoUrl = album ? album.photoUrl : null;
        const image = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
        "" : <img src={photoUrl} className="album-cover"/>;
        return (
            <div className='album-page' >   
                   <div className = 'album-title-large'> {album.name} </div> 
                   <div> by 
                     {
                        <Link to={`/band/${band.id}`}
                        className = "album-to-band">
                       {' '+band.band_name} </Link>
                        } </div>
               <div className="album-columns-container"> 
                   <div className="album-page-c1">
                    <audio controls src={currentSong.audioUrl}></audio>
                    <div className="current-song"> 
                    {
                        currentSong ? `${this.state.currentTrackNumber}. ${currentSong.name}`
                    : "No songs yet!"} 
                     </div>
                    <div className = 'song-links'> {songs.map( (song, idx) => (

                    <div className='song-link' 
                    onClick={() => this.songClick(idx)}
                    key = {idx}
                    > {`${idx + 1}. ${song.name}`} 
                    </div>

                     ) )}
                        
                    </div>
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
export default AlbumPlayer;