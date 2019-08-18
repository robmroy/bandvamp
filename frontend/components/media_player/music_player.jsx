import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { relative } from 'path';
class MusicPlayer extends Component {

  constructor(props){
    super(props);
    const {currentTrackNumber, songs} = props;
    this.state = {playing: props.playing || false,
    handlingMouseMove: false,
    song: songs[currentTrackNumber - 1],
    currentTrackNumber
        }
    this.audio = React.createRef();
    this.intervalId = React.createRef();
    this.app = document.getElementById("App");
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.onloadHandler=this.onloadHandler.bind(this);
  }


  componentDidUpdate(prevProps){
    const {currentTrackNumber, songs, playing} = this.props;
    if (prevProps.songs !== songs){
    this.setState ( {playing: playing || false,
    handlingMouseMove: false,
    song: songs[currentTrackNumber - 1] || songs[0],
    currentTrackNumber
        });
        return;
    }
    if(prevProps.currentTrackNumber !== currentTrackNumber){
      this.setState({currentTrackNumber,
      song: this.props.songs[currentTrackNumber - 1]},
      )
    }
  }
  componentWillUnmount(){
    if (this.intervalId) clearInterval(this.intervalId);
  }
  
  play(){
      const ac = this.audio.current;
      let sliderPos = 0;
      
      if (!this.state.playing){
        this.intervalId = setInterval(
          () => {if(!(this.state.handlingMouseMove)) {
            if (ac.currentTime === ac.duration){
              clearInterval(this.intervalId);
              this.nextSong();
            }
            this.setState({sliderPos:
             (ac ? 300 * ac.currentTime/ac.duration : 0)})}}, 100)}
    this.setState({playing: true});
    this.audio.current.play();
  }

  pause(){
    if (!this.state.playing) return;
    this.audio.current.pause();
    this.setState({playing: false}, () => {
      clearInterval(this.intervalId);
    })
  }

  swapPlayPause(){
    this.state.playing ? this.pause() : this.play();
  }

  sliderClick(e){
    const app = this.app;
    app.addEventListener('mousemove', this.handleMouseMove);
    app.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e){
    const mpc = document.getElementById('progress-bar-container');
    const x = e.clientX - mpc.offsetLeft; 
    this.setState({sliderPos: x, handlingMouseMove: true});

  }

  handleMouseUp(e){
    const ac = this.audio.current;
    this.app.removeEventListener('mousemove',this.handleMouseMove)
    ac.currentTime = this.state.sliderPos * ac.duration /300;
    this.setState({handlingMouseMove: false})
  }

  nextSong(){
    this.props.nextSong();
    const songs = this.props.songs;
    const numSongs = songs.length;
    let currentTrackNumber = this.state.currentTrackNumber + 1;
    currentTrackNumber = ((currentTrackNumber -1) % numSongs)+1;

   this.setState({currentTrackNumber, song: songs[currentTrackNumber],
    sliderPos: 0});    
  }

  onloadHandler(){
    if (this.state.playing)  this.audio.current.play();
  }

  playPauseIcon(){
    if (this.state.playing) {
      return <i className="fas fa-pause playpause-icon"/>
    } else {
      return <i className="fas fa-play playpause-icon"/>
    }
  }



  render () {
    const ac = this.audio.current;
    let {song} = this.state;
    return (
    <div>
    <audio src={song.audioUrl} ref = {this.audio} controls
    onLoadedMetadata={this.onloadHandler}
                     />
    <div className = 'music-player-controls'>
    <button className='playpause-btn' onClick={()=>this.swapPlayPause()}  >{this.playPauseIcon()}</button>
    <div id = 'progress-bar-container'>
      <div>{song.name}</div>
    <div className = "slider" 
      onMouseDown = {e => this.sliderClick(e)} 
      style={{left: this.state.sliderPos+'px'}}>
      sl
    </div>
    </div>
    </div>
    </div>
    )
  }
}

export default MusicPlayer;