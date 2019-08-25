import React from 'react';
import MusicPlayer from '../media_player/music_player';
import {Link} from 'react-router-dom';
class AlbumPlayer extends React.Component{
    constructor(props){
        super(props);
        let currentTrackNumber = 1;
        const {songId, faveTrackNum} = props;
        if (songId){
            currentTrackNumber = props.album.songs.find(s => (s.id ===songId)).track_number;
        }
        else if(faveTrackNum){
            currentTrackNumber = faveTrackNum;
        }
        this.state = {
            currentTrackNumber
        }
        this.musicPlayer=React.createRef();
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.renderBuyAlbum=this.renderBuyAlbum.bind(this);
        this.handleBuyAlbum=this.handleBuyAlbum.bind(this);

    }


    componentDidUpdate(prevProps){
        const {songId, album} = this.props;
        if(prevProps.songId !== songId ||
             album.id !== prevProps.album.id){
            if (songId){
                this.setState({currentTrackNumber: album.songs.find(s => (s.id ===songId)).track_number})
            }
            else this.setState({currentTrackNumber: 1});
        }
    }
    songClick(idx){
        this.setState({currentTrackNumber: idx + 1},
           () => this.musicPlayer.current.play());
    }
    
    nextSong(){
        let currentTrackNumber = this.state.currentTrackNumber + 1;
        this.setState({currentTrackNumber});
    }

    prevSong(){
        let currentTrackNumber = this.state.currentTrackNumber - 1;
        this.setState({currentTrackNumber});
    }

    renderBuyAlbum(){
        const {user, album} = this.props;
        if (user && user.purchased_albums.map(a=>a.id).includes(album.id))
        {return <div className='you-own-this link'
        onClick={() => 
            this.props.history.push(`/user/${user.id}`)}><i className='fas fa-heart'/> You own this</div>}
        
        else{
            return <div className='buy-digital-album'
            onClick={this.handleBuyAlbum}>Buy Digital Album</div>
        }
    }

    handleBuyAlbum(){
        const {user} = this.props;
        if (user) this.props.createPurchase();
        else this.props.openModal();
    }


    render(){
        const album = this.props.album;
        if (!album ) return '';
        const band = this.props.band;
        const songs = album.songs;
        const currentTrackNumber = this.state.currentTrackNumber;
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

                       <MusicPlayer ref={this.musicPlayer} prevSong={this.prevSong} 
                       nextSong = {this.nextSong} songs = {songs}
                       currentTrackNumber = {currentTrackNumber}/> 
                    <div className = 'digital-1'>Digital Album</div>
                    <div className = 'digital-2'>Includes unlimited streaming via the free Bandvamp app.</div>
                    {this.renderBuyAlbum()}
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