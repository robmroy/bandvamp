import React from 'react';
import MusicPlayer from '../media_player/music_player';

class Album extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTrackNumber: 1
        }
    }

    componentDidMount(){
       this.props.fetchAlbum();
    }
    songClick(idx){
        this.setState({currentTrackNumber: idx + 1});
    }
    render(){
        let songs = this.props.songs || [];
        const currentSong=songs[this.state.currentTrackNumber - 1] || {};
        const album = this.props.album;
        const photoUrl = album ? album.photoUrl : null;
        console.dir(album);
        console.log("currentSongurl:");
        console.dir(currentSong.audioUrl);
        const image = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
        "" : <img src={photoUrl} className="album-cover"/>;
        return (
            <div className='album-page'>   
               <div className="album-page-body"> 
                   <div className="album-page-c1">
                   <h2> {album.name} </h2> by 
                     {album.band ? " " + album.band.band_name : ""}
                    <audio controls src={currentSong.audioUrl}></audio>
                    <div className="current-song"> 
                    {`${this.state.currentTrackNumber}. ${currentSong.name}`} 
                     </div>
                    <div> {songs.map( (song, idx) => (

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
export default Album;